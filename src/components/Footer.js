import { useDispatch, useSelector } from "react-redux";
import { colorFilter, taskFilter } from "../redux/filter/action";

const getCompletedTask = (todos) => {
  const length = todos.filter((todo) => !todo.completed).length ;
  console.log({ length });
  switch (length) {
    case 0: {
      return "No task left";
    }

    case 1: {
      return "1 task";
    }

    default:
      return `${length} tasks`;
  }
};

export default function Footer() {
  const { status, colors } = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleStatusChange = (text) => {
    dispatch(taskFilter(text));
  };

  console.log({ colors });
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorFilter(color, "delete"));
    } else {
      dispatch(colorFilter(color, "add"));
    }
  };

  
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{getCompletedTask(todos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
