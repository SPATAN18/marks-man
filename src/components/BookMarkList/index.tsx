import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useBookMarkData from "../../hooks/useBookMarkData";
import React from "react";

type BookMarkTreeProps = {
  folder: BookmarkFolderType;
};

const BookMarkTree = ({
  folder,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & BookMarkTreeProps) => {
  return (
    <div>
      <div>{folder.title}</div>
      <div>
        {folder.folders.length > 0 &&
          folder.folders.map((subfolder) => (
            <BookMarkTree key={subfolder.id} folder={subfolder} />
          ))}
      </div>
    </div>
  );
};

const BookMarkList = () => {
  const [bookmarks] = useBookMarkData();
  console.log(bookmarks);
  /**
   * @todo add scroll for the sidebar
   */
  return (
    <section className="bg-slate-400 p-2">
      <div>
        {bookmarks.folders.map((folder) => (
          <BookMarkTree folder={folder} />
        ))}
      </div>
    </section>
  );
};

export default BookMarkList;
