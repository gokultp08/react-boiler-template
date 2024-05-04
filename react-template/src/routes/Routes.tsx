import { Routes as RouterRoutes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/home/Home";
import { NotFound } from "../components/not-found/NotFound";

export const Routes = () => {
  return (
    <RouterRoutes>
      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Sample Routes */}
        {/* <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} >
            <Route index path="*" element={<UserDetails />} />
            <Route path="settings" element={<UserSettings />} />
          </Route> */}
      </Route>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
