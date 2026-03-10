import { useState } from "react";
import {  NavLink} from "react-router-dom";
import logo from "../assets/home/logo.svg";
import Login from "../pages/auth/Login";

export default function Header() {
const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
const [isLoginOpen, setIsLoginOpen] = useState(false);

  //  const overlayRoutes = ["/", "/aboutUs"];
  // const isOverlay = overlayRoutes.includes(location.pathname);

  return (
    // <header className={`header ${isOverlay ? "overlay" : ""}`}>
    <header>
      <NavLink to="/">
        <img loading="lazy"
        className="logo" 
        src={logo} alt="Tours to Tuscany" />
      </NavLink>
        <section className="main_nav">
           <nav>
            <NavLink to="/"><li><strong>Home</strong></li></NavLink>
            <NavLink to="/aboutUs"><li><strong>About us</strong></li></NavLink> 
            <NavLink to="/Tours"><li><strong>Tours</strong></li></NavLink >
            <NavLink to="/contact"><li><strong>Contact Us</strong></li></NavLink>
          </nav>

        <section className="header_options">
          <select>
            <option>ENG</option>
            <option>UKR</option>
          </select>
    <NavLink to="/auth/login">
      <button
      onClick={() => setIsLoginOpen(true)}
          style={{
            background:"none",
            border:"none",
            cursor:'pointer'
          }}> Login 
      </button>
    </NavLink>
          <NavLink to="/auth/createAccount">
          <button 
          onClick={() => setIsCreateOpen(true)}
          className="general_btn" >
            Sign Up
          </button>
          </NavLink>

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
        {/* <CreateAccount isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> */}
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
