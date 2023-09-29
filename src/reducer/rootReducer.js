import {combineReducers} from "redux";
import locale from "./localeReducer";
import locales from "./localesReducer";
import auth from "./authReducer";
import destinationList from "./destinationListReducer";
import categoryList from "./categoryListReducer";
const rootReducer = combineReducers({
    locale,
    locales,
    auth,
    destinationList,
    categoryList
})

export default rootReducer;