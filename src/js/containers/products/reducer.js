import ACTIONS from '../../config/constants';
import producer from 'immer';

const initialState = {
  product_list: [],
  color_palette:[]
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCTS_LIST:
        draft.product_list = action.payload;
        break;
      case ACTIONS.GET_COLOR_PALETTE:
        draft.color_palette = action.payload;
      default:
        break;

    }
  });
}