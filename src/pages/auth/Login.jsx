import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setEmail,setPassword } from "../../slices/authSlice";
import { useSignInMutation } from "../../services/authApi";
export default function Login({ isOpen, onClose }) {
  const [signIn,{isLoading, error, isSuccess}] = useSignInMutation();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
const {email, password} = useSelector((state)=> state.auth);
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signIn({email,password}).unwrap();
toast.success("User logged in successfully");
    }catch(error) {
 if (!email || !password) {
      toast.error("Please, fill in all fields");
      return;
    }
    }
  };

  return (
    <section className="modal-overlay">
      <section className="modal-content auth">
        <header className="modal-header">
          <h1>Login</h1>
          <button aria-label="Close modal" onClick={onClose} className="modal-close-btn">
            <Icon icon="clarity:window-close-line" width={24} height={24} role="img" />
          </button>
        </header>

        <form  className="modal-form">
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

            <Link to="/auth/resetpassword">
              <h5 style={{ padding: '0.4em 0 0 8em' }}>Forgot your password?</h5>
            </Link>
          </section>

          <section style={{ display: 'flex', flexDirection: 'column' }}>
            <button className="general_btn" type="submit">Sign In</button>
            <p>or</p>
            <Link to="/auth/google">
              <button className="btn_ggl_submit" type="button">
                <Icon
                  icon="devicon:google"
                  height={24}
                  width={24}
                />
                <span>Sign In with Google</span>
              </button>
            </Link>
          </section>

          <section className="additionals">
            <p>Already have an account?</p>
            <Link to='/auth/createAccount'>
              <span>Sign Up</span>
            </Link>
          </section>
        </form>
      </section>
    </section>
  );
}
