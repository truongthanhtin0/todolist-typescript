import {
  CREATE_WORK,
  CREATE_WORK_SUCCESS,
  CREATE_WORK_FAIL,
  GET_LIST_WORK,
  GET_LIST_WORK_SUCCESS,
  GET_LIST_WORK_FAIL,
  DELETE_WORK,
  DELETE_WORK_SUCCESS,
  DELETE_WORK_FAIL,
  EDIT_WORK,
  EDIT_WORK_SUCCESS,
  EDIT_WORK_FAIL,
} from "./../redux/constants";

export interface ITodo {
  id: number;
  work: string;
}

export interface ITodoState {
  dataCreate: {};
  listWork: ITodo[];
  dataDelete: {};
  dataEdit: {};
}

//Interface error chung
export interface IFailPayload {
  error: string;
}

//Create work
export interface IDataCreate {
  work: string;
}

export interface ICreateWorkPayload {
  dataCreate: IDataCreate;
}

export interface ICreateWork {
  type: typeof CREATE_WORK;
  payload: IDataCreate;
}

export type CreateWorkSuccess = {
  type: typeof CREATE_WORK_SUCCESS;
  payload: ICreateWorkPayload;
};

export type CreateWorkFail = {
  type: typeof CREATE_WORK_FAIL;
  payload: IFailPayload;
};

//Get list work
export interface IGetListWorkPayload {
  listWork: ITodo[];
}

export interface IGetListWork {
  type: typeof GET_LIST_WORK;
}

export type GetListWorkSuccess = {
  type: typeof GET_LIST_WORK_SUCCESS;
  payload: IGetListWorkPayload;
};

export type GetListWorkFail = {
  type: typeof GET_LIST_WORK_FAIL;
  payload: IFailPayload;
};

//Delete work
export interface IDataDelete {
  id: number;
}

export interface IDeleteWorkPayload {
  dataDelete: IDataDelete;
}

export interface IDeleteWork {
  type: typeof DELETE_WORK;
  payload: IDataDelete;
}

export type DeleteWorkSuccess = {
  type: typeof DELETE_WORK_SUCCESS;
  payload: IDeleteWorkPayload;
};

export type DeleteWorkFail = {
  type: typeof DELETE_WORK_FAIL;
  payload: IFailPayload;
};

//Edit work
export interface IEditWorkPayload {
  dataEdit: ITodo;
}

export interface IEditWork {
  type: typeof EDIT_WORK;
  payload: ITodo;
}

export type EditWorkSuccess = {
  type: typeof EDIT_WORK_SUCCESS;
  payload: IEditWorkPayload;
};

export type EditWorkFail = {
  type: typeof EDIT_WORK_FAIL;
  payload: IFailPayload;
};

export type TodoAction =
  | ICreateWork
  | CreateWorkSuccess
  | CreateWorkFail
  | IGetListWork
  | GetListWorkSuccess
  | GetListWorkFail
  | IDeleteWork
  | DeleteWorkSuccess
  | DeleteWorkFail
  | IEditWork
  | EditWorkSuccess
  | EditWorkFail;
