import Aboutus from "../Aboutus/Aboutus";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Contactus from "../Contactus/Contactus";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/contact",
    element: <Contactus />,
  },
];

export default routes;
