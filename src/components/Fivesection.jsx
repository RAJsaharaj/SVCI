import React from 'react';
import img from "../images/section5.png";


export const Fivesection = () => {
    return (
        <>

    <section class="common-section" id="section-five">
       {/* left side of section 2   */}
      <div class="left-side">
        <img src={img} alt="section5" />
      </div>

           {/* right side of section 2   */}
      <div class="right-side">
        <h2>ভর্তি চলছে</h2>

        <div class="fitness-goals">
          <div class="rule1">
            <h3>
              <i class="fas fa-heart"></i> PROGRAMMING COURSES
            </h3>
            <p>
              C, C++, JAVA, PYTHON, Web Development, App Development
            </p>
          </div>

          <div class="rule2">
            <h3>
              <i class="fas fa-heart"></i>BASIC COURSES, Hardware, Networking
            </h3>
            <p>
              lamet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Track your daily habits
            </p>
          </div>

          <div class="rule3">
            <h3><i class="fas fa-heart"></i> School students দের COMPUTER SUBJECT পড়ানো হয়</h3>
            <p>
              8, 9, 10, 11, 12, CBSC, ICSE
            </p>
          </div>
        </div>
      </div>
    </section>
        </>
    );
};

export default Fivesection;
