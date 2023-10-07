import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { addToDo, clearAllCompleted, completeAllTask,} from "../redux/todo/action";
import { useState } from "react";

export default function Header() {

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) =>{
    e.preventDefault();
    dispatch(addToDo(text))
    setText("")
  }

  const handleCompleteAllTasks = () =>{
    dispatch(completeAllTask())
  }

  const handleClearAllCompleted = () =>{
    dispatch(clearAllCompleted())
  }
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={(e)=>handleAddTodo(e)}>
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
        onChange={(e)=>setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAllTasks}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={()=>{
          handleClearAllCompleted()
        }} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
