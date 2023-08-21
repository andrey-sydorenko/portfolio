import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";

export const SOCIAL_NETWORKS = [
  { id: 1, href: "https://github.com/andrey-sydorenko", Icon: Github },
  {
    id: 2,
    href: "https://www.linkedin.com/in/andrey-sydorenko-ba5724200/",
    Icon: Linkedin,
  },
  { id: 3, href: "https://www.instagram.com/rey.nko/", Icon: Instagram },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Kyiv Independent",
    description:
      "News platform or publication based in Ukraine that delivers news, updates, and information in the English language. It caters to both local and international audiences, providing insights into various aspects of Ukrainian society, culture, politics, economy, and current events. The outlet serves as a valuable resource for English-speaking readers interested in staying informed about developments and stories unfolding in Ukraine.",
    link: "https://kyivindependent.com/",
  },
  {
    id: 2,
    title: "Webway",
    link: "",
    description:
      "The safe buying and selling project is an online platform that provides secure and reliable transaction services between buyers and sellers. The main objective of the project is to reduce the risks of fraud and dishonest actions, establish trust between the parties, and ensure a high level of security during operations.",
  },
  {
    id: 3,
    title: "AMT - Recon Pro 360",
    link: "https://amt.company/reconpro/",
    description:
      "This app allows users to schedule appointments for car repairs, maintenance, or inspections, providing a seamless and convenient way to manage their vehicle's needs. Users can access information about available services, view pricing, and select the desired options through the app.",
  },
  {
    id: 4,
    title: "Incard",
    link: "https://www.incard.co/",
    description:
      "Digital platform designed to allow users to sign up and create accounts within a bank or financial institution. Through this application, potential customers can enter their personal information, identification details, and other required data to initiate the account opening process. It simplifies and streamlines the traditional in-person registration process, making it more convenient and accessible for individuals to join the banking system and start using the financial services offered by the institution.",
  },
  {
    id: 5,
    title: "Finixio",
    link: "https://finixio.com/",
    description:
      "WordPress plugins that provide the ability to show data in charts and tables are powerful tools for visualizing information on a website. These plugins allow users to create interactive and informative charts, graphs, and tables without the need for complex coding.",
  },
  {
    id: 6,
    title: "Avtologistika",
    link: "",
    description:
      "With the help of this website, users can easily and conveniently order car transportation within Ukraine",
  },
  {
    id: 7,
    title: "Yohouse",
    link: "",
    description:
      "Professional online platform that offers a wide array of services related to home construction and building projects. It serves as a reliable hub for individuals and businesses seeking expert assistance in designing, planning, and executing their dream homes. The website showcases a portfolio of completed projects, providing design inspirations and construction ideas.",
  },
  {
    id: 9,
    title: "Muscle & Motion Web App",
    link: "https://app.yoga.muscleandmotion.com/",
    description:
      "Muscle and Motion is an interactive and educational website that focuses on providing in-depth knowledge of human anatomy, biomechanics, and exercise physiology. Through a combination of high-quality videos, 3D animations, and detailed explanations, the platform offers a comprehensive understanding of how muscles work, move, and interact during different exercises and movements.",
  },
];

