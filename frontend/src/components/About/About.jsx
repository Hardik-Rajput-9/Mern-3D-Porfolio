import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.description}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <Typography variant="h4">{about.quote}</Typography>
        </div>
      </div>
      <div className="aboutContainer3">
        <div>
          <img
            src={about.avatar.url}
            alt="AboutAvatar"
            className="aboutAvatar"
          />
          <Typography variant="h4">{about.name}</Typography>
          <Typography>{about.title}</Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
