import { Outlet } from "react-router";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
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

  return (
    <div className="">
      <Outlet />
    </div>
  );
}
