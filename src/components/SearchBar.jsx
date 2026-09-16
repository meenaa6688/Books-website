function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search books, authors..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {searchText && (
        <button
          onClick={() => setSearchText("")}
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;