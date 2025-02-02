
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};


const illustration = {
  animated: true
};

const greeting = {
  username: "Muzamil Hasnain",
  title: "Hi all, I'm Muzamil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true
};



const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",

  display: true 
};



const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications"),
    emoji(
      "⚡ Integration of third party services such as MongoDB/ Tailwindcss / ShadcnUI"
    )
  ],



  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "./html.svg"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "./css3.svg"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "./sass.svg"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "./javascript.svg"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "./reactjs.svg"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "./nodejs.svg"
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "./tailwnidcss.svg"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "./npm.svg"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "./monoDB.svg"
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: "./expressjs.svg"
    },
    {
      skillName: "mongoose",
      fontAwesomeClassname: "./mongoose.svg"
    }
  ],
  display: true 
};



const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "University of management and technology",
      logo: require("./assets/images/umt.png"),
      subHeader: "Software Engineering",
      duration: "2022 - 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};



const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false 
};



const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      bannerColor: "rgb(0, 119, 255)",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2022 – 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Hollywood",
      bannerColor: "#0077ff",
      companylogo: require("./assets/images/hollywood.png"),
      date: "2017 – present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer",
      company: "DUNE",
      companylogo: require("./assets/images/dune.png"),
      date: "2022 – 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};



const openSource = {
  showGithubProfile: "true",
  display: true 
};



const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: true,
      bgColor: '#eb9736',
      projectName: "Qruil",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://qruil.com/"
        }
        
      ]
    },
    {
      image: require("./assets/images/umt.png"),
      bgColor: 'none',
      projectName: "realstar",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realstar.ai/"
        }
      ]
    }
  ],
  display: true 
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
      ]
    },
    {
      title: "Google Coding Expert",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true
};


const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://realstar.ai",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://realstar.ai",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true 
};



const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 302-6098546",
  email_address: "smmh123619@gmail.com"
};



const isHireable = false; 
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
