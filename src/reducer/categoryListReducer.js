import initialState from "./initialState";
import types from "../constants/reducers/categoryListConstant";

const categoryListReducer = (state = initialState.categoryList, action) => {
    switch(action.type) {
        case types.CATEGORYLIST:
            return {...initialState.categoryList, ...action.categoryList};
        case types.CATEGORYLIST_FETCHING:
            return {...initialState.categoryList, ...action.categoryList};
        case types.CATEGORYLIST_ERROR:
            return {...initialState.categoryList, ...action.categoryList};
        default:
            return state;
    }
}
export default categoryListReducer;