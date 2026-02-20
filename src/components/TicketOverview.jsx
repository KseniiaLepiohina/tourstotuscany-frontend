import { useNavigate, useParams } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useGetMainImageQuery, useGetTourByIdQuery } from "../services/tourApi";
import { selectedDate,selectedTime } from "../slices/dateSlice";

export default function TicketOverview({ nextLink, onNext }) {
  const navigate = useNavigate();
  const { id ,tour_id} = useParams(); 

  const {data:image} = useGetMainImageQuery(tour_id);

  const { adultValue, childValue, infantValue } =
    useSelector((state) => state.tour);

const {data :tourData, loading, error} = useGetTourByIdQuery(id);
const totalChildPrice = ((tourData.child_price || 0 ) * childValue );
const totalAdultPrice = ((tourData.price || 0 ) * adultValue);
const totalInfantPrice = ((tourData.infant_price || 0 ) *infantValue);
const totalPrice = totalAdultPrice + totalChildPrice+ totalInfantPrice;

  if (loading) return <p>Creating booking...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="border">
      <h2>Your Tickets Overview</h2>
      <section className="ticketOverview_body">
        <img 
          src={image?.url || "placeholder.jpg"} 
          alt={tourData?.title} 
          width={300} 
          height={200} 
        />
        <section className="ticketOverview_main">
          <h2>{tourData?.title}</h2>
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
        <TicketField label="Adult (18+)" price={tourData?.price} value={adultValue} total={totalAdultPrice} />
        <TicketField label="Child (6-17)" price={tourData?.child_price} value={childValue} total={totalChildPrice} />
        <TicketField label="Infant (0-5)" price={tourData?.infant_price} value={infantValue} total={totalInfantPrice} />
      </section>

      <hr />

      <section className="details">
        <h2 style={{ color: "#333" }}>Total Price</h2>
        <h2 style={{ color: "#FA8B02" }}>€{totalPrice}</h2>
      </section>

      <button onClick={() => navigate("/User")} className="general_btn">
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
