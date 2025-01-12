import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>Hey, I'm Hardik Rajput</Typography>
        <Typography>
          <strong>Full-Stack Developer</strong>
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/hardikrajput9" target="blank">
          <BsGithub />
        </a>
        <a href="https://instagram.com/hr_hardik" target="blank">
          <BsInstagram />
        </a>
        <a href="https:linkedin.com/in/hardikrajput" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
