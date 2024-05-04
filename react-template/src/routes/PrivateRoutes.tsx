import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { RootState } from "../store/store";

const PrivateRoutes = () => {
  const token = useSelector((state: RootState) => state.appState.token);
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
