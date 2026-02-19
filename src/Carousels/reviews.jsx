import Arrows from "./arrows";

import {useGetTestimonialsByIdQuery,useGetAllTestimonialsQuery} from "../services/tourApi";

const Reviews = ({ tour_id }) => {
  
  const { 
    data: allData, 
    isLoading: isAllLoading, 
    error: allError 
  } = useGetAllTestimonialsQuery(undefined, { skip: !!tour_id });

  const { 
    data: tourData, 
    isLoading: isTourLoading, 
    error: tourError 
  } = useGetTestimonialsByIdQuery(tour_id, { skip: !tour_id });

  const testimonials = tour_id ? tourData : allData;
  const isLoading = tour_id ? isTourLoading : isAllLoading;
  const error = tour_id ? tourError : allError;

  if (isLoading) return <p>Loading testimonials...</p>;
  
  if (error) return <p>Error loading testimonials: {JSON.stringify(error.data)}</p>;
  console.log("reviews", allData);


  return (
    <section className="carousel_wrapper">
      <section className="carousel_title">
        <h2><strong>Happy Customers Say</strong></h2>
        <Arrows />
      </section>

      {Array.isArray(testimonials) && testimonials.length > 0 ? (
        testimonials.map((t) => (
          <section className="carousel_container" key={t.id || t.tour_id}> 
            <ul> 
              <li><h3 className="name">{t.reviewer_name}</h3></li>
              <li><p className="review">{t.comment}</p></li>
            </ul>
          </section>
        ))
      ) : (
        <p>No testimonials yet.</p>
      )}
    </section>
  );
};
 export default Reviews;
