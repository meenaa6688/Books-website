function Hero({ onExplore }) {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-small">
          YOUR NEXT GREAT READ
        </p>

        <h1>
          Discover Your Next
          <br />
          Great Book
        </h1>

        <p className="hero-description">
          Explore our collection of books across
          fiction, business, self-help, fantasy,
          history and more.
        </p>

        <button
          className="hero-button"
          onClick={onExplore}
        >
          Explore Books
        </button>

      </div>

    </section>
  );
}

export default Hero;