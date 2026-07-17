import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";
import App from "./App";
import "./index.css";

import { ToastProvider } from "./context/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <ToastProvider>

      <App />

    </ToastProvider>

  </BrowserRouter>
);