import React from "react";
import "./Header.css";
import "../../css/reset.css";
import "../../css/style-1.css";
import Button from "react-bootstrap/Button";
import Circle from "../Circle/Circle";

export default function Header() {
  return (
    <div className="header-container">
      <section className="header">
        <div className="header-background">
          <img src="../../img/header-background.png" alt="header-background" />
          <div className="circle-background">
            <Circle
              width="80px"
              height="80px"
              top="15%"
              left="30%"
              color="#ffd62c"
              opacity={0.7}
              zIndex={10}
            />
            <Circle
              width="33rem"
              height="33rem"
              top="22%"
              left="8%"
              color="#ffd62c"
              opacity={0.6}
              zIndex={1}
            />
            <Circle
              width="70px"
              height="70px"
              top="70%"
              left="5%"
              color="#ffd62c"
              opacity={1}
              zIndex={10}
            />
            <Circle
              width="60px"
              height="60px"
              top="25%"
              left="6%"
              color="#000"
              opacity={1}
              border="2px solid #ffd62c"
              zIndex={1}
            />
          </div>
        </div>
        <div className="header-right">
          <p className="header-subtitle">محصولات داغ و تازه</p>
          <h2 className="header-title">حـــراج ویـژه جمعــه‌ی سیاه</h2>
          <Button variant="warning" className="header-btn ms-auto">
            به فروشگاه سر بزنید
          </Button>
        </div>
      </section>
    </div>
  );
}
