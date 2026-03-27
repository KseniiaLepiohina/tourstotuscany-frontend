import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setFullName} from "../../slices/authSlice";
import { useSignUpMutation } from "../../services/authApi";
import { toast } from "react-toastify";

export default function CreateAccount() {

const [signUp] = useSignUpMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fullName, email, password } = useSelector(state => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ fullName, email, password }).unwrap();
      toast.success("Account created successfully!");
      navigate('/');
    } catch (error) {
      toast.error(error.data?.message || "Check the sign up form");
    }
  };

  return (
    <section className="modal-overlay ">
      <section className="modal-content">
        <section className="modal-header">
          <h2>Create Account</h2>
        </section>

        <form onSubmit={handleSubmit}  className="modal-form">
          <label>Name and Surname</label>
          <input
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
            placeholder="Full Name"
          />

          <label>Email</label>
          <input
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            type="email"
            placeholder="tourstotuscany@gmail.com"
            autoComplete="username"
            required autoFocus
          />

          <label>Password</label>
          <section className="header_options">
            <input
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icon icon="ant-design:eye-invisible-filled" width={24} height={24} />
            ) : (
              <Icon icon="ant-design:eye-filled" width={24} height={24} />
            )}
          </span>

          </section>
          <section className="panel_search_container">
            <input type="checkbox" required/>
             I agree with <p color="#FA8B02">Terms</p> and <p color="#FA8B02">Privacy</p> 
          </section>
            <button type="submit" className="general_btn ">Sign Up</button>
{/* {error && <p className="error">Error {error.status}: {JSON.stringify(error.data)}</p>}           */}
<section>
             <span>or</span>
              <button
             className="btn_ggl_submit"
              type="submit">
              <Icon
              icon="devicon:google"
                height={24}
                width={24}
              />
              <h4>Sign Up with Google</h4>
            </button>
          </section>
        </form>
       
      </section>
    </section>
  );
}
