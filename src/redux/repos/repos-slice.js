import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const { Octokit } = require("@octokit/core");

const octokit = new Octokit();

export const reposSlice = createSlice({
  name: "repos",
  initialState: [],
  reducers: {
    reposAdd: (state, action) => {
      return [...state, ...action.payload];
    },
    repoEdit: (state, action) => {
      const { payload } = action;
      return state.map(repo => {
        if (repo.id === payload.id) {
          return { ...repo, body: payload.body, title: payload.title };
        }
        return repo;
      });
    }
  }
});

export const { reposAdd, repoEdit } = reposSlice.actions;

export const loadRepos = () => async dispatch => {
  try {
    const resp = await octokit.request(
      "https://api.github.com/orgs/{org}/repos",
      {
        org: "google"
      }
    );
    dispatch(reposAdd(resp.data));
  } catch (e) {
    console.log(e);
  }
};

export const addNewRepo = repo => dispatch => {
  const id = uuidv4();
  dispatch(reposAdd([{ ...repo, id }]));
};

export const reposReducer = reposSlice.reducer;
