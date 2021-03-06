import React, { useState } from "react";
import { useSelector } from "react-redux";

import RepoList from "../../components/repo-list";

import "./Home.css";
import { reposSelector } from "../../redux/repos";

export default function Home() {
  const [filter, setFilter] = useState("");

  const onChangeFilter = e => setFilter(e.target.value);

  const repos = useSelector(reposSelector);

  const sortByDateDescending = (repo1, repo2) => {
    const repo1CreatedAt = new Date(repo1.created_at);
    const repo2CreatedAt = new Date(repo2.created_at);

    return repo2CreatedAt.getTime() - repo1CreatedAt.getTime();
  };

  const filteredRepos = repos
    .filter(repo =>
      repo.name.toUpperCase().includes(filter.trim().toUpperCase())
    )
    .sort(sortByDateDescending);

  return (
    <div className="repos-container">
      <input
        name="filter"
        id="filter"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
      <label htmlFor="filter">Filter by name</label>
      <RepoList repos={filteredRepos} />
    </div>
  );
}
