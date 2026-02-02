import { useDispatch, useSelector } from "react-redux";
import visa from "../../assets/home/icons/Tours/visa.svg";
import discover from "../../assets/home/icons/Tours/discover.svg";
import maestro from "../../assets/home/icons/Tours/maestro.svg";
import mastercard from "../../assets/home/icons/Tours/mastercard.svg";
// import paypal from "../../assets/home/icons/Tours/paypal.svg";
import ProgressBar from "../../components/ProgressBar";
import TicketOverview from "../../components/TicketOverview";
import getTypeCard from "../../utils/CardType";
import {setPaymentMethod, setPaymentType, setValidation} from "../../slices/paymentSlice";
import { Icon } from "@iconify/react";

export default function Payment({ ticket }) {
  const dispatch = useDispatch();

const { method, cardValue } =
  useSelector(state => state.payment);


  const handleInputChange = (e) => {
    const value = e.target.value.replace(/(\d{4})(?=\d)/g, "$1 ");
    const typeCard = getTypeCard(value);
    if (typeCard) {
      let img = null;
      if (typeCard === "visa") img = visa;
      if (typeCard === "mastercard") img = mastercard;
      if (typeCard === "discover") img = discover;
      if (typeCard === "maestro") img = maestro;
      dispatch(setPaymentMethod({ type: typeCard, img }));
      dispatch(setPaymentType(typeCard));
      dispatch(setValidation(true));
    } else {
      dispatch(setPaymentMethod({type:"", img:null}));
      dispatch(setPaymentType(null));
      dispatch(setValidation(false));
      return;
    }
  };

  const handleConfirm = async()=> {
  dispatch(setPaymentMethod("card"));
  dispatch(setPaymentType());

  }

  return (
    <>
      <ProgressBar currentStep={3} />
      <section className="booking_container">
        <section>
          <h2>Select a payment method</h2>
          <section>
            {/* PayPal */}
            <section className="payment">
              <input
                type="radio"
                name="payment"
                checked={method === "PayPal"}
                 onChange={() => {
    dispatch(setPaymentMethod("paypal"));
    dispatch(setValidation(true));
  }}
              />
              <h3>PayPal</h3>
              <p>
                You will be redirected to the PayPal website after submitting
                your order
              </p>
              <span>
                <Icon icon="logos:paypal" alt="pay by paypal" />
              </span>
            </section>

            <section className="payment_general">
              <section className="payment">
                <input

                  type="radio"
                  name="payment"
                  checked={method === "Card"}
                  onChange={() => {
                    dispatch(setPaymentMethod("card"));
                    dispatch(setValidation(false));
                  }}
                />
                <h3>Pay with Credit Card</h3>
                <section className="payment">
                  <Icon icon="logos:visa" />
                  <Icon icon="logos:discover" />
                  <Icon icon="logos:maestro" />
                  <Icon icon="logos:mastercard" />
                </section>
              </section>

              {method === "Card" && (
                <section className="payment_card">
                  <fieldset>
                    <legend>Card number</legend>
                    <input
                    type="text"
                      value={cardValue}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Expiration Date</legend>
                    <input placeholder="MM/YY" />
                  </fieldset>
                  <fieldset>
                    <legend>Card Security Code</legend>
                    <input type="password" />
                  </fieldset>
                  <p style={{ color: "#FA8B02" }}>What is this?</p>
                </section>
              )}
            </section>
          </section>
        </section>
        <TicketOverview
        onConfirm = {handleConfirm}
        />
      </section>
    </>
  );
}
