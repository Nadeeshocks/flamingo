import React from 'react';
import { getProductDetail , getColorPalette } from './actions';
import { connect } from 'react-redux';
import ImgPalette from '../../components/imgPalette/img_palette';
import { Container, Row, Col } from 'reactstrap';
import  ShaveSetDetail from '../../components/shaveSet/shave_set';
import  FaceWaxKitDetail from '../../components/faxWaxKit/face_wax_kit';
import  BodyWaxKitDetail from '../../components/bodyWaxKit/body_wax_kit';
import  FomingShaveGelDetail from '../../components/fomaingShaveGel/foaming_shave_gel';
import  BodyLotionDetail from '../../components/bodyLotion/body_lotion';
import  FlamingoRazorDetail from '../../components/flamingoRazor/flamingo_razor';
import  BladesDetail from '../../components/blades/blades';

class ProductDetail extends React.Component {
    state = {
        color: "taro-rosegold",
        selectedImg: "000"
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        getProductDetail(params.id);
        getColorPalette();
    }
    onImgMouseOverHandle = e => {
        this.setState({
            selectedImg: e.target.dataset.value
        })
    }
    handleColorPaletteClick = e => {
        this.setState({
            color : e.target.dataset.value
        })
    }
    renderImage = () => {
        return this.props.images.map((item, index ) =>{
          return item.type == selectedColor ? <img src={item.url} alt="product image" key={index}/> :""
    
        })       
      }

    renderProductDetail = () => {
        const { match: { params } } = this.props;
        const { product_detail: { title, assets, color_type,colors, desc, price, images } ,color_palette } = this.props;
        const { selectedImg, color } = this.state;
        const img_src = images.find(item => item.type === selectedImg);
        let detail = params.id === "shave-set" ? <ShaveSetDetail 
                                                    assets = { assets } 
                                                    color_type={color_type} 
                                                    palette={color_palette}
                                                    onClickHandle ={this.handleColorPaletteClick}
                                                    selectedColor = {color}
                                                /> :
                        params.id === "face-wax-kit" ? <FaceWaxKitDetail assets = { assets }/>:
                        params.id === "body-wax-kit" ? <BodyWaxKitDetail assets ={ assets} /> :
                        params.id === "foaming-shave-gel" ? <FomingShaveGelDetail assets = { assets } /> :
                        params.id === "body-lotion" ? <BodyLotionDetail assets ={ assets }/> :
                        params.id === "flamingo-razor" ? <FlamingoRazorDetail 
                                                            assets ={ assets } 
                                                            color_type={color_type} 
                                                            palette={color_palette}
                                                            onClickHandle ={this.handleColorPaletteClick} 
                                                            selectedColor = {color}
                                                        /> :
                        params.id === "Blades" ? <BladesDetail assets = { assets }/> : "";

        
        return <div className="item">
            <div className="item-img">
            {
                colors ? renderImage() : <img src={img_src.url} alt={img_src.type} />
            }
                
                <ImgPalette list={images} mouseOver={this.onImgMouseOverHandle} selc={selectedImg} />
            </div>
            <div className="item-detail">
                <Container>
                    <Row>
                        <Col sm="8">
                            <div className="item-detail-title">
                                <h3 className="text-uc-l">{title}</h3>
                                <p className="text-uc-l">{`$ ${price}`}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8">
                            <div className="item-detail-desc">
                                <p className="text-c-14">{desc}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" >
                            <div className="divider" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" >
                        { detail } 
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" >
                            Buttons
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    }

    render() {
        const { loading } = this.props;
        const { match: { params } } = this.props;

        return (
            <div className="product-detail">
                <div className="product-detail-head">
                    {loading ? this.renderProductDetail() : ""}
                </div>
                <div className="product-detail-body">
                    <h2 style={{ margin: '150px' }}>{params.id}</h2>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ detail: { product_detail, loading , color_palette} }) => {
    return {
        product_detail,
        loading,
        color_palette
    }
}

export default connect(mapStateToProps)(ProductDetail);
