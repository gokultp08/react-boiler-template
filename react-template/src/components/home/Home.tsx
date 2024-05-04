import React, { useContext, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { ToastContext } from "../../context/ToastProvider";
import { useLoginMutation } from "../../store/services/userApi";
import { ILoginBody } from "../../shared/types/interfaces";
import { setLoggedInUser } from "../../store/services/appStateSlice";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toastContext = useContext(ToastContext);

  // Example: Sample RTK Query Usage
  const [
    login,
    { data: loggedInData, isSuccess: isLoginSuccess, isLoading, error },
  ] = useLoginMutation();

  const onSubmit = (data: ILoginBody) => {
    // login(data);
    // Example: Remove this and use above function
    redirect();
  };

  useEffect(() => {
    if (loggedInData) {
      dispatch(setLoggedInUser(loggedInData));
    }
  }, [loggedInData, dispatch]);

  const showToast = (msg1: any, msg2: string) => {
    if (toastContext) {
      toastContext.showToast(msg1, msg2);
    }
  };

  const redirect = () => {
    // Example: Remove this and add in useEffect
    dispatch(
      setLoggedInUser({
        user: { name: "john" },
        token: "eYmsfnbgkjdfhgkjdgkdfgdjf.gdfdgdfsgsdfg.4rwerwerwerwer",
      })
    );
    showToast("success", "User Logged In");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (isLoginSuccess) {
      redirect();
    } else if (error) {
      const err = (error as FetchBaseQueryError).data as Error;
      showToast("error", err.message);
    }
  }, [isLoginSuccess, navigate, error]);

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <div className="home">
      <div className="home_first">
        <PlayArrowIcon style={{ color: "#BFA181", fontSize: "10rem" }} />
      </div>
      <div className="home_second">
        <Button
          variant="outlined"
          size="small"
          type="button"
          onClick={() => {
            onSubmit({ username: "", password: "" });
          }}
        >
          Lets Go !!!!!!
        </Button>
      </div>
    </div>
  );
};

export default Home;
