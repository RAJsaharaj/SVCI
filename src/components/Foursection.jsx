import React from "react";
import img from "../images/section4img.png";


const Foursection = () => {
    return(
        <>
            <section class="common-section" id="section-four">
          {/* right side of section 2   */}
      <div class="right-side">
        <h2>MATHABHANGA,THANA PARA,WORD NO-3</h2>
       <h3>ভর্তির জন্য আজই যোগাযোগ করুন</h3>
        <div class="button-group">
          <button class="common-button">কল করুন</button>
          <button class="common-button-normal">📲 9851171483</button>
        </div>
      </div>

        {/* left side of section 2  */}
      <div class="left-side">
        <img src={img} alt="section2" />
      </div>
    </section>
        </>
    );
};

export default Foursection;