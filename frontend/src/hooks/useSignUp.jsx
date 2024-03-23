import {useState} from "react";
import axios from "axios";
import {useAuthContext} from "./useAuthContext";
export const useSignup = ()=>{
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(null)
  const {dispatch} = useAuthContext();
  const signUp = async (email,password)=>{
    setLoading(true);
    setError(null);

    await axios.post("http://localhost:5000/api/auth/register",{email,password})
    .then(response=>{
      localStorage.setItem('user',JSON.stringify(response.data))
      dispatch({type:"LOGIN",payload:response.data})
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false)
      setError(err.response.data.error);
    });
  }
  return {signUp,error,loading};
}