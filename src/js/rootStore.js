import {createStore} from "redux";
import rootReducer from "./rootReducer";


const rootStore = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
);

export default rootStore;