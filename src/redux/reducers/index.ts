import { combineReducers } from "redux";
import homeReducer from "./home_reducer";

const rootReducer = combineReducers({
  homeReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
