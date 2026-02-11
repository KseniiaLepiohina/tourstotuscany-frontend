import { Link } from "react-router-dom";
import Login from "./Login";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ApprovedPassword() {


  return (
    <section  className="modal-overlay">
      <section  className="modal-content auth">
        <form className="modal-form">
        <Icon
        icon="akar-icons:check"
        color="#FA8B02"
        width={24}
        height={24}
        aria-label="password succecfully reset"
        />
          <h1>Password Reset</h1>
          <h4>
          
            Your password has been successfully reset. Click below to login in
            magically.
          </h4>
          <Link to="/tours">
            <button className="general_btn" type="submit">
              Continue
            </button>
          </Link>
          <section>
            <Link to="/auth/login" element={<Login />}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4em",
                }}
              >
              <Icon
               icon="bi:arrow-right"
               height="20"
               width="20"
               />
                <span color="#333333">Back to Login</span>
              </button>
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
}
