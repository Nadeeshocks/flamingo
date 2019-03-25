import React from 'react';
import { getProductDetail } from './actions';
import { connect } from 'react-redux';
import ImgPalette from '../../components/imgPalette/img_palette';

class ProductDetail extends React.Component {
    state = {
        color:"taro-rosegold",
        selectedImg:"000"
      }

    componentDidMount() {
        const { match: { params } } = this.props;
        getProductDetail(params.id);
    }
    onImgMouseOverHandle = e =>{
        this.setState({
            selectedImg : e.target.dataset.value
        })
    }

    renderProductDetail = () => {
        const { product_detail : {title, assets, color_type, colors, desc, price, images} } = this.props;
        const {selectedImg} = this.state;
        const img_src = images.find(item => item.type === selectedImg);
        return <div className="item">            
            <div className="item-img">
                <img src={img_src.url} alt={img_src.type} />
                <ImgPalette list={ images } mouseOver={this.onImgMouseOverHandle} selc={selectedImg}/>
            </div>
            <div className="item-detail">
            </div>

        </div>
    }

    render() {
        const { loading } = this.props;
        const { match: { params } } = this.props;
       
        return (
            <div className="product-detail">
                <div className="product-detail-head">
                    { loading ? this.renderProductDetail() : "" }
                </div>
                <div className="product-detail-body">
                    <h2 style={{ margin: '150px' }}>{params.id}</h2>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ detail :{ product_detail , loading } }) => {
    return {
        product_detail,
        loading
    }
}

export default connect(mapStateToProps)(ProductDetail);
