import { Grid, Icon, Paper, Typography } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import "./Resume.css";

import resumeData from "./../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import { TimelineContent, TimelineDot, TimelineItem } from "@mui/lab";

const CustomTimelineItem = ({ data }) => {
  return (
    <TimelineItem className='timeline_firstItem'>
      <CustomTimelineSeperator />
      <TimelineContent className='timeline_content'>
        <Typography className='timeline_title'>{data.title}</Typography>
        <Typography variant='caption' className='timeline_date'>
          {data.date}
        </Typography>
        <Typography variant='body2' className='timeline_description'>
          {data.description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>
            {resumeData.aboutme}
          </Typography>
        </Grid>
      </Grid>
      {/* Education and Experience */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* Working history */}
            <Grid item sm={12} md={6}>
              <CustomTimeline icon={<WorkIcon />} title='Work Experience'>
                {resumeData.experiences.map((experience) => {
                  return (
                    <CustomTimelineItem
                      data={experience}
                      key={experience.title}
                    />
                  );
                })}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline icon={<SchoolIcon />} title='Education History'>
                {resumeData.educations.map((education) => {
                  return (
                    <CustomTimelineItem
                      data={education}
                      key={education.title}
                    />
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6>Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent='space-around'>
            {resumeData.services.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <div className='service'>
                    <sapn className='service_icon'>{service.icon}</sapn>
                    <Typography className='service_title' variant='h6'>
                      {service.title}
                    </Typography>
                    <Typography className='service_description' variant='body2'>
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid
        container
        justifyContent='space-between'
        className='section graybg pb_45 p_50'
      >
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.skills.map((skill) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={0} className='skill'>
                    <Typography variant='h6' className='skill_title'>
                      {skill.title}
                    </Typography>
                    {skill.description.map((element) => {
                      return (
                        <Typography
                          variant='body2'
                          className='skill_description'
                        >
                          <TimelineDot
                            variant='outlined'
                            className='timeline_dot'
                          />
                          {element}
                        </Typography>
                      );
                    })}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* Contact */}
      <Grid container className='section'></Grid>
    </>
  );
};

export default Resume;
