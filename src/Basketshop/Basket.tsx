import React, { useEffect, useState } from "react";
import "./Basket.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProductbasketType } from "./Basket.type";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const navigate = useNavigate();
  const [basketItems, setBasketItems] = useState<ProductbasketType[]>([]);

  useEffect(() => {
    const products = localStorage.getItem("selectedProducts");
    if (products) {
      setBasketItems(JSON.parse(products));
    }
  }, []);

  const removeAllProduct = () => {
    setBasketItems([]);
  };

  const removeProduct = (id: number) => {
    const currentBasket: ProductbasketType[] = JSON.parse(
      localStorage.getItem("selectedProducts") || "[]"
    );

    const updatedBasket = currentBasket
      .map((product: ProductbasketType) => {
        if (product.id === id) {
          if (product.count && product.count > 1) {
            return { ...product, count: product.count - 1 };
          } else {
            return null;
          }
        }
        return product;
      })
      .filter((product): product is ProductbasketType => product !== null);

    localStorage.setItem("selectedProducts", JSON.stringify(updatedBasket));
    setBasketItems(updatedBasket);
  };

  return (
    <div className="basket-container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">خانه / </Breadcrumb.Item>
        <Breadcrumb.Item active>سبدخرید</Breadcrumb.Item>
      </Breadcrumb>
      <div className="basket-title">سبدخرید</div>
      {basketItems.length > 0 ? (
        <div className="basket-product">
          {basketItems.map((item, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.btn}</Card.Title>
                <div className="basket-product__body">
                  {" "}
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>{item.count}</Card.Text>
                </div>
                <Button
                  variant="primary"
                  onClick={() => removeProduct(item.id)}
                >
                  حذف{" "}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div className="emptybasket-container">
          <p className="basket-text">سبدخرید شما خالی است</p>
          <Button
            variant="primary"
            className="emptybasket-btn"
            onClick={() => navigate("/shop")}
          >
            بازگشت به فروشگاه
          </Button>
        </div>
      )}
      <Button
        variant="primary"
        className="basket-btn"
        onClick={() => {
          localStorage.removeItem("selectedProducts");
          setBasketItems([]);
          removeAllProduct();
        }}
      >
        خالی کردن سبد خرید
      </Button>
    </div>
  );
}
