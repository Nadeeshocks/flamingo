import React from 'react';

class ProductDetail extends React.Component{
    
    render(){
        const { match :{ params} } = this.props;
        return (
            <h2 style={{margin : '140px 0',textAlign :'center'}}>{params.id}</h2>
        )
    }
} 

export default ProductDetail;