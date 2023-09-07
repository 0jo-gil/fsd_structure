import FormSlice from "@store/features/FormSlice.ts";
import {combineReducers} from "redux";

const RootReducer = combineReducers({
    form: FormSlice,
});

export default RootReducer;
