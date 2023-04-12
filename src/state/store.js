// V2 STORE

import { configureStore } from "@reduxjs/toolkit"
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


export const store = configureStore({
  reducer: {
    auth: AuhtReducer, //done
    posts: PostReducer, //done
    category: CategoryReducer, //done
    discussions: DiscussionReducer,
    detailPost: DetailPostReducer, //done
    detailDiscussion: DetailDiscussionReducer,
    detailReport: DetailReportReducer, //done
    detailSubmission: DetailSubmissionReducer, //done
    profile: ProfileReducer, //done
    report: ReportReducer, //done
    submission: SubmissionReducer, //done
    users: UsersReducer //done
  }
});