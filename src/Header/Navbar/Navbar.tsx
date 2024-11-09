import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "../Navbar/Navbar.css";
import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import SearchModal from "../SearvhModal/Searchmodal";
import Badge from "react-bootstrap/Badge";
import { SlBasket } from "react-icons/sl";

const NavbarComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSearchModal = () => {
    setShowModal(true);
  };

  return (
    <>
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar-center__title active"
                    : "navbar-center__title"
                }`
              }
            >
              خانه
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar-center__title active"
                    : "navbar-center__title"
                }`
              }
            >
              فروشگاه
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar-center__title active"
                    : "navbar-center__title"
                }`
              }
            >
              وبلاگ
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar-center__title active"
                    : "navbar-center__title"
                }`
              }
            >
              درباره ما
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar-center__title active"
                    : "navbar-center__title"
                }`
              }
            >
              تماس با ما
            </NavLink>
          </Nav>

          <Nav
            className="my-2 my-lg-0 d-flex justify-content-between navbar-left"
            navbarScroll
          >
            <Nav.Link
              className="navbar-left__iconsearch"
              onClick={handleSearchModal}
            >
              <CiSearch />
            </Nav.Link>
            <Nav.Link href="#" className="navbar-left__icon">
              <MdFavoriteBorder />
            </Nav.Link>
            <Nav.Link href="#" className="navbar-left__icon">
              <FaRegCircleUser />
            </Nav.Link>

            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom" className="navbar-tooltip">
                  .. سبد خرید خالیست
                  <Nav.Link href="#" className="navbar-tooltip__icon">
                    <SlBasket />
                  </Nav.Link>
                </Tooltip>
              }
            >
              <Nav.Link href="#" className="navbar-left__icon">
                <HiOutlineShoppingBag />
              </Nav.Link>
            </OverlayTrigger>
            <Badge className="navbar-left__badge">0</Badge>
          </Nav>
        </Container>
      </Navbar>

      {showModal && (
        <SearchModal show={showModal} onHide={() => setShowModal(false)} />
      )}
    </>
  );
};

export default NavbarComponent;
