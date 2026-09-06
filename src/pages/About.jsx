const stats = [
  {
    value: "100M+",
    label: "Tonnes of sugarcane bagasse generated in India each year",
    tag: "The raw material",
  },
  {
    value: "14M",
    label: "Tonnes of plastic consumed annually in India",
    tag: "The problem",
  },
  {
    value: "100%",
    label: "Plastic-free tableware, every product we make",
    tag: "The standard",
  },
  {
    value: "100%",
    label: "Biodegradable and compostable in 90 days",
    tag: "Certified",
  },
];

const values = [
  [
    "01",
    "Sustainability with purpose",
    "Sustainability is not a trend or a marketing claim. It is the foundation of everything we do.",
  ],
  [
    "02",
    "Circular thinking",
    "Waste should never be wasted. We give agricultural by-products a meaningful second life.",
  ],
  [
    "03",
    "Responsible innovation",
    "Innovation should solve real-world problems and make sustainable choices easier.",
  ],
  [
    "04",
    "Local impact, global responsibility",
    "We build solutions that support local industries and contribute to a cleaner future.",
  ],
  [
    "05",
    "A better future, one product at a time",
    "Every BioKraft product represents bagasse that did not burn and plastic that was never produced.",
  ],
];

function Arrow() {
  return <span className="arrow">{"->"}</span>;
}

export default function AboutPage() {
  return (
    <>
      <section className="about-page-hero">
        <div className="about-page-hero-copy">
          <h1>
            Turning waste into <em>worth</em>
          </h1>
          <p>
            BioKraft was founded on a simple belief: what farmers burn in fields
            every harvest season could become the plates, bowls and cutlery on
            your table and leave a better world behind.
          </p>
          <div className="about-page-actions">
            <a className="gold-button" href="#products-page">
              View our products <Arrow />
            </a>
            <a className="outline-button" href="#contact-page">
              Request a bulk quote
            </a>
          </div>
        </div>
      </section>

      <section className="about-page-stats" aria-label="BioKraft impact facts">
        {stats.map(({ value, label, tag }) => (
          <article key={tag}>
            <strong>{value}</strong>
            <p>{label}</p>
            <span>{tag}</span>
          </article>
        ))}
      </section>

      <section className="about-page-story">
        <div className="about-page-story-copy">
          <p className="about-page-eyebrow dark">Vision</p>
          <h2>A circular future, one plate at a time</h2>
          <p className="about-page-intro-copy">
            Founded by Tema Industries Pvt. Ltd., BioKraft was created to
            transform agricultural waste into sustainable solutions for a better
            future.
          </p>
          <p>
            By converting sugarcane bagasse into high-quality biodegradable
            tableware, we reduce dependence on single-use plastics while giving
            new value to renewable resources.
          </p>
          <p>
            Combining innovation, responsible manufacturing, and environmental
            stewardship, BioKraft is committed to building a circular future
            where sustainability and performance go hand in hand.
          </p>
          <blockquote>
            Our mission is simple: to turn waste into value and create products
            that leave a positive impact on both people and the planet.
          </blockquote>
          <a className="dark-button" href="#products-page">
            Explore our products <Arrow />
          </a>
        </div>
        <div className="about-page-story-art" aria-hidden="true">
          <span>BioKraft</span>
          <strong>
            From waste
            <br />
            to worth
          </strong>
        </div>
      </section>

      <section className="about-page-problem">
        <div className="about-page-problem-art" aria-hidden="true">
          <span>100%</span>
          <strong>
            Plant-based
            <br />
            packaging
          </strong>
        </div>
        <div>
          <p className="about-page-eyebrow">The problem we solve</p>
          <h2>Two crises. One solution.</h2>
          <p>
            Sugarcane bagasse is often treated as waste and disposed of through
            open burning, releasing harmful pollutants into the atmosphere.
          </p>
          <p>
            At the same time, single-use plastics continue to accumulate in
            landfills and natural ecosystems.
          </p>
          <p className="about-page-callout">
            BioKraft addresses both challenges at once: converting agricultural
            residue into eco-friendly tableware while eliminating reliance on
            plastic.
          </p>
        </div>
      </section>

      <section className="about-page-values">
        <div className="about-page-values-heading">
          <p className="about-page-eyebrow dark">What we stand for</p>
          <h2>Our values</h2>
          <p>
            Every decision at BioKraft traces back to five beliefs we do not
            negotiate on.
          </p>
        </div>
        <div className="about-page-value-grid">
          {values.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
          <article className="about-page-partner">
            <h3>Want to partner with us?</h3>
            <p>
              We work with caterers, restaurants, event companies, and FMCG
              brands across India.
            </p>
            <a href="#contact-page">
              Get a bulk quote <Arrow />
            </a>
          </article>
        </div>
      </section>

      <section className="about-page-switch">
        <p className="about-page-eyebrow">Ready to make a switch?</p>
        <h2>
          "Turning waste into worth,
          <br />
          <em>one plate at a time"</em>
        </h2>
        <p className="about-page-switch-copy">
          Join the brands and businesses across India choosing sustainable
          tableware. Request a bulk quote or browse our full product range.
        </p>
        <div className="about-page-actions">
          <a className="gold-button" href="#contact-page">
            Get a bulk quote <Arrow />
          </a>
          <a className="outline-button" href="#products-page">
            View our products
          </a>
        </div>
      </section>
    </>
  );
}
