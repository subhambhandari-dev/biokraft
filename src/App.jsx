import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import biokraftLogo from './assets/biokraft-logo.svg'
import homeHeroImage from './assets/home-hero.webp'
import bundleSugarcane from './assets/about-sugarcane-bundle.webp'
import biokraftMaterial from './assets/about-material-photo.webp'
import benefitSugarcaneIcon from './assets/benefit-sugarcane-bagasse.svg'
import benefitCompostableIcon from './assets/benefit-compostable.svg'
import benefitSafeIcon from './assets/benefit-safe-reliable.svg'
import benefitCarbonIcon from './assets/benefit-carbon-footprint.svg'
import industryFoodIcon from './assets/industry-food-beverage.svg'
import industryHealthcareIcon from './assets/industry-healthcare.svg'
import industryCaterersIcon from './assets/industry-caterers.svg'
import industryEducationIcon from './assets/industry-education.svg'
import industryRetailIcon from './assets/industry-retail.svg'
import industryFmcgIcon from './assets/industry-fmcg-brands.svg'
import industryDistributorsIcon from './assets/industry-distributors.svg'
import monthlyProductionIcon from './assets/glance-monthly-production.svg'
import privateLabelingIcon from './assets/glance-private-labeling.svg'
import bulkFulfilmentIcon from './assets/glance-bulk-fulfilment.svg'
import factoryPricingIcon from './assets/glance-factory-pricing.svg'
import productPlatesImage from './assets/product-plates.svg'
import productBowlsImage from './assets/product-bowls.svg'
import productTraysImage from './assets/product-compartment-trays.svg'
import productCupsImage from './assets/product-cups-and-boxes.svg'
import faqImageLower from './assets/faq-image-lower.webp'
import faqImageUpper from './assets/faq-image-upper.webp'
import arrowRightUpIcon from './assets/arrow-right-up.svg'
import buttonArrowCircle from './assets/button-arrow-circle.svg'
import faqChevronIcon from './assets/faq-chevron.svg'

const AboutPage = lazy(() => import('./pages/About'))
const ContactPage = lazy(() => import('./pages/Contact'))
const ProductsPage = lazy(() => import('./pages/Products'))

const benefits = [
  { icon: benefitSugarcaneIcon, label: '100% Sugarcane Bagasse' },
  { icon: benefitCompostableIcon, label: 'Bio-Degradable & Compostable' },
  { icon: benefitSafeIcon, label: 'Safe & Reliable' },
  { icon: benefitCarbonIcon, label: 'Reduce carbon footprint' },
]

const industries = [
  { icon: industryFoodIcon, name: 'Food & Beverage' },
  { icon: industryHealthcareIcon, name: 'Healthcare Institutions' },
  { icon: industryCaterersIcon, name: 'Caterers' },
  { icon: industryEducationIcon, name: 'Education' },
  { icon: industryRetailIcon, name: 'Retail' },
  { icon: industryFmcgIcon, name: 'FMCG Brands' },
  { icon: industryDistributorsIcon, name: 'Distributors' },
]

const claims = [
  '100% Sugarcane Bagasse',
  'Biodegradable & Compostable',
  '100% Sustainable & Circular',
  'Built for real world food service',
  '100% Plastic-Free & Compliant',
  'Food Safe & Hygienic',
  'Microwave & Freezer Safe',
  'Made in India',
]

const claimBacks = [
  'A better choice for everyday service',
  'Designed with the planet in mind',
  'Strong performance, lighter footprint',
  'Made for kitchens that move fast',
  'Renewable materials, reliable results',
  'Less plastic, more possibility',
  'Thoughtful packaging for modern brands',
  'Progress that starts with one choice',
]

const glanceFacts = [
  { value: '2.5M+', label: 'Plates produced monthly', icon: monthlyProductionIcon },
  { value: 'Private Labelling', label: 'Your brand on every product', icon: privateLabelingIcon },
  { value: 'Factory direct pricing', label: 'No middlemen markups', icon: factoryPricingIcon },
  { value: 'Bulk order fulfilment', label: 'Built for volume, not samples', icon: bulkFulfilmentIcon },
]

