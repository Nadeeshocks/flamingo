import { combineReducers } from 'redux';
import home from '../containers/home/reducer';
import products from '../containers/products/reducer';

const rootReducer = combineReducers({
  home,
  products
});

export default rootReducer;

