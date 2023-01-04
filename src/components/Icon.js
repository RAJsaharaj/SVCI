import React from 'react'
// import job from "../images/section2pic.png";
import icon1 from "../images/sectionIcon1.png";
import icon2 from "../images/sectionIcon2.png";
import icon3 from "../images/sectionIcon3.png";



export const Icon = () => {
    return (
         <section class="section-third" id="section-third">
      <h2>The Tools For Your Goals</h2>
      <p>
        ভর্তির জন্য আজই যোগাযোগ করুন
      </p>
      <div class="section-third-task">
        <div class="task-1">
          <img src={icon1} alt="icon1" />
          <h3>Learn & Improve Yours Skill</h3>
          <p>
            ভর্তির জন্য আজই যোগাযোগ করুন
          </p>
        </div>

        <div class="task-2">
          <img src={icon2} alt="icon1" />
          <h3>short time learning</h3>
          <p>
            ভর্তির জন্য আজই যোগাযোগ করুন.
          </p>
        </div>

        <div class="task-3">
          <img src={icon3} alt="icon1" />
          <h3>100% Job Guarantee</h3>
          <p>
           ভর্তির জন্য আজই যোগাযোগ করুন
          </p>
        </div>
      </div>
    </section>
    );
};

export default Icon;
