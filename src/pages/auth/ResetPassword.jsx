import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import CheckEmail from "./CheckEmail";
import {Icon} from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import {setEmail} from "../../slices/authSlice";
import { toast } from "react-toastify";

export default function ResetPassword() {
const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
const {email,loading,error,success}=useSelector((state)=> state.auth);

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(email);
     if(error) {
    toast.error('Check email field'|| error)
  }else{
    toast.success(success);
  }
  }
 

  return (
    <section className="modal">
       {isOpen && (

      <section className="auth">
        <form
          onSubmit={handleSubmit}>
          <Icon
          aria-label="reset password"
          icon="bx:key"
          className="form_img"
           width={24}
           height={24}
          />
          <h1>Forgot Password</h1>
          <h4>No worries, we'll send you reset instructions.</h4>

          <label for="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e)=> dispatch(setEmail(e.target.value))}
            placeholder="Enter your email address"
            required
          />
          <Link to="/auth/checkemail" element={<CheckEmail />}>
            <button className="general_btn" type="submit">
            {loading ? "Sending..." : "Reset Password"}
            </button>
          </Link>
          <section>
            <Link to="/auth/login" element={<Login />}>
              <button 
                style={{backgroundColor:'transparent',border:'none',display:'flex',alignItems:'center',gap:'0.4em'}}>
                             <Icon
                              icon="bi:arrow-right"
                              height="20"
                              width="20"
                              />
                <span color="#333333">Back to Login
                </span>
              </button>
            </Link>
          </section>
        </form>
      </section>
       )} 
    </section>
  );
}
