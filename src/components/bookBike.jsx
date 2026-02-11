import React from "react";
import bike from "../assets/home/book_bike.png";
import date from "../assets/home/icons/Tours/date.svg";

import TimePicker from "../Picker/TimePicker";

export default function BookBike() {
  return (
    <section className="booking">
      <section>
        <h1>
          <strong>Book Now Bike</strong>
        </h1>
          <form 
          className="book_bike_form"
          method="post">
            <section className="book_bike_grid">
              <section className="book_set">
                <h3>
                  <label htmlFor="phone">Telephone number</label>
                </h3>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </section>

              <section className="book_set">
                <h3>
                  <span />
                  Service Type
                </h3>
                <section className="custom_container_service">
                  <select>
                    <option>
                      Select the service type
                    </option>
                    <option>
                      Bike / rickshaw
                    </option>
                    <option>
                      Bike Tours
                    </option>
                    <option>
                      Bus Trips
                    </option>
                    <option>
                      Transfer
                    </option>
                  </select>
                </section>
              </section>

              <section className="book_set">
                <h3>
                  <span>Date</span>
                </h3>
                <section className="custom_container_service">
                  <select>
                 {/* <img src={date} alt="select the date" />*/}
                <option > 
                      Select date
                    </option>

                    {/* <DatePicker /> */}
                  </select>
                </section>
              </section>
              <section className="book_set">
                <h3>
                  <span>Time</span>
                </h3>
                <section className="custom_container_service">
                  {/* <TimePicker /> */}
                </section>
              </section>
            </section>
            <button className="general_btn" type="submit"> Book Now</button>
          </form>
        </section>
      <img 
      loading="lazy"
      src={bike} alt="book bike now" />
    </section>
  );
}
