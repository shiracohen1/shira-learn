import logo from './logo.svg';
import './App.css';
import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}
