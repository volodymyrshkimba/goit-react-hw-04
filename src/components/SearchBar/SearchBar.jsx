import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userWord = event.target.elements.search.value.trim();
    if (!userWord) {
      toast.error("Enter text.", { position: "top-right" });
      return;
    }

    onSearch(userWord);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
