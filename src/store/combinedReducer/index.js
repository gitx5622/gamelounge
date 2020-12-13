import { combineReducers } from "redux"
import authReducer from "../auth/reducers/authReducer";
import orderReducer from "../order/reducers/orderReducer";
import walletReducer from "../wallet/reducers/walletReducer";

const reducer = combineReducers({
    Auth: authReducer,
    Order: orderReducer,
    Wallet: walletReducer,
});

export default reducer
