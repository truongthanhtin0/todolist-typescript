import { ITodoState, TodoAction } from "../../interface";
import {
  CREATE_WORK_FAIL,
  CREATE_WORK_SUCCESS,
  DELETE_WORK_FAIL,
  DELETE_WORK_SUCCESS,
  EDIT_WORK_FAIL,
  EDIT_WORK_SUCCESS,
  GET_LIST_WORK_FAIL,
  GET_LIST_WORK_SUCCESS,
} from "./../constants";

const initialState: ITodoState = {
  dataCreate: {},
  listWork: [],
  dataDelete: {},
  dataEdit: {},
};

export default function homeReducer(state = initialState, action: TodoAction) {
  switch (action.type) {
    case CREATE_WORK_SUCCESS: {
      return {
        ...state,
        dataCreate: action.payload.dataCreate,
      };
    }
    case CREATE_WORK_FAIL: {
      return state;
    }
    case GET_LIST_WORK_SUCCESS: {
      return {
        ...state,
        listWork: action.payload.listWork,
      };
    }
    case GET_LIST_WORK_FAIL: {
      return state;
    }
    case DELETE_WORK_SUCCESS: {
      return {
        ...state,
        dataDelete: action.payload.dataDelete,
      };
    }
    case DELETE_WORK_FAIL: {
      return state;
    }
    case EDIT_WORK_SUCCESS: {
      return {
        ...state,
        dataEdit: action.payload.dataEdit,
      };
    }
    case EDIT_WORK_FAIL: {
      return state;
    }
    default:
      return state;
  }
}
