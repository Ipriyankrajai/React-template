import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counter-slice";


const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
