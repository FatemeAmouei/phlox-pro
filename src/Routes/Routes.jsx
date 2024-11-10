import Aboutus from "../Aboutus/Aboutus";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Contactus from "../Contactus/Contactus";
import Blog from "../Blogs/Blog/Blog";
import Basket from "../Basketshop/Basket";

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
    path: "/blogs",
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
  {
    path: "/blogs/:id",
    element: <Blog />,
  },
  {
    path: "/Basket",
    element: <Basket />,
  },
];

export default routes;
