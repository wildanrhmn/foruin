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
// import { useSelector } from "react-redux";

function AppRouter() {
  // const { auth = {} } = useSelector(states => states); 
  return (
    <Router>
      <Layout>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path= "/organization-list" element={<OrganizationList />} />
            <Route path= "/create-post" element={<CreatePost />} />
            <Route path= "/update-post/:id" element={<EditPost />} />
            <Route path="/login" element={<Login />}  />
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />}  />
          </Routes>

      </Layout>
    </Router>
  );
}

export default AppRouter;
