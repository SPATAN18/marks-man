import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./screens/App";
import Screen from "./components/screen";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Screen>
    <App />
  </Screen>
);
