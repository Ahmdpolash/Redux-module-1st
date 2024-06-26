import React, { useState } from "react";

const UserInfoWithState = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(userInfo);

  return (
    <div className="p-10 ">
      <form className="flex justify-between p-5 border border-red-400">
        <input
          type="text"
          placeholder="name"
          className="border px-2 py-2 rounded-md border-slate-500"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          className="border px-2 py-2 rounded-md border-slate-500"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={userInfo.password}
          className="border px-2 py-2 rounded-md border-slate-500"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
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

export default UserInfoWithState;
