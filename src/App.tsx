import React, { ReactElement } from "react";
import "./App.css";
import ClassCounter from "./components/class-counter/class-couter";
import ClassSearch from "./components/class-search/class-seach";
import FuncCounter from "./components/functional-counter/func-couter";
import FuncSearch from "./components/functional-search/func-search";
import FuncToggler from "./components/functional-toggler/functional-toggler";
import PureCounter from "./components/pure-counter/pure-counter";

function App(): ReactElement<Record<string, unknown>, string> {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <header className="App-header">
        <ClassCounter />
        <FuncCounter />
        <PureCounter />
        <ClassSearch />
        <FuncSearch />
        <FuncToggler />
      </header>
    </div>
  );
}

export default App;
