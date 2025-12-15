import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Login from "./Login";
import ApprovedPassword from "./ApprovedPassword";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmPassword, setNewPassword, updateUserPassword } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";


export default function NewPassword() {

  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, newPassword, confirmPassword } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Password do not match");
      return
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    dispatch(newPassword);
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

          <label for="new_password">New Password</label>
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
            onClick={() => setShowPassword(!showPassword)}
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
          <label for="confirm_password">Confirm Password</label>

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
            onClick={() => setShowPassword(!showPassword)}
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

          <Link
            to="/auth/newPassword/approvedPassword"
            element={<ApprovedPassword />}
          >
            <button className="general_btn" type="submit">
              {loading ? "Updating..." : "Reset Password"}
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
