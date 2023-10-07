import {
  ADD_TO_DO,
  COLOR,
  COMPLETE,
  COMPLETE_ALL,
  DELETE_ALL_COMPLETED,
  DELETE_TO_DO,
} from "./actionType";
import { initialState } from "./initialState";

const generateId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [
        ...state,
        {
          id: generateId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case DELETE_TO_DO:
      return state.filter((todo) => todo.id !== action.payload);

    case COLOR:
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          if (todo.color === action.payload.color) {
            return {
              ...todo,
              color: "",
            };
          }
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });

    case COMPLETE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case COMPLETE_ALL:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case DELETE_ALL_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
