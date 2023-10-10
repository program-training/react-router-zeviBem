import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersName from "./components/usersName/usersName";
import Home from "./components/myHome/myHome";
import HomeButton from "./components/myHome/buttonHome";
import Title from "./components/Title/title";
import UserById from "./components/userId/userId";
import UserTodo from "./components/todos/todos";
import MoreDetails from "./components/todoDetails/tododetails";
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<HomeButton />} />
            <Route path="/users/title" element={<Title />} />
            <Route path="/users/allUsers" element={<UsersName />} />
            <Route path="users/allUsers/:id" element={<UserById />} />
            <Route path="/users/todo/:id" element={<UserTodo />}/>
            <Route path="/users/user_todo/:id" element={<MoreDetails />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
