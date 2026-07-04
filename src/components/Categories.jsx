function Categories() {
  const categories = [
    "👕 Fashion",
    "💻 Electronics",
    "👟 Shoes",
    "⌚ Accessories",
  ];

  return (
    <section className="categories">
      <h2>Shop by Categories</h2>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;