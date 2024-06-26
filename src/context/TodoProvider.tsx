import { ReactNode, createContext } from "react";

type TodoProps = {
  children: ReactNode;
};

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: TodoProps) => {
  const values = {
    todoTitle: "this is todo title",
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
