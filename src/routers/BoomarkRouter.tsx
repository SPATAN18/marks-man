import { RouterProvider, createHashRouter } from "react-router-dom";
import BookMarkManager from "../screens/BookMarkManager";
import BookMarkList from "../components/BookMarkList";

const routes = createHashRouter([
  {
    path: "/",
    element: <BookMarkManager />,
    children: [
      {
        path: ":folder",
        element: <div>Hello Child</div>,
      },
    ],
  },
]);

const BookmarkRouter = () => {
  return (
    <section className="grid grid-cols-5 h-full">
      <section className="col-span-1 h-screen overflow-x-auto bg-slate-400 pb-4 shadow-lg">
        <div className="bg-red-100 h-[50px] min-w-full"></div>
        <BookMarkList />
      </section>
      <section className="col-span-4 h-screen overflow-auto px-8">
        <div className=" bg-slate-400 h-[50px] min-w-full px-4 py-2 sticky top-0 mb-6 flex justify-center shadow-md">
          <input className="w-1/2 rounded" type="text" placeholder="search" />
        </div>
        <RouterProvider router={routes} />
      </section>
    </section>
  );
};

export default BookmarkRouter;
