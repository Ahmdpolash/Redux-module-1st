import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  hobbies: [],
};

const reducer = (currentState: any, action: any) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };

    case "addPassword":
      return { ...currentState, password: action.payload };

    case "addHobies":
      return { ...currentState, hobbies: [...currentState.hobbies] };

    default:
      return currentState;
  }
};

const UserInfoWIthUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="flex h-screen justify-center items-center">
      <form className="flex justify-between gap-2 py-16 px-10 border border-violet-500 rounded-md">
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          placeholder="name"
          name="name"
          className="border px-2 py-2 rounded-md border-slate-500"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="text"
          name="email"
          placeholder="email"
          className="border px-2 py-2 rounded-md border-slate-500"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addPassword", payload: e.target.value })
          }
          type="text"
          name="password"
          placeholder="password"
          className="border px-2 py-2 rounded-md border-slate-500"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobies", payload: e.target.value })
          }
          type="text"
          placeholder="Hobbies"
          className="border px-2 py-2 rounded-md border-slate-500"
        />
        <button
          className="p-2 rounded-md bg-violet-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfoWIthUseReducer;
