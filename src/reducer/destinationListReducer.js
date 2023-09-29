import initialState from "./initialState";
import types from "../constants/reducers/destinationListConstant";

const destinationListReducer = (state = initialState.destinationList, action) => {
    switch(action.type) {
        case types.DESTINATIONLIST:
            return {...initialState.destinationList, ...action.destinationList};
        case types.DESTINATIONLIST_FETCHING:
            return {...initialState.destinationList, ...action.destinationList};
        case types.DESTINATIONLIST_ERROR:
            return {...initialState.destinationList, ...action.destinationList};
        default:
            return state;
    }
}
export default destinationListReducer;