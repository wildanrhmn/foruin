import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages & Components
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/home/LandingPage";
import Login from "./pages/login/Login";
import PrivateRoutes from "./utils/ProtectedRoutes";
import ScrollToTop from "./components/tools/scrollToTop";
import Register from "./pages/register/Register";

function AppRouter() {


  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard-admin" exact />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
