import React from 'react';
// import img from "../images/LOGO4.png";
import nbselogo from "../images/FD.jpeg";

const Footer = () => {
    return(
        <>
            <footer>
      <div class="logo-div">
        <img src={nbselogo} alt="logo" />
        <p>Contact 📲 +91 9851171483</p>
      </div>

      <div class="footer-menu">
        <div class="footer-div-2">
         <a href="3"><h4>Home</h4></a> 
          {/* <a href="."><li>pricing</li></a>
          <a href="."><li>pricing</li></a> */}
        </div>

        <div class="footer-div-3">
          <a href ="https://www.google.com/maps/place/Swami+Vivekanand+Computer+Institute+And+Skills+Development/@26.3426322,89.2134813,20z/data=!4m13!1m7!3m6!1s0x39e308dc32a25fa9:0x5893d97d30af567c!2sThanapara+Rd,+Mathabhanga,+West+Bengal+736146!3b1!8m2!3d26.3419711!4d89.2136028!3m4!1s0x0:0xdd619c2efa25b5fe!8m2!3d26.3428081!4d89.2138308"><h4>MAP</h4></a>
          {/* <a href="."><li>pricing</li></a>
          <a href="."><li>pricing</li></a> */}
        </div>

        <div class="footer-div-4">
          <a href="https://nbceskillindia.in/course.php"><h4>Courses</h4></a>
          {/* <a href="."><li>pricing</li></a>
          <a href="."><li>pricing</li></a> */}
        </div>
        <div class="footer-div-5">
         <a href="https://nbceskillindia.in/student-registration.php"><h4>Registration</h4></a>
          {/* <a href="."><li>Questions Or Feedback?</li></a>
          <a href="."><li>We’ll love to help you</li></a> */}
        </div>
      </div>
    </footer>
        </>
    );
}

export default Footer;

