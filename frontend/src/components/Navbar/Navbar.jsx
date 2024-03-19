import Logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (  
    <div class="navbar">
      <div className="logo">
        <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/" class="link">Home</Link></li>
          <li><Link to="/book" class="link">Book Now</Link></li>
          <li><Link to="/bookings" class="link">Bookings</Link></li>
          <li><Link to="/contact" class="link">Contact Us</Link></li>
          <li><Link to="/signin"  class="link">Sign In</Link></li>
        </ul>
      </nav>
    </div>
  );
}
 
export default Navbar;