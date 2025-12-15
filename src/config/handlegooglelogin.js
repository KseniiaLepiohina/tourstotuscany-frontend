import { signInWithPopup } from "firebase/auth"
import { auth,provider } from "./firebase.config"
import axios from "axios";

const handleGoogleLogin = async () => {
  try{
    const result = await signInWithPopup(auth,provider);
    const idToken = await result.user.getIdToken();
    console.log("ID Token", idToken);

    await axios.post('http:localhost:5000/auth/google',{
      Headers:{"Content-Type":"application/json"},
      body:JSON.stringify({idToken});
    })
  }catch(error) {
console.log(error);
  }
}
export default handleGoogleLogin;