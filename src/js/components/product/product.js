import React from 'react';
import { Col, Row } from "reactstrap";

const Product = ({ product: { product_title, color_type, colors, price, imgUrl} }) => (  
    <Col sm="4">
      <div className="product-img">
        <img src={imgUrl} alt="product image"/>
      </div>
      <div className="product-detail">
      <h3 className="text-uc-10">{product_title}</h3>
      <span className="">{`$ ${price}`}</span>
      </div>
    </Col>
);

export default Product;