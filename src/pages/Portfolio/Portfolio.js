import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Portfolio.css";

import resumeData from "./../../utils/resumeData";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const ProjectDialogue = ({ projectDialog, setProjectDialog }) => {
  return (
    <Dialog
      open={!!projectDialog}
      onClose={() => setProjectDialog(false)}
      className='projectDialog'
      maxWidth={"lg"} //xs, sm,md,lg,xl
    >
      <DialogTitle onClose={() => setProjectDialog(false)}>
        {projectDialog?.title}
      </DialogTitle>
      {/* <img
        src={projectDialog?.image}
        alt=''
        className='projectDialogue_image'
      /> */}
      <DialogContent style={{ height: "80vh" }}>
        {projectDialog.images && <ImageGallery images={projectDialog.images} />}
        <Typography className='projectDialogue_description'>
          {projectDialog?.description}
        </Typography>
      </DialogContent>
      <DialogActions className='projectDialogue_action'>
        {projectDialog?.links?.map((link, index) => {
          return (
            <a
              key={index}
              href={link?.link}
              target='_blank'
              className='projectDialogue_icon'
            >
              {link?.icon}
            </a>
          );
        })}
      </DialogActions>
    </Dialog>
  );
};

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className='section pb_45 pt_45' spacing={1}>
      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='customTabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
            (tag) => {
              return (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue === tag
                      ? "customTabs_item active"
                      : "customTabs_item"
                  }
                  key={tag}
                />
              );
            }
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3} className=''>
          {resumeData.portfolio.map((project, index) => {
            return (
              <>
                {tabValue === project.tag || tabValue === "All" ? (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grow in timeout={1000}>
                      <Card
                        className='customCard'
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className='customCard_image'
                            image={project.images[0]}
                          />
                          <CardContent>
                            <Typography
                              variant='body'
                              className='customCard_title'
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant='body2'
                              className='customCard_caption'
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            );
          })}
        </Grid>
      </Grid>

      <ProjectDialogue
        projectDialog={projectDialog}
        setProjectDialog={setProjectDialog}
      />
    </Grid>
  );
};

export default Portfolio;
