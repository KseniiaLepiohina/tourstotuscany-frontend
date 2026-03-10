import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import ApprovedPassword from "./ApprovedPassword";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmPassword, setNewPassword, updateUserPassword } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { useUpdatePasswordMutation } from "../../services/authApi";
import BackToLogin from "../../components/BackToLogin";


export default function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newPassword, confirmPassword } = useSelector((state) => state.auth);
  const { updatePassword, isLoading } = useUpdatePasswordMutation();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Валідація ПЕРЕД запитом
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      await updatePassword({ confirmPassword, newPassword }).unwrap();
      toast.success("Password successfully updated");
      navigate("/auth/newPassword/approvedPassword"); 
    } catch (err) {
      // Рендеримо текст помилки, а не об'єкт
      toast.error(err.data?.message || "Check the passwords");
    }
  };

  return (
    <section className="modal-overlay">
      <section className="modal-content">
        <section className="modal_icon" >
          <Icon
            aria-label="reset password"
            icon="bx:key"
            color="#FA8B02"
            className="enter new password"
            width={24}
            height={24}
          />

        </section>
        <h1>Set New Password</h1>
        <p>
          Your new password must be different from previously used passwords.
        </p>

        <form onSubmit={handleSubmit} method="post" action="/auth/newPassword">
          <label for="new_password">New Password</label>
          <section>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              name="new_password"
              aria-describedby="password"
              placeholder="*********"
              onChange={(e) => dispatch(setNewPassword(e.target.value))}
            />
            <span
              className="password-toggle"
              onClick={() => newPassword(!showPassword)}
            />
            {showPassword ?
             <Icon
              icon="ant-design:eye-invisible-filled"
              aria-hidden="true"
              role="img"
              width={24}
              height={24} /> :
              <Icon
                icon="ant-design:eye-filled"
                aria-hidden="true"
                role="img"
                width={24}
                height={24}
              />}

          </section>

          <label for="confirm_password">Confirm Password</label>

          <section>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              name="confirm_password"
              aria-describedby="password"
              placeholder="*********"
              value={confirmPassword}
            />
            <span
              className="password-toggle"
              onClick={() => newPassword(!showPassword)}
            />
            {showPassword ? <Icon
              icon="ant-design:eye-invisible-filled"
              aria-hidden="true"
              role="img"
              width={24}
              height={24} /> :
              <Icon
                icon="ant-design:eye-filled"
                aria-hidden="true"
                role="img"
                width={24}
                height={24}
              />}

          </section>

          <NavLink
            to="/auth/newPassword/approvedPassword"
            element={<ApprovedPassword />}
          >
            <button className="general_btn" type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Reset Password"}
            </button>
          </NavLink>
          
          <BackToLogin />
        </form>
      </section>
    </section>
  );
}

