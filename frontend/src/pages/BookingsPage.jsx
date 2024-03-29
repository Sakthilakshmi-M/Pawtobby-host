import axios from "axios";
import {useState,useEffect} from "react";
import {useAuthContext} from "../hooks/useAuthContext";
import BookingCard from "../components/BookingCard/BookingCard";
const BookingsPage = () => {
  const {user} = useAuthContext();
  const [bookings,setBookings] = useState(null);
  useEffect(()=>{
    axios.get("https://pawtobby-host-api.vercel.app/api/booking/getBookings",{
      headers:{"Authorization":`Bearer ${user.token}`}
    })
    .then((response)=>setBookings(response.data.bookings))
    .catch((error)=>console.log(error))
  },[])
  return ( 
    <div>
      {bookings && bookings.map((booking,index)=>{
        return (
          <div key={index} >
            <BookingCard bookings={booking}></BookingCard>
          </div>
        )
      })}
    </div>
   );
}
 
export default BookingsPage;