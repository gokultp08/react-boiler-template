import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ToastContext } from "../../context/ToastProvider";
import { logout } from "../../store/services/appStateSlice";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toastContext = useContext(ToastContext);

  const showToast = (msg1: any, msg2: string) => {
    if (toastContext) {
      toastContext.showToast(msg1, msg2);
    }
  };

  const handleLogout = () => {
    showToast("success", "User Logged Out");
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      DashBoard
      <Button
        variant="outlined"
        size="small"
        type="button"
        onClick={() => {
          handleLogout();
        }}
        style={{ borderColor: "#0A1828", color: "#0A1828" }}
      >
        Lets Go Back 
      </Button>
    </>
  );
};

export default Dashboard;
