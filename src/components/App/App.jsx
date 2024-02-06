import { Outlet } from "react-router";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userAPI } from "API/note-api";
import { setUserList } from "store/user/user-slice";
import { useEffect } from "react";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllUsers() {
    const userList = await userAPI.fetchAll();
    dispatch(setUserList(userList));
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const datas = useSelector((store) => store.USER.userList);

  return (
    <div className="">
      <Outlet />

      {datas.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
