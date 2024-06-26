import "./App.css";
import Example from "./components/Example";
import UserInfoWIthUseReducer from "./components/UserInfoWIthUseReducer";
import UserInfoWithState from "./components/UserInfoWithState";

function App() {
  return (
    <div>
      {/* <UserInfoWithState /> */}
      <UserInfoWIthUseReducer />
      {/* <Example /> */}
    </div>
  );
}

export default App;
