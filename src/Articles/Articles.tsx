import React from "react";
import "./Articles.css";
import Widget from "../Elementors/Widget/Widget";
const widgetData = [
  {
    id: 1,
    title: "قیمت گوشی‌های هوشمند از برند شیائومی در هند کاهش یافت",
    subtitle: "گیمینگ",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/90-angle-IsIQXkDENBo-unsplash-1-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 2,
    title: "تاریخ دقیق عرضه و رونمایی گوشی جدید تاشوی سامسونگ اعلام شد",
    subtitle: "تکنولوژی ",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/krisztian-tabori-IyaNci0CyRk-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 3,
    title:
      "تبلیغات جستجوی گوگل همه را متحیر کرده‌است و تمامی رکوردها را شکسته است",
    subtitle: "دکوراسیون",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/daniel-korpai-3qELJetpWsU-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
];
export default function Articles() {
  return (
    <>
      <div className="main-container__article">
        <div className="article-text">
          <h2 className="article-title">آخرین مقالات</h2>
          <h4 className="article-subtitle">جدیدترین اخبار تکنولوژی</h4>
        </div>
        <section className="main-article">
          {widgetData.map((data) => (
            <div key={data.id} className="main-elementor__article">
              <div className="main-elementor__container">
                <Widget width="100%" height="90vh">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="main-elementor__img"
                  />
                  <div className="main-elementor__text">
                    <h4 className="main-elementor__subtitle">
                      {data.subtitle}
                    </h4>
                    <h2 className="main-elementor__title">{data.title}</h2>
                    <p className="main-elementor__parg">{data.parg}</p>
                  </div>
                </Widget>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
