import toast from "react-hot-toast";
import { MdImageSearch } from "react-icons/md";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userWord = event.target.elements.search.value.trim();
    if (!userWord) {
      toast.error("Enter text before search", { position: "top-right" });
      return;
    }

    onSearch(userWord);
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.btn}>
          <MdImageSearch size={25} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
