import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/configStore";
//css
import "./index.css";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//page

import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import HomeTemplates from "./Templates/HomeTemplates/HomeTemplates";

// history

import { createBrowserHistory } from "history";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Profile from "./Pages/Profile/Profile";
import JobList from "./Pages/JobList/JobList";
import TypeJob from "./Pages/TypeJob/TypeJob";


export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          <Route index element={<Home />}></Route>
          <Route path="detail" element={<Detail/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="joblist" element={<JobList/>}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail/>}></Route>
          </Route>
          <Route path="typejob" element={<TypeJob/>}></Route>
        </Route>
        
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
