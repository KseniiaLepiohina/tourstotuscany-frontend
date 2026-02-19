<<<<<<< HEAD
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import Login from "./Login";
// import ApprovedPassword from "./ApprovedPassword";
// import { useDispatch, useSelector } from "react-redux";
// import { setConfirmPassword, setNewPassword, updateUserPassword } from "../../slices/authSlice";
// import { toast } from "react-toastify";
// import { useUpdatePasswordMutation} from "../../services/authApi";
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Login from "./Login";
import ApprovedPassword from "./ApprovedPassword";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmPassword, setNewPassword, updateUserPassword } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import { useUpdatePasswordMutatiton } from "../../services/authApi";
>>>>>>> backend-connect


// // export default function NewPassword() {

// //   const [showPassword, setShowPassword] = useState(false);

<<<<<<< HEAD
// //   const { loading, newPassword, confirmPassword } = useSelector((state) => state.auth);
=======
  const { loading, newPassword, confirmPassword } = useSelector((state) => state.auth);
>>>>>>> backend-connect

// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

<<<<<<< HEAD
// //   const [updatePassword, { isLoading, error, isSuccess }] = useUpdatePasswordMutation();
  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// // await updatePassword({confirmPassword,newPassword}).unwrap();
// // toast.success("Password succesfully updated");
// //     } catch (error) {
// // toast.error("Check the passwords")
// //     }
// //     if (newPassword !== confirmPassword) {
// //       toast.error("Password do not match");
// //       return
// //     }
// //     if (newPassword.length < 6) {
// //       toast.error("Password must be at least 6 characters");
// //       return;
// //     }
    
// //   }

// //   return (
// //     <section className="modal">
// //       <section className="auth">
// //         <form onSubmit={handleSubmit} method="post" action="/auth/newPassword">
// //           <Icon
// //             aria-label="reset password"
// //             icon="bx:key"
// //             color="#FA8B02"
// //             className="enter new password"
// //             width={24}
// //             height={24}
// //           />
// //           <h1>Set New Password</h1>
// //           <p>
// //             Your new password must be different from previously used passwords.
// //           </p>
=======
  const [updatePassword, { isLoading, error, isSuccess }] = useUpdatePasswordMutatiton();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
await updatePassword({confirmPassword,newPassword}).unwrap();
toast.success("Password succesfully updated");
    } catch (error) {
toast.error("Check the passwords")
    }
    if (newPassword !== confirmPassword) {
      toast.error("Password do not match");
      return
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    
  }

  return (
    <section className="modal">
      <section className="auth">
        <form onSubmit={handleSubmit} method="post" action="/auth/newPassword">
          <Icon
            aria-label="reset password"
            icon="bx:key"
            color="#FA8B02"
            className="enter new password"
            width={24}
            height={24}
          />
          <h1>Set New Password</h1>
          <p>
            Your new password must be different from previously used passwords.
          </p>
>>>>>>> backend-connect

// //           <label for="new_password">New Password</label>
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             value={newPassword}
// //             name="new_password"
// //             aria-describedby="password"
// //             placeholder="*********"
// //             onChange={(e) => dispatch(setNewPassword(e.target.value))}
// //           />
// //           <span
// //             className="password-toggle"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //           {showPassword ? <Icon
// //             icon="ant-design:eye-invisible-filled"
// //             aria-hidden="true"
// //             role="img"
// //             width={24}
// //             height={24} /> :
// //             <Icon
// //               icon="ant-design:eye-filled"
// //               aria-hidden="true"
// //               role="img"
// //               width={24}
// //               height={24}
// //             />}
// //           <label for="confirm_password">Confirm Password</label>

// //           <input
// //             type={showPassword ? "text" : "password"}
// //             onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
// //             name="confirm_password"
// //             aria-describedby="password"
// //             placeholder="*********"
// //             value={confirmPassword}
// //           />
// //           <span
// //             className="password-toggle"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //           {showPassword ? <Icon
// //             icon="ant-design:eye-invisible-filled"
// //             aria-hidden="true"
// //             role="img"
// //             width={24}
// //             height={24} /> :
// //             <Icon
// //               icon="ant-design:eye-filled"
// //               aria-hidden="true"
// //               role="img"
// //               width={24}
// //               height={24}
// //             />}

// //           <Link
// //             to="/auth/newPassword/approvedPassword"
// //             element={<ApprovedPassword />}
// //           >
// //             <button className="general_btn" type="submit">
// //               {loading ? "Updating..." : "Reset Password"}
// //             </button>
// //           </Link>


<<<<<<< HEAD
// //           <section>
// //             <Link to="/auth/login" element={<Login />}>
// //               <button
// //                 style={{
// //                   backgroundColor: "transparent",
// //                   border: "none",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   gap: "0.4em",
// //                 }}
// //               >
// //                 <Icon
// //                   icon="bi:arrow-right"
// //                   height="20"
// //                   width="20"
// //                 />
// //                 <span color="#333333">Back to Login</span>
// //               </button>
// //             </Link>
// //           </section>
// //         </form>
// //       </section>
// //     </section>
// //   );
// // }
// export default function NewPassword() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { newPassword, confirmPassword } = useSelector((state) => state.auth);
//   const {updatePassword,isLoading} = useUpdatePasswordMutation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 1. Валідація ПЕРЕД запитом
//     if (newPassword !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     if (newPassword.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       await updatePassword({ confirmPassword, newPassword }).unwrap();
//       toast.success("Password successfully updated");
//       navigate("/auth/newPassword/approvedPassword"); // Перехід після успіху
//     } catch (err) {
//       // Рендеримо текст помилки, а не об'єкт
//       toast.error(err.data?.message || "Check the passwords");
//     }
//   };

//   return (
//     <section className="modal">
//       <section className="auth">
//         <form onSubmit={handleSubmit}>
//           {/* ... інпути ... */}
          
//           {/* ВИПРАВЛЕНО: Кнопка без <Link> */}
//           <button className="general_btn" type="submit" disabled={isLoading}>
//             {isLoading ? "Updating..." : "Reset Password"}
//           </button>
          
//           {/* ... посилання назад ... */}
//         </form>
//       </section>
//     </section>
//   );
// }
=======
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
>>>>>>> backend-connect
