function BookCard({ book, onViewDetails }) {
  return (
    <div
      className="book-card"
      onClick={() => onViewDetails(book)}
    >

      <img
        src={book.coverImage}
        alt={book.title}
        className="book-cover"
      />

      <div className="book-info">

        <span className="book-category">
          {book.category}
        </span>

        <h3>
          {book.title}
        </h3>

        <p className="book-author">
          by {book.author}
        </p>

        <p className="book-rating">
          ⭐ {book.rating}
        </p>

        <div className="book-bottom">

          <span className="book-price">
            ₹{book.price}
          </span>

          <button
            onClick={(event) => {
              event.stopPropagation();
              onViewDetails(book);
            }}
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookCard;