import ACTIONS ,{ API_URL} from '../../config/constants';
import store from '../../config/store';
import axios from "axios";

const { dispatch } = store; 

const getProductDetail = async (Id)=>{
    const response = await axios.get( API_URL + Id );
}

export { getProductDetail };