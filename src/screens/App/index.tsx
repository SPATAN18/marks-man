import { useEffect, useState } from "react";
import "./App.css";
import Screen from "../../components/screen";
import { convertBookmarktoTree } from "../../utils/helpers";

function App() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);

  const getBookmarks = () => {
    chrome.bookmarks.getTree((tree) => {
      const data = convertBookmarktoTree(tree);
      setBookmarks(data);
    });
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <Screen>
      <p className="text-base">Hello Bookmarks</p>
      <h3>{count}</h3>
    </Screen>
  );
}

export default App;
