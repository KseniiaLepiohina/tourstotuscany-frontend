
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setFullName} from "../../slices/authSlice";
import { useSignUpMutation } from "../../services/authApi";
import { toast } from "react-toastify";

export default function CreateAccount({ isOpen, onClose }) {

  const {signUp,error} = useSignUpMutation();

  const dispatch = useDispatch();
  const { fullName, email, password } = useSelector(state => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ fullName, email, password }).unwrap();
      toast.success("Account created successfully!");
      onClose();
    } catch (err) {
      // Виводимо конкретне повідомлення в toast
      toast.error(err.data?.message || "Check the sign up form");
    }
  };
  return (
    <section className="modal-overlay ">
      <section className="modal-content auth">
        <header className="modal-header">
          <h2>Create Account</h2>
          <button onClick={onClose} className="modal-close-btn">
            <Icon icon="clarity:window-close-line" 
            width={24} 
            height={24}
            color="#333333"
            />
          </button>
        </header>

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
          <section style={{display:'flex'}}>
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
          <section>
            <input
            type="checkbox"
            />
            <label>
              I agree with <span color="#FA8B02">Terms</span> and <span color="#FA8B02">Privacy</span>
            </label>
          </section>
          
          <section className="submit" >
            <button type="submit" className="general_btn ">Sign Up</button>
            <span>or</span>
            <section>
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
            
          </section>
          
          {error && <p className="error">{error}</p>}
        </form>
      </section>
    </section>
  );
}
