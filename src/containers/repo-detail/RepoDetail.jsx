import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { repoByIdSelector } from "../../redux/repos";
import { trackRepo } from "../../api/track-repo";

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
    <div>
      <h5>{repo.name}</h5>
      <button onClick={onTrackClick}>Track</button>
    </div>
  );
};

export default RepoDetail;
