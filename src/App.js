import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* AppBody */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Feed */}
      {/* Widget */}
    </div>
  );
}

export default App;
