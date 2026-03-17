import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import { Icon } from "@iconify/react";
import { logOut } from "../slices/authSlice"; // Видалив зайвий імпорт user
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Отримуємо користувача зі стору
  const user = useSelector((state) => state.auth.user);

  const overlayRoutes = ["/", "/aboutUs"];
  const isOverlay = overlayRoutes.includes(location.pathname);

  return (
    <header className={`header ${isOverlay ? "overlay" : ""}`}>
      <NavLink to="/">
        <img 
          loading="lazy"
          className="logo"
          src={logo} 
          alt="Tours to Tuscany" 
        />
      </NavLink>

      <section className="main_nav">
        <nav>
          <NavLink to="/"><li><strong>Home</strong></li></NavLink>
          <NavLink to="/aboutUs"><li><strong>About us</strong></li></NavLink>
          <NavLink to="/Tours"><li><strong>Tours</strong></li></NavLink>
          <NavLink to="/contact"><li><strong>Contact Us</strong></li></NavLink>
        </nav>

        <section className="header_options">
          <select className="lang_select">
            <option>ENG</option>
            <option>UKR</option>
          </select>

          {/* ЛОГІКА: Якщо користувача НЕМАЄ (!user) — показуємо вхід */}
          {!user ? (
            <>
              <NavLink to="/auth/login">
                <button className="login_btn">Login</button>
              </NavLink>
              <NavLink to="/auth/createAccount">
                <button className="general_btn">Sign Up</button>
              </NavLink>
            </>
          ) : (
            /* Якщо користувач Є — показуємо випадаюче меню */
            <AuthorizedHeader dispatch={dispatch} />
          )}
        </section>
      </section>
    </header>
  );
}

// Допоміжний компонент меню користувача
export const AuthorizedHeader = ({ dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section className="userHeader_gen">
      <button 
        onClick={() => setIsOpen((prev) => !prev)} 
        className="userHeader_dropdown"
      >
        <Icon 
          icon="lets-icons:user-cicrle-duotone" 
          color="#779CBF" 
          width={60} 
          height={60} 
        />
      </button>

      {isOpen && (
        <section className="openHeader">
          <Link to="/account/haveTickets" onClick={() => setIsOpen(false)}>
            <section className="header_tickets">
              <Icon icon="f7:tickets-fill" height="1.5em" width="1.5em" />
              <span>My Tickets</span>
            </section>
          </Link>

          <section
            onClick={() => {
              dispatch(logOut());
              setIsOpen(false);
            }}
            className="header_tickets logout_section"
          >
            <Icon icon="clarity:logout-line" height="1.5em" width="1.5em" />
            <span>Logout</span>
          </section>
        </section>
      )}
    </section>
  );
};