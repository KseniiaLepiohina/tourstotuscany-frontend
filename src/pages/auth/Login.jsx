import  { useState } from "react";
import {  NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setEmail,setPassword } from "../../slices/authSlice";
import { useSignInMutation } from "../../services/authApi";


export default function Login({onClose}) {
const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [signIn] = useSignInMutation();

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
 
const {email, password} = useSelector((state)=> state.auth);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please, fill in all fields");
      return;
    }
    try {
      await signIn({ email, password }).unwrap();
      toast.success("User logged in successfully");
      onClose();
    } catch (err) {
      toast.error(err.data?.message || "Invalid credentials");
    }
  };

  return (
    <section className="modal-overlay">
      <section className="modal-content">
        <header className="modal-header">
          <h1>Login</h1>
          <button aria-label="Close modal" onClick={onClose} className="modal-close-btn">
            <Icon icon="clarity:window-close-line" width={24} height={24} role="img" />
          </button>
        </header>

        <form onSubmit={handleSubmit}  className="form">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="tourstotuscany@gmail.com"
            autoComplete="username"
            required
            autoFocus
          />

          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.6em' }}>
            <label>Password</label>
            <section style={{ display: 'flex' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                placeholder="Password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                <Icon icon={showPassword ? "ant-design:eye-invisible-filled" : "ant-design:eye-filled"} width={24} height={24} />
              </span>
            </section>

            <NavLink to="/auth/resetpassword">
              <h5 style={{ padding: '0.4em 0 0 8em' }}>Forgot your password?</h5>
            </NavLink>
          </section>

          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="general_btn" type="submit">Sign In</button>
            <p>or</p>
            <NavLink to="/auth/google">
              <button className="btn_ggl_submit" type="button">
                <Icon
                  icon="devicon:google"
                  height={24}
                  width={24}
                />
                <span>Sign In with Google</span>
              </button>
            </NavLink>
          </section>

          <section className="additionals">
            <p>Already have an account?</p>
            <NavLink to='/auth/createAccount'>
              <span>Sign Up</span>
            </NavLink>
          </section>
        </form>
      </section>
    </section>
  );
}
