import { useEffect, useRef } from "react";
import Slider from "react-slick";
import Arrows from "./arrows";

import { useGetTestimonialsQuery } from "../services/tourApi";

const Reviews = ({ tour_id }) => {
  const {data:testimonials,loading,error} = useGetTestimonialsQuery(tour_id) ;

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const onClickLeft = () => sliderRef.current?.slickPrev();
  const onClickRight = () => sliderRef.current?.slickNext();

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials: {error}</p>;


  return (
    <>
      <section className="carousel_title">
        <h2>
          <strong>
            {tour_id ? "Happy Customers Say" : "Happy Customers Say"}
          </strong>
        </h2>
        <Arrows onClickLeft={onClickLeft} onClickRight={onClickRight} />
      </section>

      <section className="testimonials_viewport">
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t) => (
              <section className="testimonial_container" key={t.tour_id}>
                <h3 className="name">{t.reviewer_name}</h3>
                <p className="review">{t.comment}</p>
              </section>
            ))}
          </Slider>
        ) : (
          <p>No testimonials yet.</p>
        )}
      </section>
    </>
  );
};

export default Reviews;
