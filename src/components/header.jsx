import {useState } from "react";
import {NavLink, useLocation } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import {useDispatch} from "react-redux";
import CreateAccount from "../pages/auth/CreateAccount"; 
import Login from "../pages/auth/Login";

export default function Header() {

  const dispatch = useDispatch();
  const location = useLocation();
const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
const [isLoginOpen, setIsLoginOpen] = useState(false);

  const overlayRoutes = ["/", "/aboutUs"];
  const isOverlay = overlayRoutes.includes(location.pathname);



  return (
    <header className={`header ${isOverlay ? "overlay" : ""}`}>
      <NavLink to="/">
        <img loading="lazy"
        className="logo" 
        src={logo} alt="Tours to Tuscany" />
      </NavLink>
        <section className="main_nav">
           <nav>
            <li><a href="/"><strong>Home</strong></a></li>
            <li><a href="/aboutUs"><strong>About us</strong></a> </li>
            <li><a href="/Tours"><strong>Tours</strong></a></li>
            <li><a href="/contact"><strong>Contact Us</strong></a></li>
          </nav>

        <section className="header_options">
          <select>
            <option>ENG</option>
            <option>UKR</option>
          </select>

          <button
          style={{
            background:"none",
            border:"none",
            cursor:'pointer'
          }}
          onClick={() => setIsLoginOpen(true)}>Login</button>
          <button className="general_btn" onClick={() => setIsCreateOpen(true)}>
            Sign Up
          </button>

            {/* {currentUser ? ( 
            <AuthorizedHeader dispatch={dispatch} />
          ) : (
            <>
                <button onClick={() => setIsLoginOpen(true)}>Login</button>
              <button 
                className="general_btn" 
                onClick={() => setIsCreateOpen(true)}
              >
                Sign Up
              </button>
            </>
          )}  */}
        </section>  

        </section>
         
      {/* <section className="nav_gen">
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">About us</Link></li>
          <li><Link to="/Tours">Tours</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </nav>

        <section className="header_options">
          <select>
            <option>ENG</option>
            <option>UKR</option>
          </select>
            {currentUser ? ( 
            <AuthorizedHeader dispatch={dispatch} />
          ) : (
            <>
                <button onClick={() => setIsLoginOpen(true)}>Login</button>
              <button 
                className="general_btn" 
                onClick={() => setIsCreateOpen(true)}
              >
                Sign Up
              </button>
            </>
          )} 
        </section>
      </section> */}
        <CreateAccount isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}

// export const  AuthorizedHeader = ({ dispatch })=> {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <section className="userHeader_gen">
//       <button onClick={() => setIsOpen((prev) => !prev)} className="userHeader_dropdown">
//         <Icon icon="lets-icons:user-cicrle-duotone" color="#779CBF" width={60} height={60} />
//       </button>

//       {isOpen && (
//         <section className="openHeader">
//           <Link to="/account/haveTickets">
//             <section className="header_tickets">
//               <Icon icon="f7:tickets-fill" height="1.5em" width="1.5em" />
//               <span>My Tickets</span>
//             </section>
//           </Link>

//           <section
//             onClick={() => {
//               dispatch(logoutUser());
//               setIsOpen(false);
//             }}
//             className="header_tickets"
//           >
//             <Icon icon="clarity:logout-line" height="1.5em" width="1.5em" />
//             <span>Logout</span>
//           </section>
//         </section>
//       )}
//     </section>
//   );
// }
