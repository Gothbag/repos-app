import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { repoByIdSelector } from "../../redux/repos";

const RepoDetail = () => {
  const { id = "" } = useParams();

  const navigate = useNavigate();

  const parsedId = parseInt(id);

  const repo = useSelector(repoByIdSelector(parsedId));

  if (!repo) {
    navigate("/");
  }

  return (
    <div>
      <h5>{repo.name}</h5>
      <button>Track</button>
    </div>
  );
};

export default RepoDetail;
