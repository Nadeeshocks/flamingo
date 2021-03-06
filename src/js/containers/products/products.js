import React from 'react';
import { connect } from "react-redux";
import { getProductList , getColorPalette } from "./actions";
import { Container, Row } from "reactstrap";
import Product from '../../components/product/product';

class Products extends React.Component{
  state = {
    color:"taro-rosegold"
  }

  componentDidMount(){
    getProductList();
    getColorPalette();
  }

  handleColorPaletteClick = e => {
    this.setState({
      color : e.target.dataset.value
    })
  }

  renderProductList = ()=>{
    const {product_list , color_palette, loading} = this.props.products;
    const { match } = this.props;
    return (
      loading ? <Row>
        { 
          product_list.map((item, index) => {
          return (
            <Product 
              product={item} 
              key={index} 
              url={match.url} 
              colorPalette={color_palette}
              onClickHandle = {this.handleColorPaletteClick}
              selectedColor = {this.state.color}
              />
          )
        })
        }
      </Row> : ""
    )
  }
  render(){
    return(
      <div className="products">
        <div className="products-head">
        </div>
        <div className="products-body">  
          <Container fluid>
            {this.renderProductList()}
          </Container>       
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return {
    products
  }
}
export default connect(mapStateToProps)(Products);