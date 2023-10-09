import { COLOR_FILTER, STATUS_FILTER } from "./actionType";

export const taskFilter = (status) => {
  return {
    type: STATUS_FILTER,
    payload: status,
  };
};

export const colorFilter = (color, changeType) => {
  return {
    type: COLOR_FILTER,
    payload: {
      color,
      changeType,
    },
  };
};
