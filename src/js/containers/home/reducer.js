import ACTIONS from '../../config/constants';
import producer from 'immer';

const initialState = {
    featured: []
};

const home = (state = initialState, action) => {
    return producer(state, draft => {
        switch (action.type) {
            case ACTIONS.GET_FEATURED_PRODUCT:
                draft.featured = action.payload;
                break; 
            default:
                break;

        }
    });
}

export default home;
