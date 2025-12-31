import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { createNewBooking } from "../slices/bookingSlice";
import { setTotalAdultPrice, setTotalChildPrice, setTotalInfantPrice, setTotalPrice } from "../slices/tourByIdSlice";
import { setStatus } from "../slices/paymentSlice";

export default function TicketOverview({ nextLink, ableConfirm: ableConfirmProp }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedDate, selectedTime } = useSelector((state) => state.datepicker);
  const mainImg = useSelector((state) => state.tour.mainImg);
  const { adultValue, childValue, infantValue, totalAdultPrice, totalChildPrice, totalInfantPrice, totalPrice } =
    useSelector((state) => state.tour);
  const { tour, loading, error } = useSelector((state) => state.tour);

  const { method, isValid, status } = useSelector((state) => state.payment);

  useEffect(() => {
    if (tour) {
      dispatch(setTotalAdultPrice());
      dispatch(setTotalChildPrice());
      dispatch(setTotalInfantPrice());
      dispatch(setTotalPrice());
    }
  }, [adultValue, childValue, infantValue, tour, dispatch]);

  // Черга сторінок
  const steps = ["/User", "/Payment", "/OrderCompleted"];

  // Кнопка активна завжди на Booking, або залежно від payment
    const ableConfirm = ableConfirmProp ?? (method && isValid && status !== "processing");


  const handleConfirm = async (e) => {
    e.preventDefault();
    dispatch(setStatus("processing"));
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // імітація сабміту
      dispatch(createNewBooking());
      dispatch(setStatus("success"));

      // Перехід на наступну сторінку
      const currentIndex = steps.indexOf(location.pathname);
      const nextStep = steps[currentIndex + 1];
      if (nextStep) navigate(nextStep);
    } catch (error) {
      dispatch(setStatus("error"));
      console.log(error);
    }
  };

  if (!tour) return <p>Loading tour...</p>;
  if (loading) return <p>Creating booking...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="border">
      <h2>Your Tickets Overview</h2>
      <form onSubmit={handleConfirm}>
        <section className="ticketOverview_body">
          <img src={mainImg?.[tour.id] || "placeholder.jpg"} alt={tour.title} width={300} height={200} />
          <section className="ticketOverview_main">
            <h2>{tour.title}</h2>
            <section className="ticketOverview_data">
              <Icon icon="system-uicons:calendar-month" color="#FA8B02" />
              <h3>{selectedDate || "No date selected"}</h3>
            </section>
            <section className="ticketOverview_data">
              <Icon icon="system-uicons:clock" color="#FA8B02" />
              <h3>{selectedTime || "No time selected"}</h3>
            </section>
          </section>
        </section>

        <hr />

        <section>
          <TicketField label="Adult (18+)" price={tour.price} value={adultValue} total={totalAdultPrice} />
          <TicketField label="Child (6-17)" price={tour.child_price} value={childValue} total={totalChildPrice} />
          <TicketField label="Infant (0-5)" price={tour.infant_price} value={infantValue} total={totalInfantPrice} />
        </section>

        <hr />

        <section className="details">
          <h2 style={{ color: "#333" }}>Total Price</h2>
          <h2 style={{ color: "#FA8B02" }}>€{totalPrice}</h2>
        </section>

        <button type="submit" disabled={!ableConfirm} className="general_btn">
          <h3>{status === "processing" ? "Processing" : "Go to the Next Step"}</h3>
        </button>
      </form>
    </section>
  );
}

const TicketField = ({ label, price, value, total }) => {
  if (!value) return null;
  return (
    <section className="details">
      <section className="dest_price">
        <section className="pplAmount">
          <p>{value}</p>
        </section>
        <p style={{ color: "#333" }}>{label} (€{price})</p>
      </section>
      <h3>€{total}</h3>
    </section>
  );
};
