import React, { useState } from "react";
import { useSelector } from "react-redux";

import RepoList from "../../components/repo-list";

import "./Home.css";
import { reposSelector } from "../../redux/repos";

export default function Home() {
  const repos = useSelector(reposSelector);

  return (
    <div className="repos-container">
      <RepoList repos={repos} />
    </div>
  );
}
