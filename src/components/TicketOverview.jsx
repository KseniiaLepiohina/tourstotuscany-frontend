import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { createNewBooking } from "../slices/bookingSlice";
import { setTotalAdultPrice,setTotalChildPrice,setTotalInfantPrice,setTotalPrice } from "../slices/tourByIdSlice";
export default function TicketOverview({ nextLink, onNext }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const { selectedDate, selectedTime } = useSelector((state) => state.datepicker);

  const mainImg = useSelector((state) => state.tour.mainImg);
  const { adultValue, childValue, infantValue, totalAdultPrice, totalChildPrice, totalInfantPrice, totalPrice } =
    useSelector((state) => state.tour);

  const { tour, loading, error } = useSelector((state) => state.tour);
useEffect(() => {
  if (tour) {
    dispatch(setTotalAdultPrice());
    dispatch(setTotalChildPrice());
    dispatch(setTotalInfantPrice());
    dispatch(setTotalPrice());
  }
}, [adultValue, childValue, infantValue, tour, dispatch]);

  useEffect(() => {
    // Автоматично створюємо бронювання при рендері, якщо потрібно
    if (tour ) {
      dispatch(createNewBooking());
    }
  }, [dispatch, tour]);

 

  if (!tour) return <p>Loading tour...</p>;
  if (loading) return <p>Creating booking...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="border">
      <h2>Your Tickets Overview</h2>
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

      <button
      onClick={()=> navigate("/User")}
      className="general_btn">
        <h3>Go to the Next Step</h3>
      </button>

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
        <p style={{ color: "#333" }}>
          {label} (€{price})
        </p>
      </section>
      <h3>€{total}</h3>
    </section>
  );
};
