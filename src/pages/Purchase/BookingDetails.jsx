import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTourById } from "../../slices/tourByIdSlice";
import ProgressBar from '../../components/ProgressBar';
import TicketOverview from '../../components/TicketOverview';
import { Icon } from "@iconify/react";
import { selectedTime, selectedDate } from "../../slices/dateSlice";
import {
    increaseAdultValue,
    decreaseAdultValue,
    increaseChildValue,
    decreaseChildValue,
    increaseInfantValue,
    decreaseInfantValue,
  } from '../../slices/tourByIdSlice';

export default function BookingDetails() {

  const {id} = useParams();
  
  const {data :tour, isLoading,isError, error} = useGetTourByIdQuery(id);
  
  const adultValue = useSelector((state)=> state.tour.adultValue);
  const childValue = useSelector((state)=> state.tour.childValue);
  const infantValue = useSelector((state)=> state.tour.infantValue);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!tour) return <p>Tour not found</p>;

  return (
    <>
      <ProgressBar />

      <section>
      
          <section className="booking_container">
            <section>
              <section className="selectedData">

                  <section className="booking_data">
                    <h2>When you will visit?</h2>
                    <section style={{ display: "flex", alignItems: "center" }}>
                      <Icon icon="system-uicons:calendar-month" width={24} height={24} />
                      <select>
                        <option>{selectedDate || "Choose a date"}</option>
                      </select>
                    </section>
                  </section>
                  <section className="booking_data">
                    <h2>Which time?</h2>
                    <section style={{ display: "flex", alignItems: "center" }}>
                      <Icon icon="system-uicons:clock" height={24} width={24} />
                      <select>
                        <option>{selectedTime || "Choose a time"}</option>
                      </select>
                    </section>
                  </section>
              </section>

              <section className="ticketReq">
                 <h2>Select Your Tickets</h2>
                <ul> 
                  <li>Free for kids under 6 and disabled visitors (74%+)</li>
                  <li>
                    Pregnant women, families with strollers, and visitors on crutches
                    can buy priority tickets at the venue
                  </li>
                </ul>
              </section>
              <section
               
                className="tickets_body">
                {/* Adult */}
                <TicketCounter
                  personData="Adult (18+)"
                 info1={null}
                 info2={false}
                  price={tour.price}
                  value={adultValue}
                  increase={() => dispatch(increaseAdultValue(1))}
                  decrease={() => dispatch(decreaseAdultValue(1))}
                  setValue={(val) => dispatch(adultValue(val))}
                />
                {/* Child */}
                <TicketCounter
                  personData="Child (6-17)"
                  info1="With valid ID."
                  info2="Only in combination with: Adult (18+)"
                  price={tour.child_price}
                  value={childValue}
                  increase={() => dispatch(increaseChildValue(1))}
                  decrease={() => dispatch(decreaseChildValue(1))}
                  setValue={(val) => dispatch(childValue(val))}
                  
                />
                {/* Infant */}
                <TicketCounter
                  personData="Infant (0-5)" 
                  info1="Only in combination with: Adult (18+)"
                  
                  price={tour.infant_price && 'FREE'}
                  value={infantValue}
                  increase={() => dispatch(increaseInfantValue(1))}
                  decrease={() => dispatch(decreaseInfantValue(1))}
                  setValue={(val) => dispatch(infantValue(val))}
                />
              </section>
            </section>
            <TicketOverview nextLink="/User" />
          </section>
        </section>
    </>

  )
}

const TicketCounter = ({ personData,info1,info2, price, value, increase, decrease, setValue}) => (
  <section className="tickets_order">
    <section className="ticket_req">
      <h2>{personData}</h2>
      <p className="info">{info1 || null}</p>
      <p className="info">{info2 || null}</p>
      <h3 style={{color:"#FA8B02"}}>€{price}</h3>
    </section>
    <section className="counter">
      <button onClick={decrease} disabled={value <= 0}>
        <Icon icon="akar-icons:minus" color="#3333333"/>
      </button>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => {
          const val = Math.max(0, Number(e.target.value));
          setValue(val);
        }}
      />
      <button onClick={increase}>
        <Icon  icon="akar-icons:plus" color="#3333333"/>
        </button>
    </section>
  </section>
) 
