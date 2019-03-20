import React, { Component } from 'react';
import { connect } from "react-redux";
import ShowCase from "../../components/showcase/showcase";
import { getFeaturedProducts } from "./actions";
import { Container } from "reactstrap";
import FeaturedProduct from '../../components/featuredProduct/featuredProduct';
import { Link } from 'react-router-dom';

class Home extends Component {

  componentDidMount(){
    getFeaturedProducts();
  }
  renderFeaturedProduct = ()=>{
    const { featured } = this.props.home;

    return featured.map((item , index)=>{
        return (
          <FeaturedProduct item ={item} key={index} /> 
        )
    })
  }
  render() {
    return (
      <div className="home">
        <div className="home-head">
          <ShowCase />
        </div>
        <div className="home-body">
          <div className="about-flamingo">
            <p>
              We started Flamingo because we thought it was time we got some honestly good products to deal with our armpits, mustaches, toes, and every hair in between.
            </p>
          </div>
  
          <div className="featured-products">
              <h6 className="title">GET TO KNOW OUR PRODUCTS</h6>
              <Container>
                  {this.renderFeaturedProduct()}
              </Container>
          </div>

          <div className="product-shop">
            <Link  to="/products">          
              <button className="f-btn f-border-btn">Shop our Products</button>
            </Link>
          </div>

          <div className="wax-guide">
            <div className="wax-guide-img">
              <img src="/public/assets/images/products/ExitRamp-WaxGuide.jpg" alt=""/>
            </div>
            <div className="wax-guide-detail">
              <div className="cards-detail">
                <h3 className="text-uc-l">WANT TO LEARN MORE ABOUT WAXING?</h3>
                <p className="text-c-14">If you’re looking for tips, facts, and a stellar how-to, we’ve got you covered.</p>
                <p className="text-uc-10 shop">wax guide <i className="fas fa-arrow-right"></i></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({home}) =>{
  return{
    home
  }
}
export default connect(mapStateToProps)(Home);
