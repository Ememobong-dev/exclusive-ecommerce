import { Col, Row } from "antd";
import React from "react";
import deliveryIcon from "../../public/assets/icons/deliveryIcon.svg";
import musicIcon from "../../public/assets/icons/musicIcon.svg";
import secureIcon from "../../public/assets/icons/secureIcon.svg";
import ServiceItem from "./ServiceItem";

const ServicesContent = () => {
  return (
    <Row>
      <Col xs={22} md={8}>
        <ServiceItem
          imgSrc={deliveryIcon}
          text="Free delivery for all orders over $140"
          topHeader="FREE AND FAST DELIVERY"
        />
      </Col>
      <Col xs={22} md={8}>
        <ServiceItem
          imgSrc={musicIcon}
          text="Free delivery for all orders over $140"
          topHeader="FREE AND FAST DELIVERY"
        />
      </Col>
      <Col xs={22} md={8}>
        <ServiceItem
          imgSrc={secureIcon}
          text="Free delivery for all orders over $140"
          topHeader="FREE AND FAST DELIVERY"
        />
      </Col>
    </Row>
  );
};

export default ServicesContent;
