import React from "react";
import { useMemo, useState } from "react";

import  books  from "../data/books";

import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import BookDetailsModal from "../components/BookDetailsModal";

function Home() {

  const [searchText, setSearchText] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedBook, setSelectedBook] =
    useState(null);

  const categories = useMemo(() => {

    return [
      ...new Set(
        books.map((book) => book.category)
      )
    ];

  }, []);

  const filteredBooks = books.filter((book) => {

    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||

      book.author
        .toLowerCase()
        .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleExplore = () => {

    document
      .getElementById("books")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };

  return (

    <main>

      <Hero
        onExplore={handleExplore}
      />

      <section
        className="books-section"
        id="books"
      >

        <div className="section-heading">

          <div>
            <h2>
              Explore Our Books
            </h2>

            <p>
              Find your next favorite book
            </p>
          </div>

          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
          />

        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="books-grid">

          {filteredBooks.map((book) => (

            <BookCard
              key={book.id}
              book={book}
              onViewDetails={setSelectedBook}
            />

          ))}

        </div>

        {filteredBooks.length === 0 && (

          <div className="no-books">
            <h3>No books found</h3>
            <p>
              Try another book name or category.
            </p>
          </div>

        )}

      </section>

      <BookDetailsModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

    </main>
  );
}

export default Home;