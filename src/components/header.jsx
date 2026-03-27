import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import { Icon } from "@iconify/react";
import { logOut } from "../slices/authSlice"; 
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user);
  const [openMenu,setIsOpenMenu] = useState(false);

  const overlayRoutes = ["/", "/aboutUs"];
  const isOverlay = overlayRoutes.includes(location.pathname);
  const mediaQueryMenu = () => {
    setIsOpenMenu(prev => !prev);
  }

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

      {/* <section className="main_nav">
      <section onClick={mediaQueryMenu} className={`burger_menu ${openMenu ? 'open' : ''}`}>
  <span></span>
  <span></span>
  <span></span>
      <section className={`nav_wrapper ${openMenu ? 'active' : ''}`}>

      
        <nav className={openMenu ? "nav_active" : "nav_hidden"}>
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
            <AuthorizedHeader dispatch={dispatch} />
          )}
        </section>
      </section> 
      </section>
      </section> */}
      <section className="main_nav">
  <section onClick={mediaQueryMenu} className={`burger_menu ${openMenu ? 'open' : ''}`}>
    <span></span>
    <span></span>
    <span></span>
  </section>

  <section className={`nav_wrapper ${openMenu ? 'active' : ''}`}>
    <nav>
      <NavLink to="/" onClick={() => setIsOpenMenu(false)}><li><strong>Home</strong></li></NavLink>
      <NavLink to="/aboutUs" onClick={() => setIsOpenMenu(false)}><li><strong>About us</strong></li></NavLink>
      <NavLink to="/Tours" onClick={() => setIsOpenMenu(false)}><li><strong>Tours</strong></li></NavLink>
      <NavLink to="/contact" onClick={() => setIsOpenMenu(false)}><li><strong>Contact Us</strong></li></NavLink>
    </nav>

    <section className="header_options">
      <select className="lang_select">
        <option>ENG</option>
        <option>UKR</option>
      </select>

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
        <AuthorizedHeader dispatch={dispatch} />
      )}
    </section>
  </section>
</section>
    </header>
  );
}

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