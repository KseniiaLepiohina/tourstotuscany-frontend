import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import BackToLogin from "../../components/BackToLogin";

export default function ApprovedPassword() {


  return (
    <section className="modal-overlay">
      <section className="modal-content">
        <section className="modal-header">
          <section className="modal_icon" >
            <Icon
              icon="akar-icons:check"
              color="#FA8B02"
              width={24}
              height={24}
              aria-label="password succecfully reset"
            />
          </section>
        </section>

        <section className="modal-form">
          <h1>Password Reset</h1>
          <h4>Your password has been successfully reset. Click below to login in
            magically.
          </h4>
        </section> 

        <NavLink to="/tours">
            <button className="general_btn" type="submit">
              Continue
            </button>
        </NavLink> 
        <BackToLogin />
      </section>
    </section>
  );
}
