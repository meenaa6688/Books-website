function Header({ onSearchClick, onCategoryClick }) {
  return (
    <header className="header">

      <div className="logo">
        📚 BookNest
      </div>

      <nav className="nav">
        <button>Home</button>

        <button onClick={onSearchClick}>
          Books
        </button>

        <button onClick={onCategoryClick}>
          Categories
        </button>
      </nav>

      <div className="header-actions">

        <button
          className="icon-button"
          onClick={onSearchClick}
        >
          🔍
        </button>

        <button className="icon-button">
          🛒
        </button>

      </div>

    </header>
  );
}

export default Header;