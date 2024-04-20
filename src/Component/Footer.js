import React from "react";
import {FaLinkedin} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://www.linkedin.com/in/gayathiri15" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:gayathriregina15@gmail.com.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;