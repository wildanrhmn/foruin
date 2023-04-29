// V2 STORE

import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from "react-redux-loading-bar";
import AuhtReducer from '../state/auth/reducer'
import PostReducer from '../state/posts/reducer'

const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    auth: AuhtReducer,
    posts: PostReducer,
  }
});

export { store }