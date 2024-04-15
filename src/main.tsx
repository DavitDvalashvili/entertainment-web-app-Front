import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
