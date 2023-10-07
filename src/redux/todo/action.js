import {
  ADD_TO_DO,
  COLOR,
  COMPLETE,
  COMPLETE_ALL,
  DELETE_ALL_COMPLETED,
  DELETE_TO_DO,
} from "./actionType";

export const addToDo = (text) => {
  return {
    type: ADD_TO_DO,
    payload: text,
  };
};

export const deleteToDo = (todoId) => {
  return {
    type: DELETE_TO_DO,
    payload: todoId,
  };
};

export const colorChange = (todoId, color) => {
  return {
    type: COLOR,
    payload: {
      id: todoId,
      color: color,
    },
  };
};

export const completeATask = (todoId) => {
  return {
    type: COMPLETE,
    payload: todoId,
  };
};

export const completeAllTask = () => {
  return {
    type: COMPLETE_ALL,
  };
};

export const clearAllCompleted = () => {
  return {
    type: DELETE_ALL_COMPLETED,
  };
};
