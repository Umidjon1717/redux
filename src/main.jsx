import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
const App = lazy(() => import("./App.jsx"));

import { Provider } from "react-redux";
import store from "./redux/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>
);
