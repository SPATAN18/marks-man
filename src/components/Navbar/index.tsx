import useBookMarkData from "../../hooks/useBookMarkData";

const Navbar = () => {
  const [bookmarks] = useBookMarkData();
  return (
    <header className="min-w-full bg-gray-600 sticky top-0">
      <section className="flex py-3 px-2 items-center h-[56px]">
        <section>
          <img src="/src/logo.svg" alt="Logo" height={40} width={40} />
        </section>
        <section className="self-center grow">
          <input
            className="form-input rounded w-[40%]"
            placeholder="search your bookmarks and links"
          />
        </section>
      </section>
    </header>
  );
};

export default Navbar;
