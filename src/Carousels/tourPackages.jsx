// import React, { useEffect, useRef, useState } from "react";
// import { Icon } from "@iconify/react";
// import Slider from "react-slick";
// import Arrows from "./arrows";
// import axios from "axios";

// const tourPackages = ()=> {
//   const sliderRef = useRef(null);

//   const [tours, setTours] = useState([]);
//   const [loading, setLoading] = useState(false);

//  const getTours = async () => {
//   try {
//     setLoading(true);
//     const res = await axios.get("http://localhost:3000/tour/tours");
//     setTours(res.data);
//   } catch (error) {
//     console.error("Error loading tours:", error);
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     getTours()
//   }, []);
// console.log("tour:", tours);


//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const onClickLeft = () => {
//     sliderRef.current.slickPrev();
//   }
//   const onClickRight = () => {
//     sliderRef.current.slickNext();
//   }

//   return (
//     <section className="general_container">
//       <section className="carousel_title">
//         <h2>Explore Our Popular Destinations</h2>
//         <Arrows
//           onClickLeft={onClickLeft}
//           onClickRight={onClickRight}
//         />
//       </section>
// {loading ? (
//   <p>Loading...</p>
// ) : (
//       <section >
//         <Slider ref={sliderRef} {...settings}>
//           {tours.map((tour) => (
//             <section className="tours" key={tour.id}>
//               <img className="logo_tour" src={tour.img} alt={tour.title} />
//               <h2>{tour.title}</h2>

//               <section className="dest_price">
//                 <h3>from</h3>
//                 <h2>
//                   <strong>{tour.adultPrice} €</strong>
//                 </h2>
//               </section>

//               <section className="details">
//                 <section className="sub_details">
//                   <Icon
//                     icon="system-uicons:calendar-month"
//                     color="#FA8B02"
//                     height="1.5em"
//                     width="1.5em"
//                   />
//                   <p>{tour.visit}</p>
//                 </section>

//                 <section className="sub_details">
//                   <Icon
//                     icon="mdi:account-group"
//                     color="#FA8B02"
//                     height={24}
//                     width={24}
//                   />
//                   <p>{tour.people}</p>
//                 </section>
//               </section>

//               <p>{tour.short_description}</p>
//             </section>
//           ))}


//         </Slider>
//       </section>)}
//     </section>
//   );
// }

// export default tourPackages;