import { Typography } from "@mui/material";
import React from "react";

import "./Profile.css";

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>Md Shahbaz Ali</Typography>
        <Typography className='title'>Senior Software Engineer</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require("./../../assets/images/mdshahbazali.jpg")} alt='' />
      </figure>

      <div className='profile_information'>
        Insert Timeline here
        <br />
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Profile;
