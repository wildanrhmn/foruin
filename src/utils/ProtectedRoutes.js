import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    //User authentication will be declared here 
    let auth = { 'token' : false }
    return(
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;