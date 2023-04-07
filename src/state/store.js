// V2 STORE

import { configureStore } from "@reduxjs/toolkit"
import AuhtReducer from '../state/auth/reducer'
import PostReducer from '../state/posts/reducer'

export const store = configureStore({
  reducer: {
    auth: AuhtReducer,
    posts: PostReducer
  }
});