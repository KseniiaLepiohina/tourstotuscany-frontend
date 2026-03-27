import { Icon } from "@iconify/react";
import Arrows from "./arrows";
import { useGetAllToursQuery } from "../services/tourApi";
import { useRef } from "react";
import MainImg from '../components/Main_Img';


const TourPackages = () => {
  const scrollRef = useRef();
  const { data: tours,isLoading } = useGetAllToursQuery();
  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left:-300,
      behavior:"smooth"
    })
  };
   const scrollRight = () => {
    scrollRef.current.scrollBy({
      left:300,
      behavior:"smooth"
    })
  };

  return (
  <>
 <section className="carousel_wrapper">
  <section className="carousel_title">
        <h2>Explore Our Popular Destinations</h2>
        <Arrows className="stepbar" onPrev={scrollLeft} onNext={scrollRight}/>
      </section>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section className="carousel_container_body" ref={scrollRef}>
          <ul>
          {Array.isArray(tours) && tours.map((item) => (
            <li>
             <section className="tours" key={item.id}>
              
              <MainImg 
              style={{ width: '50%', objectFit: 'cover',height:'50%' }}
              id={item.id} />
              
              
              <h2>{item.title}</h2>

              <section className="dest_price">
                <h3>from</h3>
                <h2>
                  <strong>{item.price} €</strong>
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
                  <p>{item.duration}</p>
                </section>

                <section className="sub_details">
                  <Icon
                    icon="mdi:account-group"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                  <p>{item.group_size}</p>
                </section>
              </section>

              <p>{item.short_description}</p>
            </section> 
            </li>
          ))}
          </ul>
        </section>)}
    </section>
     </>
  );
}

export default TourPackages;

