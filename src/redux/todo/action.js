import {
  ADD_TODO,
  COLOR,
  COMPLETE,
  COMPLETE_ALL,
  DELETE_ALL,
  DELETE_TODO,
} from "./actionType";

export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const deleteToDo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const color = (todoId, color) => {
  return {
    type: COLOR,
    payload: {
      id: todoId,
      color: color,
    },
  };
};

export const completed = (todoId) => {
  return {
    type: COMPLETE,
    payload: todoId,
  };
};

export const completedAll = () => {
  return {
    type: COMPLETE_ALL,
  };
};

export const clearAll = () => {
  return {
    type: DELETE_ALL,
  };
};
