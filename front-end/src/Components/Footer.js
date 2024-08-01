// src/components/Footer.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer style={{display:"inline-flex", gap:"10%"}}>
     <div>
      <div>
      <h4>CUSTOMER SERVICE</h4>
      </div>
      <div>
        Help & FAQs <br></br>
        Order Tracking <br></br>
        Shipping & Delivery <br></br>
        Order History <br></br>
        Advanced Search <br></br>
        Login
      </div>
     </div>
     <div>
      <div><h4>ABOUT US</h4></div>
      <div>
        About us <br></br>
        Careers <br></br>
        Our Stores<br></br>
        Corporate Sales <br></br>
        Careers
      </div>
     </div>
     <div>
      <div><h4>MORE INFORMATION</h4></div>
      <div>
        Affiliates <br></br>
        Refer a friend <br></br>
        Student Beans Offers<br></br>
        Gift Vochers 
      </div>
     </div>
     <div>
     <div><h4>SOCIAL MEDIA</h4></div>
      <div>
      <SocialIcon url="https://twitter.com" />
      <SocialIcon url="https://facebook.com" />
      <SocialIcon url="https://youtube.com" />
      <SocialIcon url="https://linkedin.com" />
      <SocialIcon url="https://instagram.com" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;
