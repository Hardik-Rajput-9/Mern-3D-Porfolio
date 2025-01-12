import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../Images/hrLogo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 35%)"
      navColor3="hsl(219, 45%, 30%)"
      navColor4="hsl(219, 40%, 25%)"
      burgerColor="hsl(36, 95%, 49%)"
      burgerColorHover="hsl(46, 100%, 82%)"
      logo={logo}
      logoWidth="100vw"
      logoHeight="100vh"
      logoColor="hsl(36, 95%, 49%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1Color="hsl(36, 95%, 49%)"
      link1ColorHover="white"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="hsl(36, 95%, 49%)"
      profileIconColorHover="hsl(46, 100%, 82%)"
    />
  );
};

export default Header;
