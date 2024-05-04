import React, { createContext, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IToastProviderProps } from "../shared/types/props";
import { IToastContext } from "../shared/types/interfaces";

export const ToastContext = createContext<IToastContext | undefined>(undefined);

const defaultProps = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  const [message, setMessage] = useState("");

  const showToast =(type: "success" | "error" | "info", message: string) => {
    setMessage(message);
    switch (type) {
      case "success":
         toast.success(message, { ...defaultProps });
        break;

      case "error":
         toast.error(message, { ...defaultProps });
        break;

      case "info":
         toast.info(message, { ...defaultProps });
        break;

      default:
        break;
    }
  };

  return (
    <ToastContext.Provider value={{ message, showToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
