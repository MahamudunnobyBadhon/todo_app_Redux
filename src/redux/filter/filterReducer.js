import { COLOR_FILTER, STATUS_FILTER } from "./actionType";

const initialState = {
  status: "All",
  colors: [],
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_FILTER: {
      return {
        ...state,
        status: action.payload,
      };
    }

    case COLOR_FILTER: {
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "add": {
          return {
            ...state,
            colors: [...state.colors, color],
          };
        }
        case "delete": {
          return {
            ...state,
            colors: state.colors.filter((item) => item !== color),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default filterReducer;
