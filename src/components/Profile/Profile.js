import { Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

import CustomTimeline, {
  CustomTimelineSeperator,
} from "./../Timeline/Timeline";

import resumeData from "./../../utils/resumeData";
import "./Profile.css";
import { TimelineContent, TimelineItem } from "@mui/lab";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem className='timeline_firstItem'>
    <CustomTimelineSeperator />
    <TimelineContent className='timeline_content'>
      {!link ? (
        <Typography className='timelineItem_text'>
          <span>{title}: </span>
          {text}
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}: </span>
          <a href={link} target='_blank'>
            {text}
          </a>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require("./../../assets/images/mdshahbazali.jpg")} alt='' />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => {
            return (
              <CustomTimelineItem
                title={key}
                text={resumeData.socials[key].text}
                link={resumeData.socials[key].link}
              />
            );
          })}
        </CustomTimeline>

        <br />
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Profile;
