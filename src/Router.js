import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 } from "react-router-dom";

 //Import Pages & Components
 import Login from "./pages/login/Login";
 import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Login />} />
    </Route>
  )
)

function Router() {
  return (
    <RouterProvider router={router} />
  );
}

export default Router;
