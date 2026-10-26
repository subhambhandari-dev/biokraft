import { useState } from "react";
import {
  arrowRightUpIcon as arrowIcon,
  freezerIcon,
  microwaveIcon,
} from "../assets";

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

async function downloadCatalogue() {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const itemsPerPage = 6;
  const pageCount = Math.ceil(productItems.length / itemsPerPage);

  for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
    if (pageIndex > 0) pdf.addPage();

    pdf.setFillColor(0, 61, 43);
    pdf.rect(0, 0, pageWidth, 48, "F");
    pdf.setFillColor(199, 146, 43);
    pdf.rect(0, 48, pageWidth, 1.5, "F");

    pdf.setTextColor(227, 184, 92);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text("BIOKRAFT  |  PRODUCT CATALOGUE", 15, 12);
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(19);
    pdf.text("Sugarcane tableware", 15, 22);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.text("Premium, sustainable food-service essentials made from sugarcane bagasse.", 15, 29);
    pdf.setFontSize(8);
    pdf.setTextColor(220, 235, 226);
    pdf.text("100% bagasse  |  Biodegradable & compostable  |  Food safe  |  Microwave & freezer safe", 15, 39);

    const pageItems = productItems.slice(
      pageIndex * itemsPerPage,
      (pageIndex + 1) * itemsPerPage,
    );

    pageItems.forEach((product, itemIndex) => {
      const cardY = 57 + itemIndex * 38;
      pdf.setFillColor(243, 248, 245);
      pdf.setDrawColor(213, 223, 217);
      pdf.roundedRect(15, cardY, pageWidth - 30, 35, 3, 3, "FD");

      pdf.setTextColor(40, 125, 88);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8);
      pdf.text(product.category.toUpperCase(), 21, cardY + 8);

      pdf.setTextColor(2, 54, 37);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.text(product.name.replace(/[“”]/g, '"'), 21, cardY + 16);

      const details = [
        { label: "PACK SIZE", value: product.pack, x: 21 },
        { label: "CASE QUANTITY", value: product.cases, x: 79 },
        { label: "DIMENSIONS", value: "Please enquire", x: 137 },
      ];

      details.forEach(({ label, value, x }) => {
        pdf.setTextColor(104, 128, 116);
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(7);
        pdf.text(label, x, cardY + 24);
        pdf.setTextColor(7, 85, 59);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(8);
        pdf.text(value, x, cardY + 30);
      });
    });

    pdf.setDrawColor(213, 223, 217);
    pdf.line(15, pageHeight - 13, pageWidth - 15, pageHeight - 13);
    pdf.setTextColor(88, 116, 102);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.text("For dimensions, bulk quotes and enquiries: temaindustries.ltd@gmail.com", 15, pageHeight - 7);
    pdf.text(`${pageIndex + 1} / ${pageCount}`, pageWidth - 15, pageHeight - 7, { align: "right" });
  }

  pdf.save("biokraft-product-catalogue.pdf");
}

function Arrow() {
  return <img className="arrow-icon" src={arrowIcon} alt="" />;
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
        <div className="catalogue-feature-icons" role="img" aria-label="Microwave and freezer safe">
          <img src={microwaveIcon} alt="" />
          <img src={freezerIcon} alt="" />
        </div>
        <ProductShape type={product.shape} />
      </div>
      <div className="catalogue-card-body">
        <p className="catalogue-category">{product.category}</p>
        <h2>{product.name}</h2>
        <dl>
          <div>
            <dt>Dimension</dt>
            <dd>Please enquire</dd>
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
          <button
            type="button"
            className="products-outline-button"
            onClick={async () => {
              try {
                await downloadCatalogue();
              } catch (error) {
                console.error("Unable to generate the product catalogue PDF.", error);
                window.alert("The catalogue could not be downloaded. Please try again.");
              }
            }}
          >
            Download catalogue <Arrow />
          </button>
          <a className="gold-button" href="#contact-page">
            Build a quote
          </a>
        </div>
      </section>

      <section className="catalogue-controls" aria-label="Product categories">
        <div>
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span aria-live="polite" aria-atomic="true">
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
