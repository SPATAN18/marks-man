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
      <section className="col-span-1">
        <BookMarkList />
      </section>
      <section className="col-span-4">
        <RouterProvider router={routes} />
      </section>
    </section>
  );
};

export default BookmarkRouter;
