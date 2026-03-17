import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react/dist/iconify.js";
import clndr from '../assets/home/icons/Tours/clndr_orng.svg';
import ppl from '../assets/home/icons/Tours/group_col.svg';
import BookBike from '../components/bookBike';
import Reviews from "../Carousels/reviews";
import { useGetAllToursQuery } from "../services/tourApi";
import MainImg from '../components/Main_Img';


export default function Tours({ tour_id }) {

  const { data: tours, isLoading: isLoadingTours } = useGetAllToursQuery();

  if (isLoadingTours) return <p>Loading tours...</p>;
  if (!tours) return <p>No data available.</p>;


  return (
    <section>
      <h1>Tour Packages</h1>
      <section className="tours_main_container">

        {Array.isArray(tours) && tours.length > 0 ? (
          tours.map((tour) => (
            <section className="tour" key={tour.tour_id}>

            <MainImg id={tour.id} />
              <h2>
                <strong>{tour.title}</strong>
              </h2>

              <section className="dest_price">
                <h3>from</h3>
                <h2>{tour.price}€</h2>
              </section>

              <section className="details">
                <section className="sub_details">
                  <img className="icons" src={clndr} alt="Choose a date" loading="lazy" />
                  <p>{tour.duration}</p>
                </section>

                <section className="sub_details">
                  <img className="icon" src={ppl} alt="choose a number of people" loading="lazy" />
                  <p>{tour.group_size} PP.</p>
                </section>
              </section>

              <section className="description">
                <p>
                  {tour.short_description?.length > 5
                    ? tour.short_description.slice(0, 100) + "..."
                    : tour.short_description || ""}
                </p>
              </section>

              <NavLink to={`/tours/${tour.id}`}>
                <section className="link_service">
                  <span>Read More</span>
                  <Icon icon="bi:arrow-right" color="#FA8B02" />
                </section>
              </NavLink>
            </section>
          ))
        ) : (
          <p>No tours</p>
        )}
      </section>


      <section className="carousel_title">
        <h1>Services</h1>

      </section>
      <section className="services">

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/eka2fik3oosxlrk3xd632/bike.png?rlkey=xvnstcg3ni0gu8lfdmgp5gf8u&st=49pb2zob&raw=1" alt="Bike and rickshaw rental" />
          <h2>Bike and rickshaw rental</h2>
          <p>Book your quality vehicle quickly for an hour or all day!</p>
          <section className="link_service">
            <span>Read More</span> <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>

        </section>

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/2mgkvphat0sv6qwjfzmsf/guide.png?rlkey=yceia89c9y2o1537u0vyubqhu&st=3xj8o2ee&raw=1" alt="Guided tours of Lucca" />
          <h2>Guided tours of Lucca</h2>
          <p>Live the real Lucchese experience by visiting the suburbs by bike!</p>

          <section className="link_service">

            <span>Read More</span>
            <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>
        </section>

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/jq6902pfwvzlba66mbvy7/hills.png?rlkey=6shljm17zkpjsd0kz4c8hi6ru&st=e9679j6g&raw=1" alt="Trips In The Tuscan Hills" />
          <h2>Trips In The Tuscan Hills</h2>
          <p>Do you need not only a bike but also a driver? Then you have found the right place!</p>
          <section className="link_service">

            <span>Read More</span>
            <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>
        </section>

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/cbzb6qjp2v7euw853dsei/coach.png?rlkey=sfqon2fq0hfvzc5cjlwwpam8d&st=xoamnvym&raw=1" alt="Coach Trip Packages" />
          <h2>Coach Trip Packages</h2>
          <p> Book your quality vehicle quickly for an hour or all day!</p>
          <section className="link_service">

            <span>Read More</span>  <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>
        </section>

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/cu14xcx354ailfby6bk89/cars.png?rlkey=eqfqm1yoghxantihctf6sktg3&st=wn47sojm&raw=1" alt="Transportation With Luxury Cars" />
          <h2>Transportation With Luxury Cars</h2>
          <p> Live the real Lucchese experience by visiting the suburbs by bike!</p>
          <section className="link_service">

            <span>Read More</span>  <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>
        </section>

        <section className="service">
          <img src="https://www.dropbox.com/scl/fi/ensvucu3pob4l616xti69/wine.png?rlkey=9md2ygp82q7ks2dcf7vpgvsvy&st=yv1phdht&raw=1" alt="Wine Tours By Bus With Guide" />
          <h2>Wine Tours By Bus With Guide</h2>
          <p> Do you need not only a bike but also a driver? Then you have found the right place!</p>
          <section className="link_service">

            <span>Read More</span>  <Icon
              icon="bi:arrow-right"
              color="#FA8B02"
            />
          </section>
        </section>

      </section>

      <BookBike />
      <Reviews />
    </section>
  );
};
