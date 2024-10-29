import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top__right">
            <img
              className="footer-right__img"
              src="https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/cropped-logo20x-min.png"
              alt="لوگو"
            />
            <p className="footer-right__text">
              دستگاه جانبی به رایانه وصل می‌شود تا ظرفیت و کاربری آن را بالا
              ببرد؛ دستگاه‌های جانبی می‌توانند به وسیلهٔ کابل یا بدون کابل به
              رایانه متصل شوند.
            </p>
            <ul className="footer-right__icons">
              <li className="footer-right__icon">bank 1</li>
              <li className="footer-right__icon">bank 2</li>
              <li className="footer-right__icon">bank3</li>
            </ul>
          </div>
          <div className="footer-top__center">
            <div className="col1">
              <h2 className="footer-center__title">دسترسی سریـع</h2>
              <a href="#" className="footer-center__sub">
                چگونه کار می‌کند
              </a>
              <a href="#" className="footer-center__sub">
                قوانین بازگشت وجه
              </a>
              <a href="#" className="footer-center__sub">
                روش‌های حمل‌ونقل
              </a>
              <a href="#" className="footer-center__sub">
                پکیج گالری تصاویر
              </a>
            </div>
            <div className="col2">
              <h2 className="footer-center__title">خدمات ما</h2>
              <a href="#" className="footer-center__sub">
                تعمیر لواز جانبی
              </a>
              <a href="#" className="footer-center__sub">
                بازارچه دست دوم
              </a>
              <a href="#" className="footer-center__sub">
                فروش عمده کالا
              </a>
              <a href="#" className="footer-center__sub">
                مزایده‌های هفتگی
              </a>
            </div>
            <div className="col3">
              <h2 className="footer-center__title"> مارکت لوازم جانبی</h2>
              <a href="#" className="footer-center__sub">
                گرافیک و سیستم
              </a>
              <a href="#" className="footer-center__sub">
                صنعت کشتی‌سازی
              </a>
              <a href="#" className="footer-center__sub">
                قدرت دیجیتال و انرژی
              </a>
              <a href="#" className="footer-center__sub">
                بخش ویژه هوا و فضا
              </a>
            </div>
          </div>
          <div className="footer-top__left">
            <h2 className="footer-left__title">خبرنامه ما</h2>
            <p className="footer-left__text">
              خبرنامه به محتوایی گفته می‌شود که اشخاص حقیقی و حقوقی مانند
              سازمان‌ها، موسسات، خبرگزاری‌ها و غیره به صورت منظم و مداوم برای
              مشترکین و بازاریابی خود ارسال می‌کنند.
            </p>
            <div className="footer-left__btns">
              <input
                placeholder="آدرس ایمیل شما"
                className="footer-left__input"
              ></input>
              <a href="#" className="footer-left__btn">
                اشتراک
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © طراحی شده توسط آورتا <span>فاطمه عموئی</span>
          </p>
        </div>
      </div>
    </>
  );
}
