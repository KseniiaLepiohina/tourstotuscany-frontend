import { Icon } from '@iconify/react';
import BackToLogin from '../../components/BackToLogin';
import { useSelector } from "react-redux";

export default function CheckEmail() {
  const email = useSelector((state) => state.auth.email);
  return (
    <section className="modal-overlay" >
      <section className="modal-content ">
        <section className="modal_icon">
          <Icon
            icon="fluent:mail-20-regular"
            className="form_img"
            color="#FA8B02"
            width={24}
            height={24}
            aria-label="check your email"
          />
        </section>
        <h1>Check your email</h1>
        <p>We sent a password reset link to {email}</p>
        <button className="general_btn" type="submit">
          Open email app
        </button>
        <p> Didn't receive the email? Click to resend</p>
        <BackToLogin />
      </section>
    </section>
  );
}
