import React from "react";
// import appstore from "../images/icons/appstore.png";
// import googleplay from "../images/icons/googlePlay.png";
import heropage from "../images/READ.mp4";
const Onethsection = () =>{
    return(
        <>
            {/* our hero section start */}
            
         <section className="main-hero-section">
            {/* left side code   */}
          <div className="hero-left-side">
            <h1>Swami Vivekanand Computer Institute<br /> And Skills Development</h1>
            <p>
              An ISO 9001 : 2015 Certified India's Largest Computer Educational Organization
 EstablishedUnder Ministry of Corporate Affairs, Govt. of India, Corporate Identity No. - U80903WB2017PTC223024.
            </p>
            {/* <div className="button-group">
              <a href=".">
                <img
                  src={appstore}
                  alt="appstore"
                  className="appStore"
                />
              </a>
              <a href=".">
                <img src={googleplay} alt="googlePlay" />
              </a>
            </div> */}
          </div>
              {/* right side code */}
              <div class="hero-right-side">
               <video autoPlay loop muted >
                 <source src={heropage} />
               </video>
              </div>
         </section>
    </>
    );
};

export default Onethsection;


