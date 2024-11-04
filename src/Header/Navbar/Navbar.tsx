import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark navbar" data-bs-theme="light">
      <Container fluid dir="rtl" className="d-flex justify-content-between">
        <Navbar.Brand href="#">
          <a href="#" title="فروشگاه لوازم جانبی فلوکس پرو">
            <img
              className="navbar-right__img"
              src="https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/cropped-logo20x-min.png"
              alt="لوگو"
            />
          </a>
        </Navbar.Brand>

        <Nav
          className="my-2 my-lg-0 d-flex justify-content-between navbar-center"
          navbarScroll
        >
          <NavLink to="/" className="navbar-center__title active">
            خانه
          </NavLink>
          <NavLink to="/shop" className="navbar-center__title">
            فروشگاه
          </NavLink>
          <NavLink to="/blog" className="navbar-center__title">
            وبلاگ
          </NavLink>
          <NavLink to="/aboutus" className="navbar-center__title">
            درباره ما
          </NavLink>
          <NavLink to="/contact" className="navbar-center__title">
            تماس با ما
          </NavLink>
        </Nav>

        <Nav
          className="my-2 my-lg-0 d-flex justify-content-between navbar-left"
          navbarScroll
        >
          <Nav.Link href="#" className="navbar-left__icon">
            <CiSearch />
          </Nav.Link>
          <Nav.Link href="#" className="navbar-left__icon">
            <MdFavoriteBorder />
          </Nav.Link>
          <Nav.Link href="#" className="navbar-left__icon">
            <FaRegCircleUser />
          </Nav.Link>
          <Nav.Link href="#" className="navbar-left__icon">
            <HiOutlineShoppingBag />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
