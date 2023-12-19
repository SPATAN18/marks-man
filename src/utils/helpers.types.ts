type BookmarkURLType = {
  id: string;
  parentId: string;
  title: string;
  url: string;
  dateAdded: number;
};

type BookmarkFolderType = {
  id: string;
  parentId: string;
  title: string;
  dateAdded: number | undefined;
  dateGroupModified: number | undefined;
  urls: BookmarkURLType[];
  folders: BookmarkFolderType[];
};

type BookmarksDataType = {
  folders: BookmarkFolderType[];
  urls: BookmarkURLType[];
};
