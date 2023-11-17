import "./App.css";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ComponentsHeaderHome from "./components/ComponentsHeaderHome";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:6060/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      {/* <ComponentsHeaderHome />
      <main className="pt-2 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main> */}
      <AddProduct />

      {/* <HomePage /> */}
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App;
