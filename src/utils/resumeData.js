import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const dataObj = {
  name: "Md Shahbaz Ali",
  title: "Sr. Software Engineer | Test Automation Lead",
  birthday: "4th Feb 1992",
  email: "codemdshahbazali @gmail.com",
  address: "Bangalore, India",
  phone: "+91-9980715588",

  socials: {
    Github: {
      link: "https://github.com/codemdshahbazali",
      text: "codemdshahbazali",
      icon: <GitHubIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/md-shahbaz-ali-03238645/",
      text: "md-shahbaz-ali",
      icon: <LinkedInIcon />,
    },
    Twitter: {
      link: "https://twitter.com/alishahbaz4u",
      text: "@alishahbaz4u",
      icon: <TwitterIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/mdshahbaz1",
      text: "@mdshahbaz1",
      icon: <InstagramIcon />,
    },
  },
};

export default dataObj;
