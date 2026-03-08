import { useState } from 'react'
import './App.css'
import packageJson from '../package.json'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const foodText = 'Our fresh variety of menu perfect for those looking to maintain a balance diet with delicious, nutrient-protein shakes and smoothies, Cleanse, Energy and rejuvenate Teas';

  const supplementText = 'Boots your immune health with our Vitamins and Herbalife Supplements';
  const supplementText1 = 'High-quality nutritional supplements to support your wellness goals. We have everything you need to optimize your health.';
  const supplementText2 = 'Fuel your workouts with high- energy drinks designed to maximize performance and endurance.';

  const zumbaClassText1 = 'I worked at a manufacturing company until one day I had a terrible accident that fractured a disc in my back. I went through four surgeries and couldn\'t walk for six years. During that time, I had to use a cane and my weight went up to 185 pounds. After my last surgery, I met a woman who invited me to try a Zumba class. I thought, "Why not try?" From that moment on, everything started to change. Little by little, I began dancing again. Niki supported and encouraged me every step of the way on my journey to becoming an instructor.';
  const zumbaClassText2 = 'Today, I have been a Zumba instructor for 14 years. Like everyone, I have faced obstacles and difficult moments, but with God\'s help and the right motivation, I was able to overcome them. Life brings challenges for all of us, but Zumba helped free me from stress while getting in shape and enjoying the joy of dancing. If I can do it, you can too. Never give up on yourself.';
  const zumbaClassText3 = '💃 First Class Always Free!';


  const foodPhotos = [
    '/assets/photos/food/menu-protein-bowls.png',
    '/assets/photos/food/waffle.jpg',
    '/assets/photos/food/pie1.jpg',
    '/assets/photos/food/protein-cheescake.jpg',
    '/assets/photos/food/IMG_0655.JPG',
    '/assets/photos/food/panes.jpg',
    '/assets/photos/food/pie2.jpg',
    '/assets/photos/food/IMG_0686.JPG',
  ]

  const beveragePhotos = [
    '/assets/photos/beverages/menu-screen.jpg',
    '/assets/photos/beverages/coldcoffees.jpg',
    '/assets/photos/beverages/menu-drinks.png',
    '/assets/photos/beverages/spicy-pepino-drink.jpg',
    '/assets/photos/beverages/IMG_0597.JPG',
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
            <a href="#food" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('food-section')?.scrollIntoView({behavior: 'smooth'}); }}>Food</a>
            <a href="#beverages" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('beverages-section')?.scrollIntoView({behavior: 'smooth'}); }}>Beverages</a>
            <a href="#supplements" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('supplements-section')?.scrollIntoView({behavior: 'smooth'}); }}>Supplements</a>
            <a href="#classes" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('zumba-section')?.scrollIntoView({behavior: 'smooth'}); }}>Classes</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('footer')?.scrollIntoView({behavior: 'smooth'}); }}>Contact Us</a>
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
        <div className="second-slogan">Your Daily Boost Starts Here</div>
        <div className="contact-info">
          <p className="address">8028 SE Powell Blvd. Ste. #106</p>
          <p className="address">Portland, OR 97206</p>
          <p className="phone"><a href="tel:(503)935-6027">(503) 935-6027</a></p>
        </div>
      </section>

      <main className="main-content">

      <img src="/assets/photos/store-front.png" alt="Chiquis Nutrition Store" className="featured-image" />
      <p className="featured-caption">{`Chiqui's Nutrition in the SE Portland area is a health food spot serving protein shakes, bowls, waffles, and energy teas, post-workout fuel options focusing on fitness-oriented nutrition.`}</p>

        <section className="products" id="products">

          <div className="photo-section" id="food-section">
            <h2 className="pacifico-title gallery-title">Food</h2>
            <div className="photo-mosaic food-mosaic">
              {foodPhotos.map((src, i) => (
                <img key={i} src={src} alt="Food" className="mosaic-img" />
              ))}
            </div>
            <p className="featured-caption">{foodText}</p>
          </div>

          <div className="photo-section" id="beverages-section">
            <h2 className="pacifico-title gallery-title">Beverages</h2>
            <div className="photo-mosaic beverages-mosaic">
              {beveragePhotos.map((src, i) => (
                <img key={i} src={src} alt="Beverage" className="mosaic-img" />
              ))}
            </div>
          </div>

          <div className="photo-section" id="supplements-section">
            <h2 className="pacifico-title gallery-title">Supplements</h2>
            <div className="photo-mosaic supplements-mosaic">
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/supplements.jpg" alt="Supplement" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{supplementText}</p>
              </div>
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/vitamins.jpg" alt="Vitamins" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{supplementText1}</p>
              </div>
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/herbalife-trialpack.jpg" alt="Herbalife Trial Pack" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{supplementText2}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="zumba-section" id="zumba-section">
          <h2 className="pacifico-title">Zumba Classes</h2>
          <div className="zumba-content">
            <div className="zumba-image-placeholder">
              <img src="/assets/photos/zumba.jpg" alt="Zumba Teacher" className="zumba-image" />
            </div>
            <div className="zumba-schedule">
              <h3>About Instructor Maribel Zuñiga</h3>
              <p className="zumba-bio">{zumbaClassText1}</p>
              <p className="zumba-bio">{zumbaClassText2}</p>
              <p className="zumba-bio">{zumbaClassText3}</p>
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
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-section hours-section">
            <h3>Hours</h3>
            <div className="hours-list">
              <p><strong>Mon - Fri</strong>: 6AM - 1PM & 6PM - 9PM</p>
              <p><strong>Sat</strong>: 7AM - 1PM</p>
              <p><strong>Sun</strong>: Closed</p>
            </div>
          </div>

          <div className="footer-section location-section">
            <h3>Location</h3>
            <p>8028 SE Powell Blvd. Ste. #106</p>
            <p>Portland, OR 97206</p>
          </div>

          <div className="footer-section contact-section">
            <h3>Contact</h3>
            <p><a href="tel:(503)935-6027" className="phone-link">(503) 935-6027</a></p>
            <p><a href="mailto:chiquisnutritionpdx@gmail.com" className="email-link">chiquisnutritionpdx@gmail.com</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok" className="social-link">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://maps.google.com/?q=8028+SE+Powell+Blvd+Ste+106+Portland+OR+97206" target="_blank" rel="noopener noreferrer" title="Google Maps" className="social-link">
                <i className="fas fa-location-dot"></i>
              </a>
          </div>
          <div style={{lineHeight: 1.5, letterSpacing: 0.7}}>
            <p>&copy; {new Date().getFullYear()} Chiqui's Nutrition.&nbsp;&nbsp;&nbsp;All rights reserved.</p>
            <p>Made with <span style={{color: '#ff69b4'}}>❤</span> by <a href="https://fabiovalentino.com" target="_blank" rel="noopener noreferrer" className="credit-link"><strong>Valentronix</strong></a></p>
            <p><span style={{fontFamily: 'monospace'}}>v{packageJson.version}</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
