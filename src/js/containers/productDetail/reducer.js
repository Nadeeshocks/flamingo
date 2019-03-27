import ACTIONS from '../../config/constants';
import producer from 'immer';

const initialState = {
  product_detail :{},
  loading :false,
  color_palette:[]
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCT_DETAIL :
        draft.product_detail = action.payload;
        draft.loading = true;
        break;
      case ACTIONS.GET_COLOR_PALETTE:
        draft.color_palette = action.payload;
      default:
        break;

    }
  });
}
