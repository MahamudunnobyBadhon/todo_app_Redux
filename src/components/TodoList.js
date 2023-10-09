import { useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";

export default function TodoList() {
  const allTodos = useSelector((state) => state.todo);
  const { status, colors } = useSelector((state) => state.filter);
  console.log({ allTodos });

  console.log({ status });
  console.log({ colors });

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {allTodos
        ?.filter((todo) => {
          if (status === "All") {
            return true;
          }
          if (status === "Incomplete") {
            return todo.completed === false;
          }
          if (status === "Complete") {
            return todo.completed === true;
          }
          return false;
        })
        .filter((todo) => {
          if (colors.length === 0) {
            return true;
          }
          return colors.includes(todo.color);
        })
        .map((d, i) => {
          return <Todo key={d.id} d={d}></Todo>;
        })}
    </div>
  );
}
