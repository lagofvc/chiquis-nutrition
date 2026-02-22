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
      description: 'Fresh, organic meal options prepared daily with wholesome ingredients. Perfect for those looking to maintain a balanced diet with delicious, nutrient-rich meals.',
      image: '/assets/photos/IMG_0412.JPG'
    },
    {
      id: 3,
      name: 'Supplements',
      category: 'Supplements',
      description: 'High-quality nutritional supplements to support your wellness goals. From amino acids to specialized formulas, we have everything you need to optimize your health.',
      image: '/assets/photos/IMG_0510.JPG'
    },
    {
      id: 4,
      name: 'Protein Shakes',
      category: 'Beverages',
      description: 'Delicious protein-packed shakes in a variety of flavors. Perfect post-workout fuel or meal replacement with premium protein and essential nutrients.',
      image: '/assets/photos/IMG_1663.JPEG'
    },
    {
      id: 5,
      name: 'Organic Snacks',
      category: 'Food',
      description: 'Guilt-free snacking with our selection of organic treats and healthy alternatives. Perfect for on-the-go nutrition without compromising your health goals.',
      image: '/assets/photos/att.Mj2mceoNVfxTgrCPRJWarzKJ9HqUW6KoQfsM9qnFkPU.JPG'
    },
    {
      id: 6,
      name: 'Vitamins',
      category: 'Supplements',
      description: 'Premium vitamin supplements to fill nutritional gaps and boost your immune system. Carefully selected brands to ensure maximum potency and absorption.',
      image: '/assets/photos/IMG_0461.JPG'
    },
    {
      id: 7,
      name: 'Energy Boosters',
      category: 'Supplements',
      description: 'Powerful energy supplements to keep you active throughout the day. Natural ingredients to enhance stamina and mental focus.',
      image: '/assets/photos/IMG_1662.JPEG'
    },
    {
      id: 8,
      name: 'Wellness Combos',
      category: 'Food',
      description: 'Complete wellness meal packages designed to meet all your nutritional needs in one convenient bundle.',
      image: '/assets/photos/IMG_0072.JPG'
    },
    {
      id: 9,
      name: 'Detox Juices',
      category: 'Beverages',
      description: 'Cleanse and rejuvenate with our specially formulated detox juices made from premium organic ingredients.',
      image: '/assets/photos/dfdcb46100afc3a736a7df7924e6aca6.JPEG'
    },
    {
      id: 10,
      name: 'Pre-Workout Drinks',
      category: 'Beverages',
      description: 'Fuel your workouts with high-energy drinks designed to maximize performance and endurance.',
      image: '/assets/photos/FullSizeRender 2.JPG'
    },
    {
      id: 11,
      name: 'Special Blends',
      category: 'Supplements',
      description: 'Exclusive supplement blends crafted with care to target specific health and fitness goals.',
      image: '/assets/photos/Screenshot 2026-02-21 at 6.33.31 PM.png'
    },
    {
      id: 12,
      name: 'Meal Prep Kits',
      category: 'Food',
      description: 'Pre-portioned meal kits ready to prepare, combining convenience with nutritional excellence.',
      image: '/assets/photos/IMG_0686.JPG'
    },
    {
      id: 13,
      name: 'Basic Combos',
      category: 'Food',
      description: 'Affordable and delicious basic combination meals perfect for everyday nutrition.',
      image: '/assets/photos/Basic Combos_20260202_213339_0000.PNG'
    },
    {
      id: 14,
      name: 'Premium Selection',
      category: 'Supplements',
      description: 'Our top-tier selection of the finest nutritional supplements available on the market.',
      image: '/assets/photos/FullSizeRender.JPG'
    },
    {
      id: 15,
      name: 'Smoothie Packs',
      category: 'Beverages',
      description: 'Convenient smoothie ingredients bundled together for quick, nutritious drinks at home.',
      image: '/assets/photos/IMG_0655.JPG'
    },
    {
      id: 16,
      name: 'Recovery Supplements',
      category: 'Supplements',
      description: 'Post-workout recovery products to help your muscles rebuild and restore energy levels.',
      image: '/assets/photos/att.edLV7QTErcZlRsss7cdkpqNe7xwuLzZyAeBmB7vC-mk.JPEG'
    },
    {
      id: 17,
      name: 'Fitness Bundles',
      category: 'Food',
      description: 'Complete nutrition bundles designed specifically for fitness enthusiasts and athletes.',
      image: '/assets/photos/Screenshot_20260204_221254_Canva.jpg'
    },
    {
      id: 18,
      name: 'Weight Management',
      category: 'Beverages',
      description: 'Specially formulated beverages to support healthy weight management and nutritional balance.',
      image: '/assets/photos/IMG_0597.JPG'
    },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="header-left">
            <img src="/assets/logo/chiquisLogo_simple.png" alt="Chiqui's Logo" className="header-logo" />
            <div className="header-text">
              <h1><span className="header-chiquis">Chiqui's</span> <span className="header-nutrition">Nutrition</span></h1>
              <p className="header-slogan">Your Daily Boost Starts Here</p>
            </div>
          </div>
          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#food" onClick={() => setMenuOpen(false)}>Food</a>
            <a href="#beverages" onClick={() => setMenuOpen(false)}>Beverages</a>
            <a href="#classes" onClick={() => setMenuOpen(false)}>Classes</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>
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
      </header>

      <section className="logo-section">
        <img src="/assets/logo/Chiquis_Full_Color_Logo.png" alt="Chiquis Full Color Logo" className="main-logo" />
        <div className="second-slogan">Quality nutrition products for a healthier you</div>
        <div className="contact-info">
          <p className="address">8028 SE Powell Blvd. Ste. #106</p>
          <p className="address">Portland, OR 97206</p>
          <p className="phone">(503) 935-6027</p>
        </div>
      </section>

      <main className="main-content">

        <section className="products">
          <h2 className="pacifico-title">Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-placeholder">
                  <img src={product.image} alt={product.name} className="product-image" />
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
          <h2 className="pacifico-title">Zumba Classes</h2>
          <div className="zumba-content">
            <div className="zumba-image-placeholder">
              <img src="/assets/photos/ZumbaTeacher.PNG" alt="Zumba Teacher" className="zumba-image" />
            </div>
            <div className="zumba-schedule">
              <h3>Class Schedule</h3>
              <div className="schedule-grid">
                <div className="schedule-item">
                  <span className="day">Monday</span>
                  <span className="time">7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Wednesday</span>
                  <span className="time">7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">Saturday</span>
                  <span className="time">1:00 PM</span>
                </div>
              </div>
              <button className="join-btn">Join a Class</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Chiqui's Nutrition. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
