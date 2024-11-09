import React from "react";
import "./Elementors.css";
import Widget from "./Widget/Widget";
import Circle from "../Header/Circle/Circle";
import { useNavigate } from "react-router-dom";

const widgetData = [
  {
    id: 1,
    title: "ساعت هوشمند",
    subtitle: "منتخب کالاهای",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_daniel-korpai-tE_kGhscUTU-unsplash-min.png",
    parg: "مشاهده محصولات",
    imgClass: "image-smartwatch",
  },
  {
    id: 2,
    title: "پخش‌کننده موزیک",
    subtitle: "منتخب کالاهای",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_90-angle-IsIQXkDENBo-unsplash-1-min.png",
    parg: "مشاهده محصولات",
    imgClass: "image-musicplayer",
  },
  {
    id: 3,
    title: "هدفون وایـرلس",
    subtitle: "منتخب کالاهای",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_black-headphones-flatl-lay-9CB58NW-min.png",
    parg: "مشاهده محصولات",
    imgClass: "image-headphone",
  },
  {
    id: 4,
    title: "دسته‌ی گیمینگ",
    subtitle: "منتخب کالاهای",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_photo-1554213352-5ffe6534af08-min.png",
    parg: "مشاهده محصولات",
    imgClass: "image-game",
  },
];
export default function Elementors() {
  const navigate = useNavigate();
  const Gotoshop = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="main-container">
        <section className="main">
          <div className="main-left">
            {widgetData.map((data) => (
              <div key={data.id} className="main-left__elementor">
                <div className="main-left__container">
                  <Widget width="100%" height="45vh">
                    <img
                      src={data.img}
                      alt={data.title}
                      className={`main-leftelementor__img ${data.imgClass}`}
                    />
                    <div className="main-leftelementor__text">
                      <h4 className="main-leftelementor__subtitle">
                        {data.subtitle}
                      </h4>
                      <h2 className="main-leftelementor__title">
                        {data.title}
                      </h2>
                      <ul
                        className="main-leftelementor__parg"
                        onClick={Gotoshop}
                      >
                        <li className="main-leftelementor__list">
                          {data.parg}
                        </li>
                      </ul>
                    </div>
                  </Widget>
                  <Circle
                    width="250px"
                    height="250px"
                    top="45%"
                    right="30%"
                    color="transparent"
                    backgroundImage="linear-gradient(-180deg, #FFFFFF24 0%, #80808000 100%)"
                    opacity={0.7}
                    zIndex={10}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="main-right">
            <div className="main-right__elementor">
              <div className="main-right__container">
                <Widget width="100%" height="10vh">
                  <img
                    src="https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_grant-ritchie-n_wXNttWVGs-unsplash-min.png"
                    alt="اسپیکر بلوتوثی"
                    className="main-rightelementor__img image-speaker"
                  />
                  <div className="main-rightlementor__text">
                    <h4 className="main-rightlementor__subtitle">
                      منتخب کالاهای
                    </h4>
                    <h2 className="main-rightelementor__title">
                      اسپیکر بلوتوثی
                    </h2>
                    <ul
                      className="main-rightelementor__parg"
                      onClick={Gotoshop}
                    >
                      <li className="main-rightelementor__list">
                        مشاهده محصولات
                      </li>
                    </ul>
                  </div>
                </Widget>
                <Circle
                  width="250px"
                  height="250px"
                  bottom="-110%"
                  right="12%"
                  color="transparent"
                  backgroundImage="linear-gradient(-180deg, #FFFFFF24 0%, #80808000 100%)"
                  opacity={0.7}
                  zIndex={10}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
