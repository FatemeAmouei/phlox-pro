import React from "react";
import "./Blogs.css";
import Widget from "../Elementors/Widget/Widget";
import { useNavigate } from "react-router-dom";
import { data } from "./Blog/Blog.type";

const widgetData: data[] = [
  {
    id: 1,
    title: "قیمت گوشی‌های هوشمند از برند شیائومی در هند کاهش یافت",
    subtitle: "گیمینگ",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/90-angle-IsIQXkDENBo-unsplash-1-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 2,
    title: "تاریخ دقیق عرضه و رونمایی گوشی جدید تاشوی سامسونگ اعلام شد",
    subtitle: "تکنولوژی ",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/krisztian-tabori-IyaNci0CyRk-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 3,
    title: "قیمت گوشی‌های هوشمند از برند شیائومی در هند کاهش یافت",
    subtitle: "دکوراسیون",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/daniel-korpai-3qELJetpWsU-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 4,
    title: "مدیریت روزمرگی و برنامه‌ریزی هوشمندانه جهت فتح کسب‌وکار",
    subtitle: "تکنولوژی",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/trent-erwin-UgA3Xvi3SkA-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 5,
    title: "مزایا و معایب رشد مدرنیزه شدن زندگی و تاثیر مهم تکنولوژی",
    subtitle: "گیمینگ",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/kobu-agency-0mletxmBcVQ-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
  {
    id: 6,
    title: "وعده‌های غذایی سالم برای افزایش انرژی به‌صورت دیجیتال",
    subtitle: "دکوراسیون",
    subtitle2: "هیولای وردپرس",
    img: "https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/rachit-tank-2cFZ_FB08UM-unsplash-min-637x388.jpeg",
    parg: "اِلِکترونیک دانشی است شامل فیزیک، مهندسی، فناوری و کاربردهایی که با جریان و کنترل الکترون‌ها در خلا و ماده سروکار دارد. در الکترونیک برای کنترل جریان ...",
  },
];

export default function Blogs() {
  const navigate = useNavigate();

  const GotoBlog = (blog: data) => {
    navigate(`/blogs/${blog.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="main-container__blogs">
        <div className="blogs-text">
          <h2 className="blogs-title">وبلاگ </h2>
          <h4 className="blogs-subtitle">داغ ترین مقالات تکنولوژی</h4>
        </div>
        <section className="main-blogs">
          {widgetData.map((data) => (
            <div key={data.id} className="main-elementor__blogs">
              <div className="main-elementor__container">
                <Widget width="100%" height="90vh">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="main-elementor__img"
                  />
                  <div className="main-elementor__text">
                    <div className="main-elementor__subtitles">
                      <h4>{data.subtitle}</h4>
                      <h4>{data.subtitle2}</h4>
                    </div>

                    <h2
                      className="main-elementor__title"
                      onClick={() => GotoBlog(data)}
                    >
                      {data.title}
                    </h2>
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
