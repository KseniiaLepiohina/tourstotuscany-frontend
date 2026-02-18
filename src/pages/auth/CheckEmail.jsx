// import React,{useState} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Icon from '@iconify/iconify';
// import checkemail from "../../assets/home/icons/CheckIn/check_mail.svg";
// import arrow from "../../assets/home/icons/CheckIn/grey_arrow.svg";
// import close from "../../assets/home/icons/CheckIn/window-close.svg";

// import Login from "./Login";
// import { createPortal } from "react-dom";

// export default function CheckEmail({onClose}) {

//   const [isOpen, setIsOpen] = useState(true);
  

  
//   return createPortal(
//    <section className="modal-overlay" >
//       <section className="modal-content auth">
//         <form className="modal-form" >
//           <Icon
//           icon="fluent:mail-20-regular"
//           className="form_img"
//           color="#FA8B02"
//            width={24}
//            height={24}
//            aria-label="check your email"
//           />
//           <header className="modal-header" >
//             <h1>Check your email</h1>
//             {/* <button onClick={onClose} className="modal-close-btn ">
//               <img src={close} alt="close the window" />
//             </button> */}
//           </header>

//           <p>We sent a password reset link to @loremipsum@gmail.com</p>
//           <button className="btn_submit" type="submit">
            
//             Open email app
//           </button>
//           <p> Didn't receive the email? Click to resend</p>
//           <section>
//             <Link to="/auth/login" element={<Login />}>
//               <button
//                 style={{
//                   backgroundColor: "transparent",
//                   border: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "0.4em",
//                 }}
//               >
//                <Icon
//                icon="bi:arrow-right"
//                height="20"
//                width="20"
//                />
//                 <span color="#333333">Back to Login</span>
//               </button>
//             </Link>
//           </section>
//         </form>
//       </section> 
//        </section>,
//     document.body
//   );
// }