const products = [
  {
    image: productPlatesImage,
    name: 'Bagasse Plates',
    description: 'From bite-sized servings to full-course meals, BioKraft’s range of sugarcane bagasse plates is designed to suit every food service application.',
  },
  {
    image: productBowlsImage,
    name: 'Bagasse Bowls',
    description: 'BioKraft’s range of biodegradable bowls is crafted to accommodate everything from sauces and side dishes to soups, curries and desserts.',
  },
  {
    image: productTraysImage,
    name: 'Bagasse Compartment Trays',
    description: 'BioKraft’s compartment plates and meal trays keep multiple food items neatly separated while maintaining an attractive presentation.',
  },
  {
    image: productCupsImage,
    name: 'Bagasse Cups & Boxes',
    description: 'BioKraft’s range of cups and clamshell boxes is perfect for beverages, desserts, packaged meals and baked goods.',
  },
]

const faqs = [
  {
    question: 'What is bagasse tableware?',
    answer: 'Bagasse tableware is made from sugarcane fiber left after juice extraction. It is a renewable and eco-friendly alternative to plastic and foam products.',
  },
  {
    question: 'Is your tableware biodegradable and compostable?',
    answer: 'Yes. Every BioKraft product is made from 100% natural sugarcane fibre with no plastic lining, so it breaks down fully under composting conditions and leaves no microplastic residue.',
  },
  {
    question: 'How long does it take to decompose?',
    answer: 'Under standard composting conditions, BioKraft products typically break down within 60–90 days, compared to the hundreds of years plastic alternatives take in landfill.',
  },
  {
    question: 'Is tableware suitable for microwaves and freezers?',
    answer: 'Yes. BioKraft products are designed to withstand both heating and freezing conditions. They can be used for reheating food in microwaves and are safe for cold foods and freezers, making them suitable for a wide range of food service.',
  },
  {
    question: 'Are your products oil and water resistant?',
    answer: 'BioKraft tableware is engineered to resist oil and moisture for the duration of typical food service use, without leaking or losing structural integrity.',
  },
  {
    question: 'Are the products food-safe?',
    answer: 'Absolutely. All products are manufactured in a controlled, hygienic environment and are safe for direct contact with both hot and cold food.',
  },
  {
    question: 'Do you offer custom branding and OEM manufacturing?',
    answer: 'Yes, BioKraft offers private labelling and OEM manufacturing for businesses looking to bring branded sustainable packaging to their customers. Get in touch to discuss your requirements.',
  },
]

const pageHashes = ['#about-page', '#products-page', '#contact-page']

function Arrow() {
  return <img className="arrow-icon" src={arrowRightUpIcon} alt="" />
}

function Button({ children, variant = 'dark', href = '#contact' }) {
  const className = variant === 'gold' ? 'gold-button' : variant === 'contact' ? 'contact-button' : 'dark-button'
  const trailingIcon = variant === 'contact'
    ? <img className="arrow-icon" src={buttonArrowCircle} alt="" />
    : <Arrow />
  return <a className={className} href={href}>{children}{trailingIcon}</a>
}

function SectionHeading({ label, children }) {
  return <div className="section-heading"><p className="kicker">{label}</p>{children}</div>
}

