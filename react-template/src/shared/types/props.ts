import { ReactNode } from "react";

export interface IErrorFallbackProps {
  resetErrorBoundary: () => void;
}

export interface IToastProviderProps {
  children: ReactNode;
}
