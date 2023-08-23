import locale from "./localeReducer";
import locales from "./localesReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    locale,
    locales
})

export default rootReducer;