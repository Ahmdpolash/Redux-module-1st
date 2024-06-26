import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch }: any = useContext(TodoContext);

  
  const [task, setTask] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="mx-auto text-center">
      <h1 className="pb-2 font-semibold text-violet-500 text-xl">Add Todo</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-start" htmlFor="Todo">
            Write Your Task Here
          </label>
          <div className="flex gap-2 justify-center">
            <input
              onBlur={(e) => setTask(e.target.value)}
              className="border w-full border-violet-400 p-2 rounded-md"
              type="text"
              name="Todo"
              placeholder="Write the task"
              id="todo"
            />
            <button className="btn btn-primary px-7 bg-violet-500 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
