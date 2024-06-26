import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

type TItem = {
  title: string;
  id: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const { state, dispatch }: any = useContext(TodoContext);
  console.log(state);
  return (
    <div>
      <h1 className="my-2 text-center text-xl">Here Is Your Task Lists : </h1>
      {state?.map((item: TItem, id: number) => (
        <div key={id}>
          <ul className="list-disc cursor-pointer flex justify-between items-center">
            <li
              className={`${item.isCompleted ? "line-through" : ""}`}
              onClick={() =>
                dispatch({ type: "taskComplete", payload: item.id })
              }
            >
              {item.title}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
