import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const products = [
    {
      id: 1,
      name: 'Healthy Foods',
      category: 'Food',
      description: 'Fresh, organic meal options prepared daily with wholesome ingredients. Perfect for those looking to maintain a balanced diet with delicious, nutrient-rich meals.'
    },
    {
      id: 2,
      name: 'Fresh Beverages',
      category: 'Beverages',
      description: 'Refreshing smoothies and fresh-pressed juices made with real fruits and vegetables. Each drink is packed with vitamins and natural energy to fuel your day.'
    },
    {
      id: 3,
      name: 'Supplements',
      category: 'Supplements',
      description: 'High-quality nutritional supplements to support your wellness goals. From amino acids to specialized formulas, we have everything you need to optimize your health.'
    },
    {
      id: 4,
      name: 'Protein Shakes',
      category: 'Beverages',
      description: 'Delicious protein-packed shakes in a variety of flavors. Perfect post-workout fuel or meal replacement with premium protein and essential nutrients.'
    },
    {
      id: 5,
      name: 'Organic Snacks',
      category: 'Food',
      description: 'Guilt-free snacking with our selection of organic treats and healthy alternatives. Perfect for on-the-go nutrition without compromising your health goals.'
    },
    {
      id: 6,
      name: 'Vitamins',
      category: 'Supplements',
      description: 'Premium vitamin supplements to fill nutritional gaps and boost your immune system. Carefully selected brands to ensure maximum potency and absorption.'
    },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <h1>Chiqui's Nutrition Center</h1>
          <button
            className={`burger-menu ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#food" onClick={() => setMenuOpen(false)}>Food</a>
          <a href="#beverages" onClick={() => setMenuOpen(false)}>Beverages</a>
          <a href="#classes" onClick={() => setMenuOpen(false)}>Classes</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </nav>
        <div className="contact-info">
          <p className="address">📍 123 Main Street, City, State 12345</p>
          <p className="phone">📞 (555) 123-4567</p>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Your Daily Boost Starts Here</h2>
          <p>Quality nutrition products for a healthier you</p>
        </section>

        <section className="products">
          <h2>Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-placeholder">
                  <span>Image</span>
                </div>
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="zumba-section">
          <h2>Zumba Classes</h2>
          <div className="zumba-content">
            <div className="zumba-image-placeholder">
              <span>Zumba Photo</span>
            </div>
            <div className="zumba-schedule">
              <h3>Class Schedule</h3>
              <div className="schedule-grid">
                <div className="schedule-item">
                  <span className="day">Monday</span>
                  <span className="time">6:00 PM - 7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Wednesday</span>
                  <span className="time">6:00 PM - 7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Friday</span>
                  <span className="time">5:30 PM - 6:30 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 10:00 AM</span>
                </div>
              </div>
              <button className="join-btn">Join a Class</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Chiqui's Nutrition Center. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
