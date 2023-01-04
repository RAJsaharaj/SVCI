import React from "react";
import logo from "../images/logo.jpg";
// import FD from "../images/FD.jpeg";


const Navbar = () => {
    return(
    <>
      <header>
      <nav>
            {/* left side menu  */}
        <div className="left-side-menu">
          <div className="logo">
            <a href=".">
             <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="sub-menu">
            <a href=".">
              <li>Home</li>
            </a>
            <a href="#section-two">
              <li>About Us</li>
            </a>
            <a href="#section-third">
              <li>Goals</li>
            </a>
            <a href="https://www.google.com/maps/place/Swami+Vivekanand+Computer+Institute+And+Skills+Development/@26.3426322,89.2134813,20z/data=!4m13!1m7!3m6!1s0x39e308dc32a25fa9:0x5893d97d30af567c!2sThanapara+Rd,+Mathabhanga,+West+Bengal+736146!3b1!8m2!3d26.3419711!4d89.2136028!3m4!1s0x0:0xdd619c2efa25b5fe!8m2!3d26.3428081!4d89.2138308">
              <li>
                Location
              </li>
            </a>
          </div>
        </div>

           {/* right side menu */}
        <div className="right-side-menu">
          <div className="sub-menu">
            {/* <a href=".">
              <li>Log In</li>
            </a> */}
            {/* <button>Sign Up</button> */}
            &emsp;
           <a href="https://nbceskillindia.in/student-registration.php"><button>Registration</button></a>
          </div>
        </div>
      </nav>
    </header>
    </>
    );
  };
export default Navbar;