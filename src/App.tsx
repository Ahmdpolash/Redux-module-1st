import "./App.css";
import Example from "./components/Example";
import UserInfoWIthUseReducer from "./components/UserInfoWIthUseReducer";
import UserInfoWithState from "./components/UserInfoWithState";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="max-w-3xl mx-auto py-10">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
