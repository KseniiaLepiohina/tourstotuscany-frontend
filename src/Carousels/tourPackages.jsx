import { Icon } from "@iconify/react";
import Arrows from "./arrows";
import { useGetAllToursQuery } from "../services/tourApi";

const TourPackages = () => {
  const { data: tours,isLoading } = useGetAllToursQuery();

  return (
    <section className="carousel_wrapper">
      <section className="carousel_title">
        <h2>Explore Our Popular Destinations</h2>
        <Arrows />
      </section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section >
          {Array.isArray(tours) && tours.map((item) => (
            <section className="tours" key={item.id}>
              <img className="logo_tour" src={item.img} alt={item.title} />
              <h2>{item.title}</h2>

              <section className="dest_price">
                <h3>from</h3>
                <h2>
                  <strong>{item.adultPrice} €</strong>
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
                  <p>{item.visit}</p>
                </section>

                <section className="sub_details">
                  <Icon
                    icon="mdi:account-group"
                    color="#FA8B02"
                    height={24}
                    width={24}
                  />
                  <p>{item.people}</p>
                </section>
              </section>

              <p>{item.short_description}</p>
            </section>
          ))}
        </section>)}
    </section>
  );
}

export default TourPackages;