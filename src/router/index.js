import React from "react";
const Index = React.lazy(() => import("../pages/index"));
const Home = React.lazy(() => import("../pages/home"));
const About = React.lazy(() => import("../pages/about"));
// import Index from '../pages/index'
// import Home from '../pages/home'
// import About from '../pages/about'
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/",
    exact: true,
    component: Index
  },
  {
    path: "/about",
    component: About
  },
]

export default routes;