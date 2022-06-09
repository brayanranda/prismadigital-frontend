import * as React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import List from "./components/List/List";

export default function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/list" component={List} />
      <Route path="/login" component={Login} />
    </div>
  );
}
