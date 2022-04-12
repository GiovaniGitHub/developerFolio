/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "giovani.angelo",
  title: "Hi all, I'm Giovani Ângelo",
  subTitle: emoji(
    "I have over 14 year's experience as a software engineer. During this time, I developed back-end systems, pipelines for data processing, and also worked in education as a teacher and researcher."
  ),
  resumeLink: null, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/GiovaniGitHub",
  linkedin: "https://www.linkedin.com/in/giovaninobrega/",
  gmail: "giovani.angelo@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Languages and Tools",
  skills: [
    emoji("⚡ Development or use of APIs and architecture of web applications"),
    emoji(
      "⚡ Creation of jobs with the objective of extracting, transforming and loading data."
    ),
    emoji("⚡ Development and deployment of a machine learning pipeline.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: {
    languages: [
      {
        skillName: "java",
        imageUrl:
          "https://img.icons8.com/color/512/000000/java-coffee-cup-logo.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Python",
        imageUrl: "https://img.icons8.com/color/512/000000/python.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Typescript",
        imageUrl: "https://img.icons8.com/color/512/000000/typescript.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Javascript",
        imageUrl: "https://img.icons8.com/color/512/000000/javascript.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Golang",
        imageUrl: "https://img.icons8.com/color/512/000000/golang.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Rust",
        imageUrl:
          "https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-rust-is-a-multi-paradigm-system-programming-language-logo-color-tal-revivo.png",
        negative: true,
        size: "60px"
      }
    ],
    tools: [
      {
        skillName: "Node",
        imageUrl: "https://img.icons8.com/color/240/000000/nodejs.png",
        negative: false,
        size: "80px"
      },
      {
        skillName: "Scikit",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        negative: false,
        size: "100px"
      },
      {
        skillName: "Tensorflow",
        imageUrl: "https://img.icons8.com/color/512/tensorflow.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Docker",
        imageUrl: "https://img.icons8.com/fluency/48/000000/docker.png",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Keras",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Scipy",
        imageUrl: "https://scipy.org/images/logo.svg",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Scikit Image",
        imageUrl: require("./assets/images/scikit_image.png"),
        negative: false,
        size: "60px"
      },
      {
        skillName: "Numpy",
        imageUrl: "https://numpy.org/images/logo.svg",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Pandas",
        imageUrl: "https://pandas.pydata.org/static/img/favicon_white.ico",
        negative: false,
        size: "60px"
      },
      {
        skillName: "Spark",
        imageUrl:
          "https://uploads-ssl.webflow.com/5e724862760345325327026c/5fa7238e9ad1b43af56de907_apache-spark-white-logo.png",
        negative: false,
        size: "100px"
      }
    ]
  },
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University of Rio Grande do Norte",
      logo: require("./assets/images/brasao_flat.png"),
      subHeader: "PhD of Electrical and Computer Engineering",
      duration: "September 2011 - May 2016",
      desc: "Researched of Telediagnosis system, Lung Cancer, Medical Image Processing, Feature Selection and published 3 ."
    },
    {
      schoolName: "Federal University of Rio Grande do Norte",
      logo: require("./assets/images/brasao_flat.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2009 - November 2010",
      desc: "Participated in the research of Interval Analysis and Computational mathematics."
    },
    {
      schoolName:
        "Federal Institute of Education Science and Technology of Rio Grande do Norte",
      logo: require("./assets/images/ifrn.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2004 - July 2009",
      desc: " Took courses about Software Engineering, Software Analysis, Operating Systems."
    },
    {
      schoolName: "Federal University of Rio Grande do Norte",
      logo: require("./assets/images/brasao_flat.png"),
      subHeader: "Graduate in Mathematics",
      duration: "January 1999 - March 2003",
      desc: "Took courses about Calculus and Analysis Mathematics, Topology, Algebra and Linear Algebral and Theory of Numbers."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Engineer",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Red Ventures",
      companylogo: require("./assets/images/red_ventures.jpeg"),
      date: "Jan. 2022 -- current",
      desc: "Develop and maintain jobs and programs responsible for creating data pipelines, maintaining and building data storage systems that will be used by other areas of the company"
    },
    {
      role: "Software Engineer",
      company: "Stone",
      companylogo: require("./assets/images/Stone_pagamentos.png"),
      date: "Nov. 2020 -- Dec. 2021",
      desc: "Implementation and maintenance of systems associated with the company's billing and billing process."
    },
    {
      role: "Research and Technology Consultant",
      company: "LAIS",
      companylogo: require("./assets/images/lais.png"),
      date: "Jan. 2015 -- Dec 2019",
      desc: "  Support for research, review of articles and works for publication, implementation and proposals for solutions to problems using Machine Learning, Digital Image and Signal Processing and Statistical Analysis."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some startups that I helped to create their tech.",
  projects: [
    {
      image: require("./assets/images/gtp.jpeg"),
      projectName: "Hunter",
      projectDesc:
        "The project is a process automation platform that identifies, controls and manages sensors, actuators and components.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gtpautomation.com/"
        }
      ]
    },
    {
      image: require("./assets/images/alive.jpeg"),
      projectName: "Alive App",
      projectDesc:
        "Web app for scheduling appointments, medication control, guides and partnerships.",
      footerLink: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/company/alive-app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Certifications, courses and some badges that I have done !",

  achievementsCards: [
    {
      title: "Data Tracks",
      subtitle:
        "In this tracks I was able to see how to build an effective data architecture, optimize data processing, maintain large-scale data systems. From the data science perspective learn how this versatile language allows you to import, clean, manipulate, and visualize data",
      image: "https://cdn.lovesavingsgroup.com/logos/datacamp.png",
      footerLink: [
        {
          name: "Data Engineer",
          url: "https://www.datacamp.com/statement-of-accomplishment/track/0b899d821423d1fb847ddd9fb3ad211ef4f79ac7"
        },
        {
          name: "Data Scientist",
          url: "https://www.datacamp.com/statement-of-accomplishment/track/b23dd0c29e501c547925deae93a640ddc81651af"
        },
        {
          name: "Machine Learning Fundamentals",
          url: "https://www.datacamp.com/statement-of-accomplishment/track/0d3c6d98d5fcd1bcce3404ec822bd3890ca2cafb"
        },
        {
          name: "Data Manipulation",
          url: "https://www.datacamp.com/statement-of-accomplishment/track/9f2bb6ae0ea328b4852a5c04a26a37119fff69a4"
        },
        {
          name: "Importing and Cleaning Data",
          url: "https://www.datacamp.com/statement-of-accomplishment/track/5db6d10ae8c6fa7fc8d16996060a6da1e6536ce4"
        }
      ]
    },
    {
      title: "Coursera",
      subtitle:
        "Expert in Data Science, Machine Learning and AI. Become an IBM-approved Expert in Data Science, Machine Learning and Artificial Intelligence.",
      image: require("./assets/images/coursera-icon.png"),
      footerLink: [
        {
          name: "Data Science Methodology",
          url: "https://www.credly.com/badges/69daa77e-3ff2-40c3-9f31-4a256d155b63/linked_in_profile"
        },
        {
          name: "Applied IA with DeepLearning",
          url: "https://www.youracclaim.com/badges/61706c1a-df90-4466-9a13-ff8346668591/linked_in_profile"
        },
        {
          name: "Fundamentals of Scalable Data Science",
          url: "https://www.credly.com/badges/5b516073-169b-4a37-920a-6cdf45d57139/linked_in_profile"
        },
        {
          name: "Advanced Machine Learning and Signal Processing",
          url: "https://www.credly.com/badges/a2a827f0-e552-41a6-bd43-76c96edb8ec9/linked_in_profile"
        },
        {
          name: "Advanced Data Science Specialization",
          url: "https://www.credly.com/badges/bd6649f1-2156-4ba1-97f2-70320b73c4b9/linked_in_profile"
        },
        {
          name: "Advanced Data Science Capstone",
          url: "https://www.credly.com/badges/09752916-0691-4677-9e18-4f21ce244d15/linked_in_profile"
        }
      ]
    },
    {
      title: "Udemy",
      subtitle: "",
      image: require("./assets/images/udemy_transparent.png"),
      footerLink: [
        {
          name: " Scala & Functional Programming Essentials",
          url: "https://www.udemy.com/certificate/UC-0eca0d27-2d5e-4d81-bbc0-2c783559a47c"
        },
        {
          name: "Complete FastAPI masterclass + Instagram clone project",
          url: "https://www.udemy.com/certificate/UC-cd97de6c-ca8f-4df1-ac86-66030308aa24"
        },
        {
          name: "ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID",
          url: "https://www.udemy.com/certificate/UC-2196270e-368a-4c77-babf-9c6777bec54a"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️ 📧"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "giovani.angelo@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
