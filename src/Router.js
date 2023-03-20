import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages & Components
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/home/LandingPage";
import Login from "./pages/login/Login";
import PrivateRoutes from "./utils/ProtectedRoutes";

function AppRouter() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard-admin" exact />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </Layout>
  );
}

export default AppRouter;
