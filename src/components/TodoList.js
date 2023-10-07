import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const allTodos = useSelector((state) => state.todo);
  console.log({ allTodos });
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {allTodos?.map((d, i) => {
        return <Todo key={d.id} d={d}></Todo>;
      })}
    </div>
  );
}
