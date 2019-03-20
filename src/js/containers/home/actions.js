import ACTIONS, { API_URL } from '../../config/constants';
import store from '../../config/store';
import axios from "axios";

const { dispatch } = store;

const getFeaturedProducts = async () => {
  try{
    let response = await axios.get(API_URL + 'featured_Products')
    
    dispatch({
      type: ACTIONS.GET_FEATURED_PRODUCT,
      payload: response.data
    })
  }
  catch(err){
    console.log(err);
  }  
}

export { getFeaturedProducts }