function Header({ page }) {
  const activePage = page || '#top'
  const [menuOpen, setMenuOpen] = useState(false)

  return <header className="header">
    <a className="logo" href="#top" aria-label="BioKraft home"><img src={biokraftLogo} alt="" /></a>
    <button
      className="menu-toggle"
      type="button"
      aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={menuOpen}
      aria-controls="main-navigation"
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span />
      <span />
      <span />
    </button>
    <nav id="main-navigation" className={menuOpen ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
      <a className={activePage === '#top' ? 'active' : ''} href="#top">Home</a>
      <a className={activePage === '#about-page' ? 'active' : ''} href="#about-page">About</a>
      <a className={activePage === '#products-page' ? 'active' : ''} href="#products-page">Products</a>
      <Button variant="contact" href="#contact-page">Contact Us</Button>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <img className="hero-image" src={homeHeroImage} alt="" fetchPriority="high" />
    <div className="hero-overlay">
      <p className="script">Sustainable</p>
      <h1>Alternative to Plastic<br />Food <em>Packaging</em></h1>
      <p>Premium food packaging made from reclaimed<br />sugarcane fibre.</p>
      <Button variant="gold" href="#products-page">Explore our products</Button>
    </div>
  </section>
}

function Benefits() {
  return <section className="benefits" aria-label="Product benefits">
    {benefits.map(({ icon, label }) => <div className="benefit" key={label}><img className="benefit-icon" src={icon} alt="" /><span>{label}</span></div>)}
  </section>
}

function Industries() {
  return <section className="industries">
    <p className="kicker">Industries we serve</p>
    <div className="industry-grid">
      {industries.map(({ icon, name }) => <div className="industry" key={name}><img className="industry-icon" src={icon} alt="" /><span>{name}</span></div>)}
    </div>
  </section>
}

function About() {
  return <section className="about" id="about">
    <div className="about-visual">
      <img className="field-image" src={biokraftMaterial} alt="Biodegradable packaging made from sugarcane material" loading="lazy" decoding="async" />
      <img className="pack-image" src={bundleSugarcane} alt="Bundle of sugarcane" loading="lazy" decoding="async" />
    </div>
    <div className="about-copy">
      <p className="kicker">About</p>
      <h2>Powered by Nature<br />Driven by Innovation</h2>
      <p>Every year, millions of tonnes of sugarcane bagasse are burned or discarded across India, while billions of single-use plastic food containers end up in landfills. BioKraft was created to bridge these two challenges through sustainable manufacturing, turning agricultural residue into the food packaging that food service runs on.</p>
      <Button>Know More</Button>
    </div>
  </section>
}

function AtAGlance() {
  return <section className="at-a-glance">
    <SectionHeading label="BioKraft at a glance" />
    <div className="glance-grid">
      {glanceFacts.map(({ value, label, icon }, index) => <article className={index === 1 || index === 3 ? 'glance-card featured' : 'glance-card'} key={label}>
        <img className="glance-icon" src={icon} alt="" /><strong>{value}</strong><span>{label}</span>
      </article>)}
    </div>
  </section>
}

function WhyChooseUs() {
  return <section className="why">
    <div className="section-top"><div><SectionHeading label="Why choose Biokraft?"><h2>Built on substance, not just claims</h2><p>BioKraft transforms agricultural waste into premium, sustainable food packaging that meets the demands of modern food service.</p></SectionHeading></div><Button href="#products-page">View all products</Button></div>
    <div className="claim-grid">{claims.map((claim, index) => <div className="claim-card" key={claim}><div className="claim-inner"><div className={index === 2 || index === 5 ? 'claim claim-front active' : 'claim claim-front'}><span>{claim}</span></div><div className="claim claim-back"><span>{claimBacks[index]}</span></div></div></div>)}</div>
  </section>
}

function SwitchCallout() {
  return <section className="switch"><div><h2>Ready to Make the Switch?</h2><p>Join the movement toward a plastic-free future without<br />compromising on quality or performance.</p></div><Button variant="gold" href="#contact-page">Get a quote</Button></section>
}

function Products() {
  return <section className="products" id="products">
    <SectionHeading label="Sustainable product range"><h2>Four ranges. Every use case.</h2></SectionHeading>
    <div className="product-list">{products.map(({ image, name, description }) => <article key={name}><img className="product-icon" src={image} alt="" /><h3>{name}</h3><p>{description}</p></article>)}</div>
  </section>
}

function FAQ() {
  return <section className="faq">
    <div><p className="kicker">Frequently asked questions</p>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<img src={faqChevronIcon} alt="" /></summary><p>{answer}</p></details>)}</div>
    <div className="faq-images">
      <img className="faq-image one" src={faqImageUpper} alt="" loading="lazy" decoding="async" />
      <img className="faq-image two" src={faqImageLower} alt="" loading="lazy" decoding="async" />
    </div>
  </section>
}

function Footer() {
  const columns = [
    { title: 'Navigate', links: ['Home', 'About', 'Products', 'Contact'] },
    { title: 'Products', links: ['Plates', 'Bowls', 'Compartment trays', 'Cups & Clamshell box'] },
  ]

  return <footer id="contact">
    <div className="footer-brand">
      <a className="logo" href="#top" aria-label="BioKraft home"><img src={biokraftLogo} alt="" /></a>
      <p>Tema Industries Pvt. Ltd.</p>
    </div>
    {columns.map(({ title, links }) => <div className="footer-column" key={title}><h4>{title}</h4>{links.map((label) => <span key={label}>{label}</span>)}</div>)}
    <div className="footer-contact"><h4>Contact</h4><p>temaindustries.ltd@gmail.com</p><p>+91 8939099779</p><p>Kotdwar, Uttarakhand</p></div>
  </footer>
}

function App() {
  const [page, setPage] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setPage(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (pageHashes.includes(page)) window.scrollTo(0, 0)
  }, [page])

  const pageContent = page === '#about-page' ? <AboutPage /> : page === '#products-page' ? <ProductsPage /> : page === '#contact-page' ? <ContactPage /> : <><Hero /><Benefits /><Industries /><About /><WhyChooseUs /><SwitchCallout /><Products /><AtAGlance /><FAQ /></>

  return <main><Header page={page} /><Suspense fallback={null}>{pageContent}</Suspense><Footer /></main>
}

export default App
