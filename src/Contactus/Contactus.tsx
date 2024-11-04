import React from "react";
import "./Contactus.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { RiInstagramFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";

export default function Contactus() {
  return (
    <>
      <div className="contactus-container">
        <div className="contactus-top">
          <div className="contactus-top__right">
            <h1 className="contactus-right__title">در تماس باشید</h1>
            <p className="contactus-right__text">
              علی رغم راحتی، هرکسی خرید اینترنتی اقلام و خدمات را انتخاب نمی
              کند. برخی از افراد ایده رفتن فیزیکی به فروشگاه و تجربه مراحل خرید
              را دوست دارند. آنها دوست دارند کالاها را لمس کنند، لباس بپوشند و
              در کنار افراد دیگر باشند. خرید اینترنتی این امکان را به خریداران
              نمی دهد که محصولات را لمس کنند یا تعامل اجتماعی داشته باشند و
              کالاها را در همان روز خریداری کنند.
            </p>
            <p className="contactus-right__text">
              افراد دیگر ممکن است نگران خرید اینترنتی باشند زیرا می ترسند
              اطلاعات کارت اعتباری آنها به خطر بیفتد، از آنجا که ارائه اطلاعات
              کارت اعتباری هنگام خرید محصولات به صورت آنلاین ضروری است، این
              امکان وجود دارد که افراد قربانی سرقت هویت شوند. کالاها را در همان
              روز خریداری کنند.
            </p>
            <ul className="contactus-right__icons">
              <li className="contactus-right__icon">
                <RiInstagramFill />
              </li>
              <li className="contactus-right__icon">
                <FaApple />
              </li>
              <li className="contactus-right__icon">
                <BiLogoTelegram />
              </li>
            </ul>
          </div>
          <div className="contactus-top__left">
            <Form className="form">
              <Row className="form-row">
                <Col>
                  <Form.Label className="form-label" htmlFor="inputEmail">
                    آدرس ایمیل *
                  </Form.Label>
                  <Form.Control id="inputEmail" />
                </Col>
                <Col>
                  <Form.Label className="form-label" htmlFor="inputName">
                    نام و نام خانوادگی *
                  </Form.Label>
                  <Form.Control id="inputName" />
                </Col>
              </Row>
              <Form.Label className="form-label" htmlFor="inputSubject">
                موضوع مرتبط
              </Form.Label>
              <Form.Control id="inputSubject" />
              <Form.Label className="form-label" htmlFor="inputMessage">
                پیام شما
              </Form.Label>
              <Form.Control
                as="textarea"
                id="inputMessage"
                style={{ height: "100px" }}
              />
              <Button className="btn-submit" type="submit">
                ارسال
              </Button>
            </Form>
          </div>
        </div>
        <div className="contactus__info">
          <div className="contactus-sliders">
            <div className="contactus-slider">
              <h2 className="contactus-slider__title">نشانی </h2>
              <p className="contactus-slider__txt">البرز، کرج</p>
            </div>
            <div className="contactus-slider">
              <h2 className="contactus-slider__title">شماره تلفن</h2>
              <p className="contactus-slider__txt">5653427 (0912)</p>
            </div>
            <div className="contactus-slider">
              <h2 className="contactus-slider__title">آدرس ایمیل</h2>
              <p className="contactus-slider__txt">Amoueifateme@gmail.com</p>
            </div>
            <div className="contactus-slider">
              <h2 className="contactus-slider__title">ساعت کاری</h2>
              <p className="contactus-slider__txt">
                شنبه تا چهارشنبه : 9:00- 17:00
              </p>
            </div>
          </div>
        </div>
        <div className="contactus-map">
          <iframe
            className="contact-map__iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621&maptype=roadmap"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}
