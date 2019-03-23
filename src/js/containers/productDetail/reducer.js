import ACTIONS from '../../config/constants';
import producer from 'immer';

const initialState = {
  product_detail :{}
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ACTIONS.GET_PRODUCT_DETAIL :
        draft.product_detail = action.payload;
        break;
      
      default:
        break;

    }
  });
}
