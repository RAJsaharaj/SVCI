import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const Iconbar = () => {
    return(
        <>
            <div class="icon-bar">
      <a href="." class="facebook" target=".">
        click here to visit &emsp; <FaFacebook /> 
      </a>

      <a
        href="."
        class="instagram"
        target="."
      >
        click here to visit &emsp; <FaInstagram />
      </a>

      <a href="." class="linkedin" target=".">
        click here to visit &emsp;<FaLinkedin />
      </a> 
    </div>
        </>
    );
}

export default Iconbar;