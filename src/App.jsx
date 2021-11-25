import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import NavBar from "./components/nav-bar";
import Home from "./containers/home";
import { loadRepos, reposSelector } from "./redux/repos";

function App() {
  const dispatch = useDispatch();

  const repos = useSelector(reposSelector);

  useEffect(() => {
    if (repos.length === 0) {
      dispatch(loadRepos());
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h2>Repos</h2>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
