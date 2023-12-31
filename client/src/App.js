import "./App.css";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ComponentsHeaderHome from "./components/ComponentsHeaderHome";
import HomePage from "./pages/Detail";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <ComponentsHeaderHome />
      <main className="pt-2 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>

      {/* <HomePage /> */}
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App;
