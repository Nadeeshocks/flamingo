import React from 'react';
import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import ColorPalette from '../colorPalette/color_palette';

const Product = ({url , product, selectedColor, colorPalette ,onClickHandle }) =>{  
  const renderImage = () => {
    return product.img.map((item, index ) =>{
      return item.type == selectedColor ? <img src={item.url} alt="product image" key={index}/> :""

    })       
  }
   return  <Col sm="4" className="mb-5 text-center">
      <Link to={`${url}/${product.id}`}>
        <div className="product-img">
          {            
            product.colors ? renderImage() : <img src={product.img[0].url} alt="product image"/>
          }
        </div>
        <div className="product-desc">
        <h3 className="text-uc-14">{product.product_title}</h3>
        <span className="text-c-12">{`$ ${product.price}`}</span>        
        </div>
      </Link>
      {product.colors ? <ColorPalette type={product.color_type } color={colorPalette} click={onClickHandle}/> : ""}
    </Col>
}

export default Product;
