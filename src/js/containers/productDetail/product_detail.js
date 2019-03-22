import React from 'react';
import { getProductDetail } from './actions';
import { connect } from 'react-redux';

class ProductDetail extends React.Component{

    componentDidMount(){
        const { match :{ params} } = this.props;
        getProductDetail(params.id);
    }
    
    render(){
        
        return (
            <h2 style={{margin : '140px 0',textAlign :'center'}}>{params.id}</h2>
        )
    }
} 

export default connect()(ProductDetail);