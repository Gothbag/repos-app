import React, { useState } from "react";
import { useSelector } from "react-redux";

import RepoList from "../../components/repo-list";

import "./Home.css";
import { reposSelector } from "../../redux/repos";

export default function Home() {
  const [filter, setFilter] = useState("");

  const onChangeFilter = e => setFilter(e.target.value);

  const repos = useSelector(reposSelector);

  const filteredRepos = repos.filter(repo =>
    repo.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className="repos-container">
      <input name="filter" id="name" value={filter} onChange={onChangeFilter} />
      <label for="name">Filter by name</label>
      <RepoList repos={filteredRepos} />
    </div>
  );
}
