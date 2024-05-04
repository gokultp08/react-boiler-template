import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store.ts";
import { ErrorFallback } from "./components/error-fallback/ErrorFallback.tsx";
import { ToastProvider } from "./context/ToastProvider.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => window.location.reload()}
          >
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
