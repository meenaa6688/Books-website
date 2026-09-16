function BookDetailsModal({ book, onClose }) {

  if (!book) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="book-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-content">

          <div className="modal-image">

            <img
              src={book.coverImage}
              alt={book.title}
            />

          </div>

          <div className="modal-details">

            <span className="book-category">
              {book.category}
            </span>

            <h2>
              {book.title}
            </h2>

            <p className="modal-author">
              by {book.author}
            </p>

            <div className="modal-rating">
              ⭐ {book.rating}
            </div>

            <p className="modal-description">
              {book.description}
            </p>

            <div className="book-meta">

              <div>
                <strong>Published</strong>
                <span>{book.publishedYear}</span>
              </div>

              <div>
                <strong>Language</strong>
                <span>{book.language}</span>
              </div>

              <div>
                <strong>Pages</strong>
                <span>{book.pages}</span>
              </div>

              <div>
                <strong>Publisher</strong>
                <span>{book.publisher}</span>
              </div>

            </div>

            <div className="modal-bottom">

              <span className="modal-price">
                ₹{book.price}
              </span>

              <button className="buy-button">
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookDetailsModal;