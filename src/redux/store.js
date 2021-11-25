import { configureStore } from "@reduxjs/toolkit";

import { reposReducer } from "./repos";

const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: {
      repos: reposReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState
  });

  return store;
};

export default configureAppStore;
