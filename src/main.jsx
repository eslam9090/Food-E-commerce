import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global/styles/globalStyles.css";
import App from "./App.jsx";
import "swiper/css";
import store from "./reduxToolkit/store/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
