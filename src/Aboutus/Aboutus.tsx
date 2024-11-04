import React from "react";
import "./Aboutus.css";
import Accordion from "react-bootstrap/Accordion";
import Circle from "../Header/Circle/Circle";

export default function Aboutus() {
  return (
    <div>
      <div className="aboutus-container">
        <div className="aboutus-services">
          <div className="aboutus-services__left">
            <div className="services-left__pic">
              <img
                className="services-rightBottom__img"
                src="https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_christian-deknock-HxYRdjhYCO0-unsplash-scaled-min-486x503.jpeg"
                alt=""
              />
              <Circle
                width="180px"
                height="180px"
                top="70%"
                left="1%"
                color="#ffd62c"
                borderRadius="30%"
                zIndex={10}
              />
            </div>
          </div>
          <div className="aboutus-services__right">
            <div className="aboutus-services__rightTop">
              <p className="aboutus-services__text">
                ابزارک یا گجت به وسایل و تجهیزات کوچک و تازه‌اختراعی گفته می‌شود
                که در آن‌ها فناوری نو به کار رفته باشد و برای انجام کارهای ویژه
                به‌درد بخورد.
              </p>
              <p className="aboutus-services__text">
                ابزارهای کاربردی موجود در ستون کناری وبگاه‌های اینترنتی که در
                زبان انگلیسی گجت نامیده می‌شوند، در فارسی اَبزارک معنی شده‌اند.
                ابزارک‌ها امکاناتی هستند که در کادرهای کوچک در صفحات سایت قرار
                می‌گیرند مانند نمایش آب‌وهوا، نمایش دیکشنری آنلاین، نمایش وضعیت
                مدیر سایت در یاهو مسنجر و …
              </p>
            </div>
            <div className="aboutus-services__rightBottom">
              <div className="services-rightBottom__pic">
                <img
                  className="services-rightBottom__img"
                  src="https://themes.wpmonster.co/Phlox/new/gadget-shop/wp-content/uploads/2024/04/op_xianjuan-hu-uPYpcsbICI4-unsplash-scaled-min-486x503.jpeg"
                  alt=""
                />
                <Circle
                  width="110px"
                  height="110px"
                  top="90%"
                  left="20%"
                  color="#000"
                  borderRadius="30%"
                  zIndex={10}
                />
              </div>
              <div className="services-rightBottom__text">
                <h1 className="services-rightBottom__title">
                  ما چه کارهایی می‌کنیم؟
                </h1>
                <p className="services-rightBottom__parag">
                  این گوشی‌ها دارای قابلیت‌های خاص و کاربردهایی نظیر کامپیوترهای
                  شخصی هستند. اما گوشی تلفن همراه‌ها نمی‌توانند دقیقاً به اندازه
                  کامپیوتر کارایی داشته باشند ولی بسیاری از کاربردهای کامپیوترها
                  و لپ تاپ‌ها را دارد. امروزه تقریباً تمام گوشی‌های هوشمند دارای
                  دوربین هستند و قابلیت‌هایی مثل اتصال به اینترنت را نیز دارند.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-question">
          <h1 className="services-question__title">سوالات متداول </h1>
          <div className="services-question__acc">
            <div className="aboutus-question__left">
              <li className="services-question__subtitle">مرجوعی‌ها</li>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>سیاست بازگشت وجه</Accordion.Header>
                  <Accordion.Body>
                    اولین بار در سال ۱۹۹۱ تیم برنرز لی تجارت الکترونیک را
                    پایه‌گذاری کرد و در سال ۱۹۹۴ که بانکداری آنلاین ایجاد شد،
                    شرکت پیتزا هات اولین فروش اینترنتی خود را آغاز کرد در همان
                    سال شرکت نت اسکیپ ارتباط امنیت لایه انتقال را ابداع و ایجاد
                    کرد و خرید اینترنتی به وسیله این پروتوکل ایجاد شد.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>نحوه دریافت کالاها</Accordion.Header>
                  <Accordion.Body>
                    در این نوع فروشگاه که بعد از به وجود آمدن اینترنت پا به عرصه
                    وجود گذاشت، فروشنده لیست و مشخصات کالاهای خود را در سایت
                    قرار می‌دهد.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>مبادله و کیف پول</Accordion.Header>
                  <Accordion.Body>
                    اغلب پرداخت در این فروشگاه‌های اینترنتی به وسیله ابزارهای
                    پرداخت الکترونیک قابل انجام است. کارت‌های پرداخت الکترونیک،
                    چه به صورت مجازی (فقط قابل استفاده در فضای اینترنت) و چه به
                    صورت فیزیکی اغلب قابل استفاده در چنین محیط‌هایی هستند.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="aboutus-question__right">
              <li className="services-question__subtitle">سفارشات شما</li>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>دلیوری و تحویل</Accordion.Header>
                  <Accordion.Body>
                    اولین بار در سال ۱۹۹۱ تیم برنرز لی تجارت الکترونیک را
                    پایه‌گذاری کرد و در سال ۱۹۹۴ که بانکداری آنلاین ایجاد شد،
                    شرکت پیتزا هات اولین فروش اینترنتی خود را آغاز کرد در همان
                    سال شرکت نت اسکیپ ارتباط امنیت لایه انتقال را ابداع و ایجاد
                    کرد و خرید اینترنتی به وسیله این پروتوکل ایجاد شد.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>واریزی و پرداخت‌ها</Accordion.Header>
                  <Accordion.Body>
                    در این نوع فروشگاه که بعد از به وجود آمدن اینترنت پا به عرصه
                    وجود گذاشت، فروشنده لیست و مشخصات کالاهای خود را در سایت
                    قرار می‌دهد.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>امکانات حساب کاربری</Accordion.Header>
                  <Accordion.Body>
                    اغلب پرداخت در این فروشگاه‌های اینترنتی به وسیله ابزارهای
                    پرداخت الکترونیک قابل انجام است. کارت‌های پرداخت الکترونیک،
                    چه به صورت مجازی (فقط قابل استفاده در فضای اینترنت) و چه به
                    صورت فیزیکی اغلب قابل استفاده در چنین محیط‌هایی هستند.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>جمع‌آوری بسته‌بندی‌ها</Accordion.Header>
                  <Accordion.Body>
                    اولین بار در سال ۱۹۹۱ تیم برنرز لی تجارت الکترونیک را
                    پایه‌گذاری کرد و در سال ۱۹۹۴ که بانکداری آنلاین ایجاد شد،
                    شرکت پیتزا هات اولین فروش اینترنتی خود را آغاز کرد در همان
                    سال شرکت نت اسکیپ ارتباط امنیت لایه انتقال را ابداع و ایجاد
                    کرد و خرید اینترنتی به وسیله این پروتوکل ایجاد شد.{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
