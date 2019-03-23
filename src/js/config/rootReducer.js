import { combineReducers } from 'redux';
import home from '../containers/home/reducer';
import products from '../containers/products/reducer';
import  detail from '../containers/productDetail/reducer';

const rootReducer = combineReducers({
  home,
  products,
  detail
});

export default rootReducer;

