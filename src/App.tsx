import "./App.css";
import Example from "./components/Example";
import UserInfoWIthUseReducer from "./components/UserInfoWIthUseReducer";
import UserInfoWithState from "./components/UserInfoWithState";
import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
