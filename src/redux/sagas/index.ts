import { fork, all } from "redux-saga/effects";
import homeSaga from "./home_saga";

export default function* mySaga() {
  yield all([fork(homeSaga)]);
}
