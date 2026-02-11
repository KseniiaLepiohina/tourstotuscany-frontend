import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Login from "./Login";
import CheckEmail from "./CheckEmail";
import {Icon} from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import {setEmail} from "../../slices/authSlice";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "../../services/authApi";

export default function ResetPassword() {
  const navigate = useNavigate(); // Додайте це
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email }).unwrap();
      toast.success("Instructions sent to your email!");
      navigate("/auth/checkemail"); // Перехід ТІЛЬКИ після успіху
    } catch (err) {
      toast.error(err.data?.message || "Check email field");
    }
  };

  return (
    <section className="modal">
      <section className="auth">
        <form onSubmit={handleSubmit}>
          {/* ... заголовок та іконка ... */}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="Enter your email address"
            required
          />
          
          {/* ВИПРАВЛЕНО: Прибрали <Link>, залишили тільки кнопку */}
          <button className="general_btn" type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Reset Password"}
          </button>

          <section>
            <Link to="/auth/login">
              <button type="button" style={{ background: 'transparent', border: 'none' }}>
                <Icon icon="bi:arrow-left" width="20" /> {/* Змінив на arrow-left для логіки */}
                <span>Back to Login</span>
              </button>
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
}
