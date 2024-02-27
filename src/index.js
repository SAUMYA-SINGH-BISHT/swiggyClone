import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
