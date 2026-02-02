import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Arrows from "./arrows";
import {
  fetchTestimonialsById,
  fetchAllTestimonials,
} from "../slices/testimonialSlice";

const Reviews = ({tour_id}) => {
  const dispatch = useDispatch();
  const [slide,setSlide] = useState(0);
  const [slidesPerView,setSlidesPerView] = useState(2);

  const {
    testimonialsById,
    allTestimonials,
    loading,
    error,
  } = useSelector((state) => state.testimonials);

  useEffect(() => {
    if (tour_id) {
      dispatch(fetchTestimonialsById(tour_id));
    } else {
      dispatch(fetchAllTestimonials());
    }
  }, [dispatch, tour_id]);
//resize
useEffect(()=> {
  const handleResize = () => {
    setSlidesPerView(window.innerWidth <=768? 1:2);
  };
  handleResize();
  window.addEventListener("resize",handleResize);
  return () => window.removeEventListener("resize", handleResize);
},[])

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials: {error}</p>;

  const testimonials = tour_id ? testimonialsById : allTestimonials;
// const totalSlides = Math.ceil(testimonials.length /slidesPerView);

const handleNextReview = () => {
  setSlide(prev =>
    Math.min(prev + slidesPerView, testimonials.length - slidesPerView)
  );
};

const handlePrevReview = () => {
  setSlide(prev => Math.max(prev - slidesPerView, 0));
};

  return (
    <>
      <section className="carousel_title">
        <h2>
          <strong>Happy Customers Say</strong>
        </h2>
        <Arrows 
        onClickLeft={handlePrevReview}
        onClickRight={handleNextReview}
        />
      </section>

      <section className="testimonials_viewport">
        <section
            className="testimonials_track"

        style={{
      transform: `translateX(-${(slide * 100) / slidesPerView}%)`,
    }}
>
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((t ) => (
            <section className="testimonial_container" key={t.id || t.tour_id}>
              <h3 className="name">{t.reviewer_name}</h3>
              <p className="review">{t.comment}</p>
            </section>
          ))
        ) : (
          <p>No testimonials yet.</p>
        )}
        </section>
      </section>
    </>
  );
};

export default Reviews;
