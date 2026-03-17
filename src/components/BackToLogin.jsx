import { NavLink } from "react-router-dom";
import {Icon} from '@iconify/react';


const BackToLogin = () => {
  return(
    <section>
            <NavLink to="/auth/login">
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
               icon="bi:arrow-left"
               height="20"
               width="20"
               color="#333333"
               />
                <span color="#333333">Back to Login</span>
              </button>
            </NavLink>
          </section>
  )
}
export default BackToLogin;