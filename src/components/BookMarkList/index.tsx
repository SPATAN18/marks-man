import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useBookMarkData from "../../hooks/useBookMarkData";
import React, { useState } from "react";

type BookMarkTreeProps = {
  folder: BookmarkFolderType;
};

const BookMarkTree = ({
  folder,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & BookMarkTreeProps) => {
  const [open, toggleOpen] = useState<boolean>(false);

  const onArrowClock = () => {
    toggleOpen((curr) => !curr);
  };

  return (
    <div className="pl-2">
      <div className="p-1 flex items-center">
        <ChevronDownIcon
          className="pr-4"
          height={16}
          visibility={folder.folders.length > 0 ? "visible" : "hidden"}
          onClick={onArrowClock}
        />
        <p className="font-semibold whitespace-nowrap"> {folder.title}</p>
      </div>
      {open && (
        <div>
          {folder.folders.length > 0 &&
            folder.folders.map((subfolder) => (
              <BookMarkTree key={subfolder.id} folder={subfolder} />
            ))}
        </div>
      )}
    </div>
  );
};

const BookMarkList = () => {
  const [bookmarks] = useBookMarkData();
  return (
    <section className="p-2">
      <div>
        {bookmarks.folders.map((folder) => (
          <BookMarkTree key={folder.id} folder={folder} />
        ))}
      </div>
    </section>
  );
};

export default BookMarkList;
