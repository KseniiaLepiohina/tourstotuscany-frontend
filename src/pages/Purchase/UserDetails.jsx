
import ProgressBar from "../../components/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import TicketOverview from "../../components/TicketOverview";
import { setFirstName,setLastName,setFullName,setPhone,setEmail } from "../../slices/authSlice";
import { Link } from "react-router-dom";
export default function UserDetails () {

const dispatch = useDispatch();
    
const firstName = useSelector((state)=> state.auth.firstName);
const lastName = useSelector((state)=> state.auth.lastName);
const phone = useSelector((state)=> state.auth.phoneNumber);
const email = useSelector((state)=> state.auth.email);
    return( 
        <> 
    <ProgressBar />
    <section className="booking_container">
    
            <section className="user_details">        
            <h2>Who shall we send these tickets to?</h2>
            <form >
                <section className="user-container">
                   <section className="user_details">
                     <label htmlFor="username">Name</label>
                        <input 
                        name='username'
                        value={firstName}
                       onChange={(e) => {
  dispatch(setFirstName(e.target.value));
  dispatch(setFullName(`${e.target.value} ${lastName}`));
}}
                        placeholder="Enter your name"/>
                   </section>
                    <section className="user_details">
                        <label htmlFor="surname">Surname</label>
                        <input
                         name="surname"
                         value={lastName}
                       onChange={(e) => {
  dispatch(setLastName(e.target.value));
  dispatch(setFullName(`${firstName} ${e.target.value}`));
}}
                         placeholder="Enter your surname"/>
                    </section>
                        
                    <section className="user_details">
                        <label htmlFor="phone">Telephone Number</label>
                        <input name='phone' 
                        type="tel"
                        value={phone}
                        onChange={(e)=> dispatch(setPhone(e.target.value))}
                        placeholder="Enter your telephone number "/>
                    </section>
                       
                    <section className="user_details">
                        <label htmlFor='email'>Email Adress</label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e)=>dispatch(setEmail(e.target.value))}
                        name='email' placeholder="Enter your email adress"
                        />
                    </section>
                </section>
            </form>
            </section>
            
                <TicketOverview
                 ableConfirm={true}
            nextLink="/Payment"
                />
            
    </section>
    </>
    )
}
