import React from "react";
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import GitHub from './GitHub';

const Footer = () => {
  return (
    <div className="flex justify-between px-20 mt-1 py-6 ">
      <Twitter />
      <Facebook />
      <Instagram />
      <GitHub />
    </div>
  );
};

export default Footer;
