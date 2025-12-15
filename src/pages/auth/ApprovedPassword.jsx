import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../assets/home/icons/CheckIn/grey_arrow.svg";
// import NoTickets from '../account/NoTickets';
import check from "../../assets/home/icons/CheckIn/check_mail.svg";
import Login from "./Login";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createPortal } from "react-dom";

export default function ApprovedPassword() {
  // const {user} = useContext(AuthContext);
  // const navigate = useNavigate()

  // if(user) {
  // navigate('/account/haveTickets')
  // } else{
  //     navigate('/account/noTickets')
  // }

  // useEffect(() => {
  //     const checkTickets = async () => {
  //       try {
  //         const response = await fetch(
  //           "http://localhost:4000/auth/newPassword/approvedPassword",
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );

  //         if (response.ok) {
  //           const res = await response.json();
  //           // Navigate based on ticket status
  //           if (user || res.hasTickets) {
  //             navigate("/account/haveTickets");
  //           } else {
  //             navigate("/account/noTickets");
  //           }
  //         } else {
  //           // Fallback if response is not OK
  //           navigate("/account/noTickets");
  //         }
  //       } catch (err) {
  //         console.error("Error fetching ticket status:", err);
  //         navigate("/account/noTickets");
  //       }
  //     };
  //     checkTickets();
  //   }, [user, navigate]);

  return createPortal (
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
    </section>,
    document.body
  );
}
