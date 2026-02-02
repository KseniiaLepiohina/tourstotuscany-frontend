import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// import group from "../assets/home/icons/Tours/group_col.svg";
// import duration from "../assets/home/icons/Tours/duration.svg";
// import location from "../assets/home/icons/Footer/location.svg";
// import guide from "../assets/home/icons/guide.svg";
// import lang from "../assets/home/icons/Tours/language.svg";
// import fees from "../assets/home/icons/Tours/ticket.svg";
// import transport from "../assets/home/icons/Tours/transport_col.svg";
import { MainGallery } from "../components/MainGallery";
import { GalleryPlaces } from "../components/GalleryPlaces";
import Testimotionals from "../Carousels/reviews.jsx";
// import back from "../assets/home/icons/CheckIn/grey_arrow.svg";
import TimePicker from "../Picker/TimePicker.jsx";
import DatePicker from "../Picker/DatePicker.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";

import Tours from "./Tours";
import { useSelector,useDispatch } from "react-redux";
import { fetchTourById, findMainImg } from "../slices/tourByIdSlice.js";

export default function SpecificTour() {
const {id} = useParams();
  const dispatch = useDispatch();

useEffect((id) => {
  dispatch(fetchTourById(id));
  dispatch(findMainImg(id));
}, [dispatch]);

const {  tour, loading, error } = useSelector((state) => state.tour);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <section className="specifictour">
      <section>
        <Link to="/tours" element={<Tours />}>
          <span className="btn_back">
            <Icon icon="bi:arrow-right" height={24} width={24} rotate="180deg" />
            <p>Back</p>
          </span>
        </Link>
      </section>

      <section className="main_specificTour">
        <MainGallery id={id}/>
        <section className="tour" key={tour.id}>
          <section className="spectTour_intro">
            <h2>{tour.title}</h2>
            <section className="specTour_price">
              <h2>from</h2>
              <p>
                <strong>{tour.price} €</strong>
              </p>
            </section>
            <h3>{tour.description}</h3>
          </section>

          <section className="spectTour_intro">
            <h3>Select a date</h3> 
            <DatePicker />
          </section>
          <section className="spectTour_intro">
            <h3>Time</h3>
            <section className="book_set">
              <TimePicker />
            </section>
          </section>
          <Link to={`/booking/${tour.id}`}>
            <button className="general_btn">Buy Now</button>
          </Link>
        </section>
      </section>
      <section className="detail_container">
        <h3>Details</h3>
        <p>{tour.details}</p>
        <section className="detail">
          <Icon
            icon="mdi:account-group"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="number of people in the group"
          />
         
          <h3>Number of group: {tour.group_size}</h3>
        </section>
        <section className="detail">
          <Icon
            icon="mdi:hourglass"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="trip duration"
          />
         
          <h3>
            <strong>Duration:</strong> {tour.duration}
          </h3>
        </section>

        <section className="detail">
          
          <Icon
            icon="mdi:map-marker"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="departure area"
          />
          <h3>Departuring and arriving areas: {tour.depart_area}</h3>
        </section>

        <section className="detail">
         
          <Icon
            icon="mdi:hiking"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="included guide"
          />
          <h3>Guide service: {tour.guide}</h3>
        </section>

        <section className="detail">
          
          <Icon
            icon="mdi:translate"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="language tour"
          />
          <h3>Language: {tour.language}</h3>
        </section>

        <section className="detail">
          
          <Icon
            icon="f7:tickets-fill"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="entry fee"
          />
          <h3>Entry Fees: {tour.fees}</h3>
        </section>

        <section className="detail">
          <Icon
            icon="mdi:bus"
            color="#FA8B02"
            height={24}
            width={24}
            role="img"
            aria-label="available transport"
          />
          <h3>Transportation: {tour.transport}</h3>
        </section>
      </section>
      <GalleryPlaces />

      <Testimotionals tourId={tour.tour_id} />
    </section>
  );
}
