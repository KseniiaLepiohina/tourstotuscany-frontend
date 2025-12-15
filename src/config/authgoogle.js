import { signInWithPopup } from "firebase/auth"
import {auth,provider, signInWithPopup} from './firebase.config'

const GoogleLoginButton = () => {

  const handleGoogleLogin = async() => {
    try{
      const result = await signInWithPopup(auth,provider);
      const user = result.user;
      console.log("USer info",user);
    }catch(error) {
      console.error(error);
    }
  }
}
export default GoogleLoginButton;