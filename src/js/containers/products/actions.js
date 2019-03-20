import ACTIONS, { API_URL } from '../../config/constants';
import store from '../../config/store';
import axios from "axios";

const { dispatch } = store;

const getProductList = async ()=>{
  try{
    let response = await axios.get(API_URL + 'products')
    
    dispatch({
      type: ACTIONS.GET_PRODUCTS_LIST,
      payload: response.data
    })

  }
  catch(err){
    console.log(err);
  }

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

export { getProductList, getColorPalette };