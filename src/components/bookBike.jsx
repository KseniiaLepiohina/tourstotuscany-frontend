import bike from "../assets/home/book_bike.png";
import TimePicker from "../Picker/TimePicker";
import DropDownDatePicker from "../Picker/DropDownDatePicker";

export default function BookBike() {
  return (
    <section className=" booking">

      <section className="book_set">
        
        <form
          className="book_bike_form"
          method="post"><h1>
          <strong>Book Now Bike</strong>
        </h1>
          <section className="book_bike_grid">

            <section className="custom_container_service">
              <label htmlFor="phone"><h3>Telephone number</h3></label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </section>

            <section className="custom_container_service">
              <h3>Service Type</h3>
              <select>
                <options>
                  Select the service type
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
                </options>
              </select>
            </section>

            <section className="custom_container_service">
              <h3>Date</h3>
              <DropDownDatePicker />
            </section>

            <section className="custom_container_service">
              <h3>Time</h3>
              <TimePicker />
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
