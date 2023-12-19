import React, { useEffect, useState } from "react";
import { flattenBookmarkTree } from "../utils/helpers";

type HookReturnData = [
  bookmarksData: BookmarksDataType,
  setBookmarksData: React.Dispatch<React.SetStateAction<BookmarksDataType>>
];

let initialData: BookmarksDataType = {
  folders: [],
  urls: [],
};

const useBookMarkData = (): HookReturnData => {
  const [bookmarksData, setBookmarksData] =
    useState<BookmarksDataType>(initialData);

  const getBookMarkData = () => {
    let data: BookmarksDataType = {
      folders: [],
      urls: [],
    };
    chrome.bookmarks.getTree((tree) => {
      data = flattenBookmarkTree(tree);
      setBookmarksData(data);
      initialData = data;
    });
  };

  useEffect(() => {
    getBookMarkData();
  }, []);
  return [bookmarksData, setBookmarksData];
};

export default useBookMarkData;
