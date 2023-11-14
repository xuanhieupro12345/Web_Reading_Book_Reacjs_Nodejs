import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewBook from "./pages/NewBook";
import Rankings from "./pages/Rankings";
import HotFree from "./pages/HotFree";
import Compilation from "./pages/Compilation";
import RecommendedReading from "./pages/RecommendedReading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="newbook" element={<NewBook />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="hotfree" element={<HotFree />} />
        <Route path="compilation" element={<Compilation />} />
        <Route path="recommendedreading" element={<RecommendedReading />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