export const PROJECTS_EXPERIENCE = [
  {
    id: 1,
    parentId: 1,
    title: "Full stack developer",
    date: {
      start: "August, 2022",
      end: "June, 2023",
    },
    description:
      "My responsibilities included implementing features to enhance user experience, optimizing website performance for seamless navigation, and integrating multimedia content such as videos, images, interactive elements and payment system.",
    technologies: [
      { label: "Handlebars", href: "https://handlebarsjs.com/" },
      { label: "React", href: "https://react.dev/" },
      { label: "Ghost", href: "https://ghost.org/" },
      { label: "Node JS", href: "https://nodejs.org/uk" },
      { label: "Next JS", href: "https://nextjs.org/" },
      { label: "SCSS", href: "https://sass-lang.com/" },
      { label: "JQuery", href: "https://jquery.com/" },
      { label: "Ember", href: "https://emberjs.com/" },
      { label: "Stripe", href: "https://stripe.com/" },
    ],
  },
  {
    id: 2,
    parentId: 2,
    date: {
      start: "January, 2021",
      end: "July, 2023",
    },
    description:
      "As a developer on the buy and sell project, I played a crucial role in crafting an online marketplace that facilitated seamless transactions between buyers and sellers. My responsibilities encompassed creating intuitive user interfaces, implementing secure payment gateways, and integrating reliable shipping and tracking systems.",
    title: "Lead Engineer",
    technologies: [
      { label: "React", href: "https://react.dev/" },
      { label: "Typescript", href: "https://www.typescriptlang.org/" },
      { label: "Material UI", href: "https://mui.com/" },
      { label: "Base Web", href: "https://baseweb.design/" },
      { label: "React Native", href: "https://reactnative.dev/" },
      { label: "Leaflet", href: "https://leafletjs.com/" },
    ],
  },
  {
    id: 3,
    parentId: 3,
    date: {
      start: "June, 2021",
      end: "June, 2022",
    },
    description:
      "As a UI engineer on the car service project, my primary focus was on creating a visually appealing and user-friendly interface for the platform. I collaborated closely with the design team to translate their mockups and wireframes into interactive and responsive user interfaces.",
    title: "UI Engineer",
    technologies: [
      { label: "React", href: "https://react.dev/" },
      { label: "Redux", href: "https://redux.js.org/" },
      { label: "SCSS", href: "https://sass-lang.com/" },
      { label: "Jest", href: "https://jestjs.io/uk/" },
    ],
  },
  {
    id: 4,
    parentId: 4,
    date: {
      start: "November, 2021",
      end: "March, 2022",
    },
    description:
      "My responsibilities included implementing responsive and accessible web pages, ensuring the platform worked flawlessly across various devices and browsers. I integrated form validation and error handling to enhance data accuracy and user experience during the registration process.",
    title: "Front End developer",
    technologies: [
      { label: "React", href: "https://react.dev/" },
      { label: "Typescript", href: "https://www.typescriptlang.org/" },
      { label: "Material UI", href: "https://mui.com/" },
    ],
  },
  {
    id: 5,
    parentId: 5,
    date: {
      start: "April, 2022",
      end: "August, 2022",
    },
    description:
      "As a front-end developer on the project making WordPress plugins, my primary focus was on creating visually engaging and user-friendly interfaces for the plugins. Working in tandem with the back-end developers, I collaborated closely with the design team to translate their concepts into interactive and responsive front-end components.",
    title: "Front End developer",
    technologies: [
      { label: "PHP", href: "https://www.php.net/" },
      { label: "Wordpress", href: "https://uk.wordpress.org/" },
      { label: "React", href: "https://react.dev/" },
    ],
  },
  {
    id: 6,
    parentId: 6,
    date: {
      start: "June, 2023",
      end: "July, 2023",
    },
    description:
      "I was responsible for implementing the user interface that showcased the company's services and facilitated seamless navigation for visitors. Working closely with the design and back-end teams, I translated the project requirements into visually appealing and responsive front-end components.",
    title: "Front End developer",
    technologies: [
      { label: "React", href: "https://react.dev/" },
      { label: "Typescript", href: "https://www.typescriptlang.org/" },
      { label: "Next JS", href: "https://nextjs.org/" },
    ],
  },
  {
    id: 7,
    parentId: 7,
    date: {
      start: "May, 2023",
      end: "June, 2023",
    },
    description:
      "In summary, my role as a front-end developer on the house building engagement website project involved creating an aesthetically pleasing and interactive platform that effectively showcased the company's house building services and designs, enhancing user engagement and contributing to the company's online success in the competitive industry.",
    title: "Front End developer",
    technologies: [
      { label: "Vue", href: "https://vuejs.org/" },
      { label: "Nuxt", href: "https://nuxt.com/" },
    ],
  },
  {
    id: 9,
    parentId: 9,
    date: {
      start: "June, 2021",
      end: "December, 2021",
    },
    description:
      "Throughout the project, I implemented interactive features, such as video playback, exercise categorization, and personalized user profiles, to enhance user engagement and learning experiences. I also optimized the website's performance to ensure fast loading times and responsiveness across various devices and screen sizes.",
    title: "Front End developer",
    technologies: [
      { label: "React JS", href: "https://react.dev/" },
      { label: "Material UI", href: "https://mui.com/" },
    ],
  },
];
