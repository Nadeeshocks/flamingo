import ACTIONS ,{ API_URL} from '../../config/constants';
import store from '../../config/store';
import axios from "axios";

const { dispatch } = store; 

const getProductDetail = async (Id)=>{
    const response = await axios.get( API_URL + Id );
    
    dispatch({
        type : ACTIONS.GET_PRODUCT_DETAIL,
        payload : response.data
    })
    
}

const getColorPalette = async ()=>{
    try{
      let response = await axios.get(API_URL + 'color_scheme');
  
      dispatch({
        type : ACTIONS.GET_COLOR_PALETTE,
        payload :response.data
      })
    }
    catch(err){
      console.log(err);
    }
  }
  

export { getProductDetail ,getColorPalette };