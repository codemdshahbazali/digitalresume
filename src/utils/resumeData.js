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

  aboutme:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",
  experiences: [
    {
      title: "Art Director - Facebook Inc",
      date: "2010 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Senior Designer - Google",
      date: "2008 - 2010",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
    },
  ],
  educations: [
    {
      title: "St Thomas College Of Engineering & Tech",
      date: "2010 - 2014",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "DAV Kapil Dev Public School",
      date: "2009",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
    },
    {
      title: "St. Francis Public School",
      date: "2007",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
    },
  ],
};

export default dataObj;
