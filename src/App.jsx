import { useEffect, useState } from 'react'
import './App.css'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ProductsPage from './pages/Products'

const benefits = [
  { icon: 'Y', label: '100% Sugarcane Bagasse' },
  { icon: 'R', label: 'Bio-Degradable & Compostable' },
  { icon: 'S', label: 'Safe & Reliable' },
  { icon: 'CO2', label: 'Reduce carbon footprint' },
]

const industries = [
  { icon: '*', name: 'Food & Beverage' },
  { icon: '+', name: 'Healthcare Institutions' },
  { icon: '-', name: 'Caterers' },
  { icon: '[]', name: 'Education' },
  { icon: 'U', name: 'Retail' },
  { icon: 'C', name: 'FMCG Brands' },
  { icon: 'D', name: 'Distributors' },
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
  { value: '2.5M+', label: 'Plates produced monthly', icon: '▱' },
  { value: 'Private Labelling', label: 'Your brand on every product', icon: '□' },
  { value: 'Factory direct pricing', label: 'No middlemen markups', icon: '▣' },
  { value: 'Bulk order fulfilment', label: 'Built for volume, not samples', icon: '◇' },
]

const products = [
  {
    icon: 'O',
    name: 'Bagasse Plates',
    description: 'From bite-sized servings to full-course meals, BioKraft’s range of sugarcane bagasse plates is designed to suit every food service application.',
  },
  {
    icon: 'U',
    name: 'Bagasse Bowls',
    description: 'BioKraft’s range of biodegradable bowls is crafted to accommodate everything from sauces and side dishes to soups, curries and desserts.',
  },
  {
    icon: 'Q',
    name: 'Bagasse Compartment Trays',
    description: 'BioKraft’s compartment plates and meal trays keep multiple food items neatly separated while maintaining an attractive presentation.',
  },
  {
    icon: 'B',
    name: 'Bagasse Cups & Boxes',
    description: 'BioKraft’s range of cups and clamshell boxes is perfect for beverages, desserts, packaged meals and baked goods.',
  },
]

const faqs = [
  'What is bagasse tableware?',
  'Is your tableware biodegradable and compostable?',
  'How long does it take to decompose?',
  'Is tableware suitable for microwaves and freezers?',
  'Are your products oil and water resistant?',
  'Are the products food-safe?',
  'Do you offer custom branding and OEM manufacturing?',
]

const pageHashes = ['#about-page', '#products-page', '#contact-page']

function Arrow() {
  return <span className="arrow">{'->'}</span>
}

function Button({ children, variant = 'dark', href = '#contact' }) {
  const className = variant === 'gold' ? 'gold-button' : variant === 'contact' ? 'contact-button' : 'dark-button'
  return <a className={className} href={href}>{children}<Arrow /></a>
}

function SectionHeading({ label, children }) {
  return <div className="section-heading"><p className="kicker">{label}</p>{children}</div>
}

function Header({ page }) {
  const activePage = page || '#top'

  return <header className="header">
    <a className="logo" href="#top" aria-label="BioKraft home"><span>B</span><small>BIOKRAFT</small></a>
    <nav aria-label="Main navigation">
      <a className={activePage === '#top' ? 'active' : ''} href="#top">Home</a>
      <a className={activePage === '#about-page' ? 'active' : ''} href="#about-page">About</a>
      <a className={activePage === '#products-page' ? 'active' : ''} href="#products-page">Products</a>
      <a className={activePage === '#certifications' ? 'active' : ''} href="#certifications">Certifications</a>
      <Button variant="contact" href="#contact-page">Contact Us</Button>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-overlay">
      <p className="script">Sustainable</p>
      <h1>Alternative to Plastic<br />Food <em>Packaging</em></h1>
      <p>Premium food packaging made from reclaimed<br />sugarcane fibre.</p>
      <Button variant="gold" href="#products-page">Explore our products</Button>
    </div>
    <div className="hero-shape" />
  </section>
}

function Benefits() {
  return <section className="benefits" aria-label="Product benefits">
    {benefits.map(({ icon, label }) => <div className="benefit" key={label}><span className="benefit-icon">{icon}</span><span>{label}</span></div>)}
  </section>
}

function Industries() {
  return <section className="industries" id="certifications">
    <p className="kicker">Industries we serve</p>
    <div className="industry-grid">
      {industries.map(({ icon, name }) => <div className="industry" key={name}><span className="industry-icon">{icon}</span><span>{name}</span></div>)}
    </div>
  </section>
}

function About() {
  return <section className="about" id="about">
    <div className="about-visual"><div className="field-image" /><div className="pack-image" /></div>
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
        <span className="glance-icon">{icon}</span><strong>{value}</strong><span>{label}</span>
      </article>)}
    </div>
  </section>
}

function WhyChooseUs() {
  return <section className="why">
    <div className="section-top"><div><SectionHeading label="Why choose Biokraft?"><h2>Built on substance, not just claims</h2><p>BioKraft transforms agricultural waste into premium, sustainable food packaging that meets the demands of modern food service.</p></SectionHeading></div><Button href="#products-page">View all products</Button></div>
    <div className="claim-grid">{claims.map((claim, index) => <div className="claim-card" key={claim}><div className="claim-inner"><div className={index === 2 || index === 5 ? 'claim claim-front active' : 'claim claim-front'}>{claim}</div><div className="claim claim-back">{claimBacks[index]}</div></div></div>)}</div>
  </section>
}

function SwitchCallout() {
  return <section className="switch"><div><h2>Ready to Make the Switch?</h2><p>Join the movement toward a plastic-free future without<br />compromising on quality or performance.</p></div><Button variant="gold" href="#contact-page">Get a quote</Button></section>
}

function Products() {
  return <section className="products" id="products">
    <SectionHeading label="Sustainable product range"><h2>Four ranges. Every use case.</h2></SectionHeading>
    <div className="product-list">{products.map(({ icon, name, description }) => <article key={name}><span className="product-icon">{icon}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
  </section>
}

function FAQ() {
  return <section className="faq">
    <div><p className="kicker">Frequently asked questions</p>{faqs.map((question) => <details key={question}><summary>{question}<span>^</span></summary><p>Our products are designed for safe, responsible food service use.</p></details>)}</div>
    <div className="faq-images"><div className="faq-image one" /><div className="faq-image two" /></div>
  </section>
}

function Footer() {
  const columns = [
    { title: 'Navigate', links: [['Home', '#top'], ['About', '#about-page'], ['Products', '#products-page'], ['Certifications', '#certifications'], ['Contact', '#contact-page']] },
    { title: 'Products', links: [['Plates', '#products'], ['Bowls', '#products'], ['Compartment trays', '#products'], ['Cups & Clamshell box', '#products']] },
  ]

  return <footer id="contact">
    <a className="logo" href="#top"><span>B</span><small>BIOKRAFT</small></a>
    {columns.map(({ title, links }) => <div key={title}><h4>{title}</h4>{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
    <div><h4>Contact</h4><p>temaindustries.ltd@gmail.com</p><p>+91 8939099779</p><p>U T enim ad minim veniam, quis nostrud exercitation - 100001</p></div>
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

  return <main><Header page={page} />{pageContent}<Footer /></main>
}

export default App
