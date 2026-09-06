import { useState } from "react";

const categories = [
  "All",
  "Bowls",
  "Plates",
  "Compartment Plates",
  "Cups & Clamshell boxes",
];

const productItems = [
  {
    category: "Bowls",
    name: "300ml Round Bowl",
    pack: "50 pcs",
    cases: "1800 pcs",
    shape: "bowl",
  },
  {
    category: "Bowls",
    name: "120ml Square Bowl",
    pack: "50 pcs",
    cases: "5000 pcs",
    shape: "square-bowl",
  },
  {
    category: "Plates",
    name: "Triangle Snack Plate",
    pack: "50 pcs",
    cases: "3000 pcs",
    shape: "triangle",
  },
  {
    category: "Compartment Plates",
    name: "3 CP Rectangular Plate",
    pack: "50 pcs",
    cases: "1800 pcs",
    shape: "compartment",
  },
  {
    category: "Cups & Clamshell boxes",
    name: "650ml Bento Box (2CP)",
    pack: "50 pcs",
    cases: "250 pcs",
    shape: "box",
  },
  {
    category: "Plates",
    name: "7” Round Plate",
    pack: "50 pcs",
    cases: "3000 pcs",
    shape: "round-plate",
  },
  {
    category: "Bowls",
    name: "180ml Square Bowl",
    pack: "50 pcs",
    cases: "2000 pcs",
    shape: "square-bowl",
  },
  {
    category: "Plates",
    name: "6” Deep Round Plate",
    pack: "50 pcs",
    cases: "3000 pcs",
    shape: "deep-plate",
  },
  {
    category: "Bowls",
    name: "100ml Round Bowl",
    pack: "50 pcs",
    cases: "3000 pcs",
    shape: "bowl",
  },
  {
    category: "Plates",
    name: "4” Square Plate",
    pack: "50 pcs",
    cases: "1800 pcs",
    shape: "square-plate",
  },
  {
    category: "Compartment Plates",
    name: "10” Round Plate (3 CP)",
    pack: "50 pcs",
    cases: "600 pcs",
    shape: "round-compartment",
  },
  {
    category: "Cups & Clamshell boxes",
    name: "9” Square Clamshell Box",
    pack: "50 pcs",
    cases: "250 pcs",
    shape: "clamshell",
  },
];

function Arrow() {
  return <span className="arrow">{"->"}</span>;
}

function ProductShape({ type }) {
  return (
    <div className={`product-shape ${type}`} aria-hidden="true">
      <span />
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="catalogue-card">
      <div className="catalogue-visual">
        <span className="catalogue-badge">100% Bagasse</span>
        <ProductShape type={product.shape} />
      </div>
      <div className="catalogue-card-body">
        <p className="catalogue-category">{product.category}</p>
        <h2>{product.name}</h2>
        <dl>
          <div>
            <dt>Dimension</dt>
            <dd>00 x 00 mm</dd>
          </div>
          <div>
            <dt>Pack size</dt>
            <dd>{product.pack}</dd>
          </div>
          <div>
            <dt>Case qty</dt>
            <dd>{product.cases}</dd>
          </div>
        </dl>
        <a className="catalogue-enquire" href="#contact-page">
          Enquire Now <Arrow />
        </a>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProducts =
    activeCategory === "All"
      ? productItems
      : productItems.filter(({ category }) => category === activeCategory);

  return (
    <>
      <section className="products-page-hero">
        <div className="products-page-hero-copy">
          <h1>
            Sugarcane <em>tableware</em>
            <br />
            built for food service
          </h1>
          <p>
            Premium dinnerware made from 100% sugarcane bagasse. Sustainable,
            strong and made for modern food service.
          </p>
          <div className="products-page-proof">
            <span>100% Sugarcane Bagasse</span>
            <span>Bio-Degradable & Compostable</span>
            <span>Food Safe</span>
            <span>Microwave & Freezer Safe</span>
          </div>
        </div>
        <div className="products-page-hero-actions">
          <a className="products-outline-button" href="#contact">
            Download catalogue <Arrow />
          </a>
          <a className="gold-button" href="#contact-page">
            Build a quote
          </a>
        </div>
      </section>

      <section className="catalogue-controls" aria-label="Product categories">
        <div>
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : ""}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span>
          {visibleProducts.length} Products
        </span>
      </section>

      <section className="catalogue-grid" aria-label="Product catalogue">
        {visibleProducts.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </section>
    </>
  );
}
