import React from 'react'
// import job from "../images/section2pic.png";
import computer from "../images/f2.png";

export const Twosection = () => {
    return (
        <div>
            <section className="common-section" id="section-two">
          {/* left side of section 2   */}
      <div className="left-side">
      
        <figure>
          <img src={computer} alt="section2" />
        </figure>
      </div>

        {/* right side of section 2  */}
      <div className="right-side">
        <h2>ভর্তির জন্য আজই যোগাযোগ করুন</h2>
        <p>
          Contact 📲 +91 9851171483
        </p>
        <div className="button-group">
         <a href="https://nbceskillindia.in/course.php"> <button className="common-button">Courses</button> </a>
          <button className="common-button-normal">কল করুন</button>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Twosection;
