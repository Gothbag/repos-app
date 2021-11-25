import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./posts";

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: {
      posts: postsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState
  });

  return store;
};

export default configureAppStore;
