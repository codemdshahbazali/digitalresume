import { Typography } from "@mui/material";
import React from "react";

import resumeData from "./../../utils/resumeData";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}.</Typography>
      </div>
      <div className='footer_right'>
        <Typography className='footer_copyright'>
          Designed and Developed by{" "}
          <a
            href={resumeData.socials.LinkedIn.link}
            target='_blank'
            rel='noreferrer'
          >
            {resumeData.name}.
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
