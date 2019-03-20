import React from 'react';
import { Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';

const FeaturedProduct = ({item}) => (
  <Row className="cards">
    <Col>
      <Link to ={`/products/${item.id}`}>
        <div className="featured cards-img">
          <img src={item.img_url} alt="" />
        </div>
        <div className="cards-detail">
          <h3 className="text-uc-l">{item.title}</h3>
          <span className="price label">{`$ ${item.price}`}</span>
          <p className="text-c-14">{item.desc}</p>
          <p className="text-uc-10 shop">Shop this set <i className="fas fa-arrow-right"></i></p>
        </div>
      </Link>
    </Col>
  </Row>
);

export default FeaturedProduct;