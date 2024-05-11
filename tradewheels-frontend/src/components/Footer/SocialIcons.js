import React from "react";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Youtube from "../../images/Youtube.png";
import { Link } from "react-router-dom";

const links = [
  "https://x.com/Muhamma82547126?t=17A-FzkHj1qKKXgrrHnFjQ&s=09",
  "https://youtube.com/@cosmicexplorertv07?si=RmI_jmNcE8MusYVY",
  "https://www.facebook.com/profile.php?id=100026610223872&mibextid=ZbWKwL",
  "https://www.instagram.com/muhammadshan45?igsh=MWxvZWxrazZycXFxag==",
];

const images = [Twitter, Facebook, Youtube, Instagram];

const SocialIcons = () => {
  return (
    <>
      <div className="relative">
        <div className="right-4 flex items-center">
          {links.map((link, index) => (
            <Link key={index} to={link}>
              <img src={images[index]} alt="twitter Icon" className="mr-2" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
