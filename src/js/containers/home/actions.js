import ACTIONS, { API_URL } from '../../config/constants';
import featuredProducts from '../../APIs/featuredProducts';
import store from '../../config/store';

const { dispatch } = store;

const getFeaturedProducts = async () => {
  try{
    const data = await featuredProducts;
    dispatch({
      type: ACTIONS.GET_FEATURED_PRODUCT,
      payload: data
    })
  }
  catch(err){
    console.log(err);
  }  
}

export { getFeaturedProducts }