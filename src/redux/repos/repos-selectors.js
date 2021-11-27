import { createSelector } from "reselect";

export const reposSelector = state => state.repos || [];

export const repoByIdSelector = repoId =>
  createSelector(
    [reposSelector],
    repos => repos.find(repo => repo.id === repoId) || {}
  );
