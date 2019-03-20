import React from 'react';
import { Link } from 'react-router-dom';

const ShowCase = props => (
  <div className="showcase">
    <div className="showcase-wrapper">
      <div className="showcase-head">
        <h1 className="main-heading">Body care for women with hair</h1>
      </div>
      <div className="show-body">
        <Link  to="/products">
          <button className="f-btn f-filled-btn">SHOP OUR PRODUCTS</button>        
        </Link>
      </div>
    </div>
    <div className="showcase-img-wrapper">
    </div>
  </div>
)

export default ShowCase;