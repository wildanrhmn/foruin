import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages & Components
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/home/LandingPage";
import Login from "./pages/login/Login";
import ScrollToTop from "./components/tools/scrollToTop";
import Register from "./pages/register/Register";
import OrganizationList from "./pages/organization_list/OrganizationList";
import CreatePost from "./pages/create_edit_post/CreatePost";
import EditPost from "./pages/create_edit_post/EditPost";
import DetailPost from "./pages/detailpost/DetailPost";
import Page404 from "./components/404/NotFoundPage";
import DeletedPosts from "./pages/dashboard/deleted_posts/DeletedPosts";
import BannedAccounts from "./pages/dashboard/banned_accounts/BannedAccounts";
import ReportedAccounts from "./pages/dashboard/report_accounts/ReportedAccounts";
import SubmissionAccounts from "./pages/dashboard/submission_accounts/SubmissionAccounts";

import { useSelector } from "react-redux";

function AppRouter() {
  const { auth = {} } = useSelector((states) => states);
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  const { role } = loginForumInfo || {}; // Add null check here

  return (
    <Router>
      <Layout>
        <ScrollToTop />
        {auth?.role === "Verified" || role === "Verified" ? (
          <Routes>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<DetailPost />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/organization-list" element={<OrganizationList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) : auth.role === "SysAdmin" || role === "SysAdmin" ? (
          <Routes>
            <Route path="/deleted-posts" element={<DeletedPosts />} />
            <Route path="/banned-accounts" element={<BannedAccounts />} />
            <Route path="/reported-accounts" element={<ReportedAccounts />} />
            <Route path="/account-submissions" element={<SubmissionAccounts />} />
            <Route path="/post/:id" element={<DetailPost />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/organization-list" element={<OrganizationList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) : (
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route path="/post/:id" element={<DetailPost />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/organization-list" element={<OrganizationList />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        )}
      </Layout>
    </Router>
  );
}

export default AppRouter;
