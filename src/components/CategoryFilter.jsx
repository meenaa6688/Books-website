function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}) {

  return (
    <div className="category-container">

      <button
        className={
          selectedCategory === "All"
            ? "category active"
            : "category"
        }
        onClick={() => setSelectedCategory("All")}
      >
        All
      </button>

      {categories.map((category) => (

        <button
          key={category}
          className={
            selectedCategory === category
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;