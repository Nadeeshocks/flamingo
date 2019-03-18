import React from 'react';
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Product = ({url , product: { id, product_title, color_type, colors, price, imgUrl} }) => (  
    <Col sm="4">
      <Link to={`${url}/${id}`}>
        <div className="product-img">
          <img src={imgUrl} alt="product image"/>
        </div>
        <div className="product-detail">
        <h3 className="text-uc-10">{product_title}</h3>
        <span className="">{`$ ${price}`}</span>
        </div>
      </Link>
    </Col>
);

export default Product;