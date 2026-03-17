import { useNavigate } from "react-router-dom";
import {Icon} from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import {setEmail} from "../../slices/authSlice";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "../../services/authApi";
import BackToLogin from "../../components/BackToLogin";

export default function ResetPassword() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email }).unwrap();
      toast.success("Instructions sent to your email!");
      navigate("/auth/checkemail"); 
    } catch (err) {
      toast.error(err.data?.message || "Check email field");
    }
  };

  return (
    <section className="modal-overlay">
      <section className="modal-content">
        <section className="modal-header">
          <section className="modal_icon">
            <Icon  className="form_img" icon="bx:key" width={24} height={24} color="#FA8B02"  aria-label="reset password"/>
          </section>
        </section>
       <h1>Forgot Password</h1>
       <p>No worries, we'll send you reset instructions.</p>
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="Enter your email address"
            required
          />
          
          <button className="general_btn" type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Reset Password"}
          </button>

         <BackToLogin/>
        </form>
      
      </section>
    </section>
  );
}
