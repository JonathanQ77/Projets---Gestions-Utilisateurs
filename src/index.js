import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "pages/UserPage/UserPage";
import { AllUsersPages } from "./pages/AllUsersPages/AllUsersPages";
import { UserCreate } from "./pages/UserCreate/UserCreate";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<AllUsersPages />} />
          <Route path="/user/user:id" element={<UserPage />} />
          <Route path="/user/new" element={<UserCreate />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
