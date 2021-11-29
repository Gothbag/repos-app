import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { repoByIdSelector } from "../../redux/repos";
import { trackRepo } from "../../api/track-repo";

import "./RepoDetail.css";

const RepoDetail = () => {
  const { id = "" } = useParams();

  const navigate = useNavigate();

  const parsedId = parseInt(id);

  const repo = useSelector(repoByIdSelector(parsedId));

  const onTrackClick = () => {
    trackRepo(repo);
  };

  if (!repo) {
    navigate("/");
  }

  return (
    <div className="repo-detail">
      <h6>
        {repo.name} ({repo.full_name})
      </h6>
      <p>
        <a href={repo.url} target="_blank" rel="noreferrer">
          {repo.url}
        </a>
      </p>
      <p>{repo.description}</p>
      <p>Open issues: {repo.open_issues_count}</p>
      <p>Creation date: {repo.created_at}</p>
      <button onClick={onTrackClick}>Track</button>
    </div>
  );
};

export default RepoDetail;
