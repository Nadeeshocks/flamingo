import ACTIONS from '../../config/constants';
import producer from 'immer';

const initialState = {
  product_list: []
};

const products = (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS_LIST:
        draft.product_list = action.payload;
        break;
      default:
        break;

    }
  });
}

export default products;
