import React from "react";
import Shopcomp from "./Shopcomp";
import "../Shop/Shop.css";
import Nav from "react-bootstrap/Nav";
import { MdFavoriteBorder } from "react-icons/md";
import Pagination from "react-bootstrap/Pagination";

const ShopcompData = [
  {
    id: 1,
    price: "235,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_photo-1554213352-5ffe6534af08-min-370x370.png",
    btn: "دسته وایرلس پیشرفته",
  },
  {
    id: 2,
    price: "14,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/asset-3-1-min-370x370.png",
    btn: " بلندگو ومیکروفنن ",
  },
  {
    id: 3,
    price: "69,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/5-1-min-370x370.png",
    btn: "اسپیکر هوشمند جی بی ال",
  },
  {
    id: 4,
    price: "تومان 58,000",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/asset-4-1-min-370x370.png",
    btn: "اسپیکر بلوتوثی چریکی",
  },
  {
    id: 5,
    price: "235,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/Layer-1-1-min-370x370.png",
    btn: "هدفون بی سیم راکی",
  },
  {
    id: 6,
    price: "320,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/9-1-min-370x370.png",
    btn: "هدفون بنفش",
  },
  {
    id: 7,
    price: "65,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/asset-2-1-min-370x370.png",
    btn: "هدفون استدیو جاموجی",
  },
  {
    id: 8,
    price: "157,000 تومان",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/6-1-min-370x370.png",
    btn: "ساندبار خانگی",
  },
];
export default function Shop() {
  return (
    <>
      <div className="shop-main__container">
        <section className="shop-main">
          <div className="shop-text">
            <h2 className="shop-title">آخرین محصولات</h2>
            <h4 className="shop-subtitle">جدیدترین کالاهای فروشگاه</h4>
          </div>
          <section className="main-shop">
            {ShopcompData.map((data) => (
              <div key={data.id} className="shopmain-elementor">
                <div className="shopmain-container">
                  <Shopcomp width="100%" height="45vh">
                    <h4 className="shopmain-elementor__price">{data.price}</h4>
                    <Nav.Link href="#" className="shopmain-icon">
                      <MdFavoriteBorder />
                    </Nav.Link>
                    <div className="shopmain-elm__bottom">
                      <img
                        src={data.img}
                        alt="#"
                        className="shopmain-elementor__img"
                      />
                      <a className="shopmain-elementor__btn">{data.btn}</a>
                    </div>
                  </Shopcomp>
                </div>
              </div>
            ))}
          </section>
          <div className="shopmain-page">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item> <Pagination.Next />
              <Pagination.Last>آخرین</Pagination.Last>
            </Pagination>
          </div>
        </section>
      </div>
    </>
  );
}
