import { FolderIcon } from "@heroicons/react/24/outline";
import useBookMarkData from "../../hooks/useBookMarkData";

export default function BookMarkManager() {
  const [bookmarks] = useBookMarkData();

  return (
    <main>
      <section className="col-span-3 md:col-span-4 grid gap-3 grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
        {bookmarks.folders.length > 0 &&
          bookmarks.folders[0].folders.map((folder) => (
            <div className="p-2" key={folder.id}>
              <FolderIcon className="h-8" />
              <p>{folder.title}</p>
            </div>
          ))}
      </section>
    </main>
  );
}
