import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import {fetchTours, fetchMainImg } from "../slices/fetchTours"; 
import Arrows from "./arrows";

const ToursList = () => {
  const dispatch = useDispatch();
  const { tours = [], loading, error, mainImg } = useSelector(
    (state) => state.fetchAvaliableTours || {}
  );

  const [slide, setSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(fetchMainImg());
  }, [dispatch]);

  // адаптивність
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickLeft = () => setSlide((prev) => Math.max(prev - slidesPerView, 0));
  const onClickRight = () =>
    setSlide((prev) =>
      Math.min(prev + slidesPerView, Math.max(tours.length - slidesPerView, 0))
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="general_container">
      <section className="carousel_title">
        <h2>Explore Our Popular Destinations</h2>
        <Arrows onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </section>

      <section className="carousel">
        {(tours ).map((tour) => (
          <section className="tours" key={tour.id}>
            <img
              className="logo_tour"
              src={tour.mainImg || mainImg || "fallback.jpg"}
              alt={tour.title}
            />
            <h2>{tour.title}</h2>

            <section className="dest_price">
              <h3>from</h3>
              <h2>
                <strong>{tour.adultPrice} €</strong>
              </h2>
            </section>

            <section className="details">
              <section className="sub_details">
                <Icon
                  icon="system-uicons:calendar-month"
                  color="#FA8B02"
                  height="1.5em"
                  width="1.5em"
                />
                <p>{tour.visit}</p>
              </section>

              <section className="sub_details">
                <Icon icon="mdi:account-group" color="#FA8B02" height={24} width={24} />
                <p>{tour.people}</p>
              </section>
            </section>

            <p>{tour.short_description}</p>
          </section>
        ))}
      </section>
    </section>
  );
};

export default ToursList;
