export const convertBookmarktoTree = (
  bookmarks: chrome.bookmarks.BookmarkTreeNode[]
) => {
  const treeNodes: any[] = [];
  bookmarks.forEach((node) => {
    node.children?.forEach((child) => {
      const { title: label, id } = child;
      const children: any[] = [];
      child.children?.forEach((childNode) => {
        const { title: childLabel, id: childId, url } = childNode;
        children.push({ label: childLabel, id: childId, data: url });
      });
      treeNodes.push({ label, id, children });
    });
  });
  return treeNodes;
};

const parseBookmarkNode = (
  node: chrome.bookmarks.BookmarkTreeNode,
  parentFolder: BookmarkFolderType | BookmarksDataType
) => {
  if (node.children) {
    // node is a folder
    if (node?.parentId && node?.parentId.length > 0) {
      const nodeData: BookmarkFolderType = {
        title: node.title || "",
        id: node.id,
        parentId: node.parentId,
        dateAdded: node.dateAdded,
        dateGroupModified: node.dateGroupModified,
        urls: [],
        folders: [],
      };
      parentFolder.folders.push(nodeData);
      node.children.forEach((child) => {
        parseBookmarkNode(child, nodeData);
      });
    } else {
      node.children.forEach((child) => {
        parseBookmarkNode(child, parentFolder);
      });
    }
  } else if (node.url) {
    // node is a url
    const urlData: BookmarkURLType = {
      title: node.title || "",
      id: node.id,
      parentId: node.parentId ? node.parentId : "",
      url: node.url ? node.url : "",
      dateAdded: node.dateAdded ? node.dateAdded : 0,
    };
    parentFolder.urls.push(urlData);
  }
};

export const flattenBookmarkTree = (
  bookmarks: chrome.bookmarks.BookmarkTreeNode[]
): BookmarksDataType => {
  const data: BookmarksDataType = { folders: [], urls: [] };
  bookmarks.forEach((bkmark) => {
    parseBookmarkNode(bkmark, data);
  });
  return data;
};
