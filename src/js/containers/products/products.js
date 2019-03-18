import React from 'react';
import { connect } from "react-redux";
import { getProductList } from "./actions";
import { Container, Row } from "reactstrap";
import Product from '../../components/product/product';

class Products extends React.Component{

  componentDidMount(){
    getProductList();
  }

  renderProductList = ()=>{
    const {product_list} = this.props.products;
    const { match } = this.props;
    return (
      <Row>
        { 
          product_list.map((item, index) => {
          return (
            <Product product={item} key={index} url={match.url}/>
          )
        })
        }
      </Row>
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