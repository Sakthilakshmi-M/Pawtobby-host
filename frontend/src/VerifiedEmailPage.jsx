import {useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

const VerifiedEmailPage = () => {
  const [valid,setValid] = useState(false)
    axios.get(`https://pawtobby-host-api.vercel.app/api/auth/verify/${param.email}/${param.token}`)
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
  return ( 
    <div>EmailVerified</div>
   );
}
 
export default VerifiedEmailPage;