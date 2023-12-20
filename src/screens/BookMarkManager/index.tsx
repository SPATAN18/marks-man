import { FolderIcon } from "@heroicons/react/24/outline";
import useBookMarkData from "../../hooks/useBookMarkData";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function BookMarkManager() {
  const [bookmarks] = useBookMarkData();

  return (
    <main className="pb-4">
      <section className="col-span-3 md:col-span-4">
        <section className="grid gap-3 grid-cols-2 md:grid-cols-4">
          {bookmarks.folders.length > 0 &&
            bookmarks.folders[0].folders.map((folder) => (
              <div
                className="p-2 inline-flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                key={folder.id}
              >
                <FolderIcon className="h-8" />
                <p className="text-sm font-semibold">{folder.title}</p>
              </div>
            ))}
        </section>
        <hr />
        <section className="bg-emerald-50">
          {bookmarks.folders.length > 0 &&
            bookmarks.folders[0].urls.map((url) => (
              <div className="flex items-center border" key={url.id}>
                <img
                  src={`${new URL(url.url).origin}/favicon.ico`}
                  height={30}
                  width={30}
                  className="h-8 object-contain mr-3"
                />
                <div>
                  <p className="text-sm">{url.title}</p>
                  <span>{new URL(url.url).origin}</span>
                </div>
              </div>
            ))}
        </section>
      </section>
    </main>
  );
}
