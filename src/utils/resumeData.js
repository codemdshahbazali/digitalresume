import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from "@mui/icons-material/BugReport";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Language, YouTube } from "@mui/icons-material";

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
      title: "Test Automation Lead - Siemens",
      date: "Aug 2018 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Test Automation Engineer - Cognizant",
      date: "Feb 2015 - Aug 2018",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
    },
  ],
  educations: [
    {
      title: "St Thomas College Of Engineering & Tech",
      date: "2010 - 2014",
      description:
        "Completed Bachleors of Technology on Information Technology from STCET, Kolkata, India.",
    },
    {
      title: "DAV Kapil Dev Public School",
      date: "2009",
      description:
        "Completed 12th from KDPS Ranchi, India. Subjects were Physics, Chemistry, Maths, Computer Science, English and Physical Education.",
    },
  ],

  services: [
    {
      title: "Test Automation",
      description:
        "Testing applications since last 8 years using various automation tools.",
      icon: <BugReportIcon />,
    },
    {
      title: "Frontend",
      description: "Built excellent and smooth UI using Html, CSS & React.",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Backend",
      description: "Built lot of APIs using Express and Node.",
      icon: <StorageIcon />,
    },
  ],

  skills: [
    {
      title: "Testing",
      description: [
        "WebdriverIO",
        "Protractor",
        "Cypress",
        "Jasmine",
        "Mocha-Chai",
        "Java Selenium",
      ],
    },
    {
      title: "Frontend",
      description: [
        "React",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      description: ["Node", "Python", "Express", "SQL", "MongoDB", "Postman"],
    },
    {
      title: "CI/CD",
      description: ["Git", "Github", "Jenkins", "Docker", "Agile/Scrum"],
    },
  ],

  portfolio: [
    {
      tag: "React",
      caption: "A short description",
      images: [
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
      ],

      title: "React Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos facilis tenetur ducimus similique ipsam recusandae ab ea ad vitae iste sit assumenda quia eveniet, totam nam sed quam odio cupiditate?",
      links: [
        { link: "https:://wwww.google.com", icon: <YouTube /> },
        { link: "https:://wwww.google.com", icon: <GitHubIcon /> },
        { link: "https:://wwww.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      caption: "A short description",
      images: [
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
      ],

      title: "React Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos facilis tenetur ducimus similique ipsam recusandae ab ea ad vitae iste sit assumenda quia eveniet, totam nam sed quam odio cupiditate?",
      links: [
        { link: "https:://wwww.google.com", icon: <YouTube /> },
        { link: "https:://wwww.google.com", icon: <GitHubIcon /> },
        { link: "https:://wwww.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      caption: "A short description",
      images: [
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
      ],
      title: "Python Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos facilis tenetur ducimus similique ipsam recusandae ab ea ad vitae iste sit assumenda quia eveniet, totam nam sed quam odio cupiditate?",
      links: [
        { link: "https:://wwww.google.com", icon: <YouTube /> },
        { link: "https:://wwww.google.com", icon: <GitHubIcon /> },
        { link: "https:://wwww.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Java",
      caption: "A short description",
      images: [
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png",
      ],
      title: "Java Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos facilis tenetur ducimus similique ipsam recusandae ab ea ad vitae iste sit assumenda quia eveniet, totam nam sed quam odio cupiditate?",
      links: [
        { link: "https:://wwww.google.com", icon: <YouTube /> },
        { link: "https:://wwww.google.com", icon: <GitHubIcon /> },
        { link: "https:://wwww.google.com", icon: <Language /> },
      ],
    },
  ],
};

export default dataObj;
