import { ReactPropTypes } from "react";

type FolderItemProps = BookmarkFolderType & ReactPropTypes;

const FolderItem = (props: FolderItemProps) => {
  console.log(props);
  return (
    <div>
      <i className="pi pi-folder" />
      <p>{props.title}</p>
    </div>
  );
};

export default FolderItem;
