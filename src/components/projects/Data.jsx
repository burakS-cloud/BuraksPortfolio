// import Project1 from "../../assets/project1.webp";
// import Project2 from "../../assets/project2.webp";
// import Project3 from "../../assets/project3.webp";

import fileConverter from "../../assets/fileConverter.PNG";
import gradOne from "../../assets/grad1ss.png";
import graphQLBlog from "../../assets/graphQLBlog2.png";
import ecommerceReact from "../../assets/react-ecommerce-app-ss.png";
import travelerPers from "../../assets/traveler_perspective_adDetail.png";

export const projectsData = [
  {
    id: 1,
    image: fileConverter,
    title: "File Converter App",
    view: "https://file-converter-187y275ed-buraks-clouds-projects.vercel.app/",
    source: "https://github.com/burakS-cloud/FileConverter",
    status: "Can upload file but not convert.",
  },
  {
    id: 2,
    image: graphQLBlog,
    title: "GraphQL Blog App",
    view: "https://github.com/burakS-cloud/BlogApp--React-Node-GraphQL-Postgre-Prisma",
    source:
      "https://github.com/burakS-cloud/BlogApp--React-Node-GraphQL-Postgre-Prisma",
    status: "Currently Developing",
  },
  {
    id: 3,
    image: travelerPers,
    title: "Local Guide Travel App",
    view: "https://www.youtube.com/watch?v=MetOS45MqB4",
    source: "https://github.com/burakS-cloud/Local-Guide",
    status: "",
  },
  {
    id: 4,
    image: ecommerceReact,
    title: "Basic Ecommerce App w/ React.js",
    view: "https://www.youtube.com/watch?v=QJRd68sHoBE",
    source:
      "https://github.com/burakS-cloud/techcareer.net-React-Bootcamp-Ecommerce/tree/master/ecommerce",
    status: "",
  },
  {
    id: 5,
    image: gradOne,
    title: "HealthCare Hospital App",
    view: "https://www.youtube.com/watch?v=oaeKCy9QhKc",
    source:
      "https://github.com/burakS-cloud/HealthCare-Web-App-Refactored/tree/master",
    status: "",
  },
];
const ProjectCardData = [
  {
    imgsrc: travelerPers,
    title: "Local Guide Travel App",
    text: "It's an app that connects travelers and local people. If you want to visit a new city, why not be guided by the locals who know the place better? You can search for advertisements using filters and apply the ad you want, after that you can get in contact with other users via the chat system built into the app. Technologies used: Node.js, Socket.io, mongoDB, Express.js, React, Firebase Auth, Javascript(ES6), HTML5, CSS3, MaterialUI, SemanticUI, Bootstrap.",
    view: "https://www.youtube.com/watch?v=MetOS45MqB4",
    source: "https://github.com/burakS-cloud/Local-Guide",
  },
  {
    imgsrc: ecommerceReact,
    title: "Basic Ecommerce App w/ React.js",
    text: "This is an app that I've built during the 'techcareer.net's React Bootcamp which started on March 1st 2022 and it lasted 5 weeks. This bootcamp was my first introduction to React. I was one of the 23 elected students out of 1700+ applicants. Thanks to this bootcamp, I've learned about React hooks, state management with Context API and CRUD operations as well as working with API's. Completion certificate can be seen on my Linkedin profile.",
    view: "https://www.youtube.com/watch?v=QJRd68sHoBE",
    source:
      "https://github.com/burakS-cloud/techcareer.net-React-Bootcamp-Ecommerce/tree/master/ecommerce",
  },
  {
    imgsrc: gradOne,
    title: "HealthCare Hospital App",
    text: "This is a web application for an hospital. It has authentication, appointment creation functionality and it has authorization, meaning there are some things only authorized users, namely doctors can do. Doctors and as well as users can cancel an appointment. Technologies used: Node.js, mongoDB, Express.js, Ejs Templating Engine, HTML5, CSS3, Bootstrap, Passport.js (Auth).",
    view: "https://www.youtube.com/watch?v=oaeKCy9QhKc",
    source:
      "https://github.com/burakS-cloud/HealthCare-Web-App-Refactored/tree/master",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
];
