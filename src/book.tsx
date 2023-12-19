import ReactDOM from "react-dom/client";
import "./index.css";
import Screen from "./components/screen";
import Navbar from "./components/Navbar";
import BookmarkRouter from "./routers/BoomarkRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Screen>
    <Navbar />
    <BookmarkRouter />
  </Screen>
);
