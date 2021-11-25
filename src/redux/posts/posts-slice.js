import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    postsAdd: (state, action) => {
      return [...state, ...action.payload];
    },
    postEdit: (state, action) => {
      const { payload } = action;
      return state.map(post => {
        if (post.id === payload.id) {
          return { ...post, body: payload.body, title: payload.title };
        }
        return post;
      });
    }
  }
});

export const { postsAdd, postEdit } = postsSlice.actions;

export const loadPosts = () => async dispatch => {
  const resp = await instance.get("/posts");
  dispatch(postsAdd(resp.data));
};

export const addNewPost = post => dispatch => {
  const id = uuidv4();
  dispatch(postsAdd([{ ...post, id }]));
};

export const postsReducer = postsSlice.reducer;
