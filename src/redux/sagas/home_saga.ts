import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import {
  ICreateWork,
  IDataCreate,
  IDataDelete,
  IDeleteWork,
  IEditWork,
  ITodo,
} from "../../interface";
import {
  createWorkFail,
  createWorkSuccess,
  deleteWorkFail,
  deleteWorkSuccess,
  editWorkFail,
  editWorkSuccess,
  getListWorkFail,
  getListWorkSuccess,
} from "../actions";
import {
  CREATE_WORK,
  DELETE_WORK,
  EDIT_WORK,
  GET_LIST_WORK,
} from "./../constants";

const url = "http://localhost:3002";

function* createWorkSaga(action: ICreateWork) {
  try {
    const response: AxiosResponse = yield axios.post<IDataCreate>(
      `${url}/data`,
      {
        ...action.payload,
      }
    );

    yield put(
      createWorkSuccess({
        dataCreate: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      createWorkFail({
        error: e.message,
      })
    );
  }
}

function* getListWorkSaga() {
  try {
    const response: AxiosResponse = yield axios.get<ITodo>(`${url}/data`);

    yield put(
      getListWorkSuccess({
        listWork: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      getListWorkFail({
        error: e.message,
      })
    );
  }
}

function* deleteWorkSaga(action: IDeleteWork) {
  const { id } = action.payload;
  try {
    const response: AxiosResponse = yield axios.delete<IDataDelete>(
      `${url}/data/${id}`
    );

    yield put(
      deleteWorkSuccess({
        dataDelete: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      deleteWorkFail({
        error: e.message,
      })
    );
  }
}

function* editWorkSaga(action: IEditWork) {
  const { id, work } = action.payload;
  try {
    const response: AxiosResponse = yield axios.put<ITodo>(
      `${url}/data/${id}`,
      {
        work,
      }
    );

    yield put(
      editWorkSuccess({
        dataEdit: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      editWorkFail({
        error: e.message,
      })
    );
  }
}

export default function* dataSaga() {
  yield all([takeLatest(CREATE_WORK, createWorkSaga)]);
  yield all([takeLatest(GET_LIST_WORK, getListWorkSaga)]);
  yield all([takeLatest(DELETE_WORK, deleteWorkSaga)]);
  yield all([takeLatest(EDIT_WORK, editWorkSaga)]);
}
