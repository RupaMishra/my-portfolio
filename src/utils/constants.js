//
export const getDev = import.meta.env.VITE_DEVELOPER;

export const NAV = [
  { label: "HOME" },
  { label: "ABOUT" },
  { label: "SERVICE" },
  { label: "PROJECTS" },
  { label: "CONTACT" },
];

export const Colors = {
  black: "#050505",
  blue: "#175cf0",
  seven: "#777777",
  grey400: "#c4cdd5",
  grey500: "#919eab",
  grey600: "#637381",
  grey700: "#454f5b",
  grey800: "#999999",
  greynav: "#4f4f4f",
  greytext: "#707070",
  textField: "#212121",
};

export const projects = [
  {
    title: "Jobster",
    desc: `Jobster is a comprehensive job platform where users can search and apply for millions of job opportunities across various 
    industries and locations, track the status of their applications, and schedule interviews efficiently. By integrating these features,
    Jobster offers a seamless experience for job seekers <br/> Tech: Redux Toolkit for global state Mgmt, Context API and reducers for
    manipulating cart items. Auth 0(API) for user login, tailwindcss framework
    with React`,
    url: "",
    github: "",
    color: { grad1: "rgb(119, 52, 217)", grad2: "rgb(91, 200, 52)" },
  },
  {
    title: "Comfy Sloth",
    desc: `A versatile e-commerce website for browsing , purchasing products online
    with user Reg/Login, catalog with search and filters, shopping cart and PG. <br/> 
    Tech: Redux Toolkit for global state Mgmt, Context API and reducers for
    manipulating cart items. Auth 0(API) for user login, tailwindcss framework
    with React

    `,
    url: "",
    github: "",
    color: { grad1: "rgb(204, 105, 198)", grad2: "rgb(81, 201, 103)" },
  },
  {
    title: "Github Users",
    desc: `A react website to get info on all github users, like repos, followers,
    projects. All in easy to read pictorial form ie: graphs, charts. User
    Reg/Login and GitHub api integration <br/> Tech: Redux Toolkit for global state Mgmt, Context API and reducers for
    manipulating cart items. Auth 0(API) for user login, react-fusioncharts.`,
    url: "",
    github: "",
    color: { grad1: "rgb(92, 115, 134)", grad2: "rgb(141, 181, 50)" },
  },
  {
    title: "Mix Master",
    desc: `A React website with cocktails api integrated to get information about all the cocktails 
    and show them in a pictorial way. <br/> Tech: React, React router dom, hooks, redux.`,
    url: "",
    github: "",
    color: { grad1: "rgb(76, 70, 200)", grad2: "rgb(218, 210, 116)" },
  },
  // {
  //   title: "Unsplash Images",
  //   desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
  // non id illum, cupiditate ea qui aliquam, deserunt molestiae
  // rerum quod animi magni enim sint quibusdam impedit eum tempora
  // praesentium suscipit. Lorem ipsum dolor sit amet consectetur
  // adipisicing elit.`,
  //   url: "",
  //   github: "",
  //   color: { grad1: "rgb(64, 82, 153)", grad2: "rgb(121, 163, 115)" },
  // },
];

export const SERVICES = [
  { label: "Frontend Development", icon: "charm:north-star" },
  { label: "Backend Development", icon: "heroicons-solid:cube" },
  { label: "React.js Next.js React Naive", icon: "jam:triangle-f" },
  { label: "Node Express MongoDB", icon: "tabler:hourglass-filled" },
];
