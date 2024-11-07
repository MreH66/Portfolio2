import project1 from "../assets/pictures/webshop/webshop1.jpg";
import project2 from "../assets/pictures/secondWebsite/WebSite1.jpg";

export const aboutMe =
  "As a front-end developer, my goal is to continually learn, master modern technologies, and create efficient, user-friendly applications.";
export const skillsArray = [
  { title: "Markup,styling and presentation", skillsList: ["HTML", "CSS"] },
  { title: "Programming languages", skillsList: ["JavaScript", "TypeScript"] },
  { title: "Library and frameworks", skillsList: ["Bootstrap", "React"] },
  { title: "Service", skillsList: ["Firebase"] },
];

export const myWork = [
  {
    title: "Lending page",
    img: project2,
    technologiesUsed: "HTML , CSS , JavaScript , Next.js",
    about: "This site showcases my basic skills in front-end web development",
    link: "https://basics1-drab.vercel.app/",
  },
  {
    title: "Web shop",
    img: project1,
    technologiesUsed:
      "HTML , CSS , JavaScript , React , React router dom , Firebase (Firestore, Authentication , storage) ...",
    about:
      "Responsive web shop with functionality for the admin to add new items.",
    link: "",
  },
];
