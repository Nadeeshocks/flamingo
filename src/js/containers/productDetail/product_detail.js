import React from 'react';
import { getProductDetail } from './actions';
import { connect } from 'react-redux';

class ProductDetail extends React.Component{

    componentDidMount(){
        const { match :{ params} } = this.props;
        getProductDetail(params.id);
    }
    
    render(){
        const { detail } = this.props;
        const { match :{ params} } = this.props;
        return (
            <div className="product-detail">
                <div className="product-detail-head">
                    <div className="product-img">
                    </div>
                    <div className="product-items-detail">

                    </div>

                </div>
                <div className="product-detail-body">
                    <h2 style={{margin:'150px'}}>{params.id}</h2>
                </div>
            </div>
        )
    }
} 
const mapStateToProps = ({detail})=>{
    return{
        detail
    }
}

export default connect(mapStateToProps)(ProductDetail);
