// V2 STORE

import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from "react-redux-loading-bar";
import AuhtReducer from '../state/auth/reducer'
import CategoryReducer from '../state/category/reducer'
import PostReducer from '../state/posts/reducer'
import DiscussionReducer from '../state/discussion/reducer'
import DetailDiscussionReducer from '../state/detailPost/reducer'
import DetailPostReducer from '../state/detailPost/reducer'
import DetailReportReducer from '../state/detailReport/reducer'
import DetailSubmissionReducer from '../state/detailSubmission/reducer'
import ProfileReducer from '../state/profile/reducer'
import ReportReducer from '../state/report/reducer'
import SubmissionReducer from '../state/submission/reducer'
import UsersReducer from '../state/users/reducer'


const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer, //done
    auth: AuhtReducer, //done
    posts: PostReducer, //done
    category: CategoryReducer, //done
    discussions: DiscussionReducer, //done
    detailPost: DetailPostReducer, //done
    detailDiscussion: DetailDiscussionReducer, //done
    detailReport: DetailReportReducer, //done
    detailSubmission: DetailSubmissionReducer, //done
    profile: ProfileReducer, //done
    report: ReportReducer, //done
    submission: SubmissionReducer, //done
    users: UsersReducer, //done
    organization: UsersReducer //done
  }
});

export { store }