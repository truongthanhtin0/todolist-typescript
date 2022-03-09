import {
  CreateWorkFail,
  CreateWorkSuccess,
  DeleteWorkFail,
  DeleteWorkSuccess,
  EditWorkFail,
  EditWorkSuccess,
  GetListWorkFail,
  GetListWorkSuccess,
  ICreateWork,
  ICreateWorkPayload,
  IDataCreate,
  IDataDelete,
  IDeleteWork,
  IDeleteWorkPayload,
  IEditWork,
  IEditWorkPayload,
  IFailPayload,
  IGetListWork,
  IGetListWorkPayload,
  ITodo,
} from "../../interface";
import {
  CREATE_WORK,
  CREATE_WORK_FAIL,
  CREATE_WORK_SUCCESS,
  DELETE_WORK,
  DELETE_WORK_FAIL,
  DELETE_WORK_SUCCESS,
  EDIT_WORK,
  EDIT_WORK_FAIL,
  EDIT_WORK_SUCCESS,
  GET_LIST_WORK,
  GET_LIST_WORK_FAIL,
  GET_LIST_WORK_SUCCESS,
} from "./../constants";

//
export const createWork = (payload: IDataCreate): ICreateWork => ({
  type: CREATE_WORK,
  payload,
});

export const createWorkSuccess = (
  payload: ICreateWorkPayload
): CreateWorkSuccess => ({
  type: CREATE_WORK_SUCCESS,
  payload,
});

export const createWorkFail = (payload: IFailPayload): CreateWorkFail => ({
  type: CREATE_WORK_FAIL,
  payload,
});

//
export const getListWork = (): IGetListWork => ({
  type: GET_LIST_WORK,
});

export const getListWorkSuccess = (
  payload: IGetListWorkPayload
): GetListWorkSuccess => ({
  type: GET_LIST_WORK_SUCCESS,
  payload,
});

export const getListWorkFail = (payload: IFailPayload): GetListWorkFail => ({
  type: GET_LIST_WORK_FAIL,
  payload,
});

//
export const deleteWork = (payload: IDataDelete): IDeleteWork => ({
  type: DELETE_WORK,
  payload,
});

export const deleteWorkSuccess = (
  payload: IDeleteWorkPayload
): DeleteWorkSuccess => ({
  type: DELETE_WORK_SUCCESS,
  payload,
});

export const deleteWorkFail = (payload: IFailPayload): DeleteWorkFail => ({
  type: DELETE_WORK_FAIL,
  payload,
});

//
export const editWork = (payload: ITodo): IEditWork => ({
  type: EDIT_WORK,
  payload,
});

export const editWorkSuccess = (
  payload: IEditWorkPayload
): EditWorkSuccess => ({
  type: EDIT_WORK_SUCCESS,
  payload,
});

export const editWorkFail = (payload: IFailPayload): EditWorkFail => ({
  type: EDIT_WORK_FAIL,
  payload,
});
