import { useState } from 'react'
import './App.css'
import packageJson from '../package.json'
import { englishText, spanishText } from './text.js'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('en')

  const t = lang === 'en' ? englishText : spanishText

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

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
              <p className={`header-slogan${lang === 'es' ? ' header-slogan--es' : ''}`}>{t.slogan}</p>
            </div>
          </div>
          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <a href="#food" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('food-section')?.scrollIntoView({behavior: 'smooth'}); }}>{t.nav.food}</a>
            <a href="#beverages" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('beverages-section')?.scrollIntoView({behavior: 'smooth'}); }}>{t.nav.beverages}</a>
            <a href="#supplements" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('supplements-section')?.scrollIntoView({behavior: 'smooth'}); }}>{t.nav.supplements}</a>
            <a href="#classes" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('zumba-section')?.scrollIntoView({behavior: 'smooth'}); }}>{t.nav.classes}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('footer')?.scrollIntoView({behavior: 'smooth'}); }}>{t.nav.contact}</a>
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

      <div className="lang-toggle-bar">
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
            title="English"
            aria-label="Switch to English"
          >
            {/* <div className="flag-circle"><FlagUS /></div> */}
            <img src="/assets/photos/flags/usa.png" alt="USA Flag English" style={{borderRadius: 125, height: 40, width: 40}} />
            <span className="lang-label">EN</span>
          </button>
          <button
            className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
            onClick={() => setLang('es')}
            title="Español"
            aria-label="Cambiar a Español"
          >
            <img src="/assets/photos/flags/spain.png" alt="Spain Flag Spanish" style={{borderRadius: 125, height: 40, width: 40}} />
            <span className="lang-label">ES</span>
          </button>
        </div>
      </div>

      <section className="logo-section">
        <img src="/assets/logo/Chiquis_Full_Color_Logo.png" alt="Chiquis Full Color Logo" className="main-logo" />
        <div className="second-slogan">{t.slogan}</div>
        <div className="contact-info">
          <p className="address">{t.address1}</p>
          <p className="address">{t.address2}</p>
          <p className="phone"><a href="tel:(503)935-6027">{t.phone}</a></p>
        </div>
      </section>

      <main className="main-content">

      <img src="/assets/photos/store-front.png" alt="Chiquis Nutrition Store" className="featured-image" />
      <p className="featured-caption">{t.featuredCaption}</p>

        <section className="products" id="products">

          <div className="photo-section" id="food-section">
            <h2 className="pacifico-title gallery-title">{t.foodTitle}</h2>
            <div className="photo-mosaic food-mosaic">
              {foodPhotos.map((src, i) => (
                <img key={i} src={src} alt="Food" className="mosaic-img" />
              ))}
            </div>
            <p className="featured-caption">{t.foodCaption}</p>
          </div>

          <div className="photo-section" id="beverages-section">
            <h2 className="pacifico-title gallery-title">{t.beveragesTitle}</h2>
            <div className="photo-mosaic beverages-mosaic">
              {beveragePhotos.map((src, i) => (
                <img key={i} src={src} alt="Beverage" className="mosaic-img" />
              ))}
            </div>
          </div>

          <div className="photo-section" id="supplements-section">
            <h2 className="pacifico-title gallery-title">{t.supplementsTitle}</h2>
            <div className="photo-mosaic supplements-mosaic">
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/supplements.jpg" alt="Supplement" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{t.supplementCaption1}</p>
              </div>
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/vitamins.jpg" alt="Vitamins" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{t.supplementCaption2}</p>
              </div>
              <div className="mosaic-item">
                <img src="/assets/photos/supplements/herbalife-trialpack.jpg" alt="Herbalife Trial Pack" className="mosaic-img" />
                <p className="zumba-bio mosaic-caption">{t.supplementCaption3}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="zumba-section" id="zumba-section">
          <h2 className="pacifico-title">{t.zumbaTitle}</h2>
          <div className="zumba-content">
            <div className="zumba-image-placeholder">
              <img src="/assets/photos/zumba.jpg" alt="Zumba Teacher" className="zumba-image" />
            </div>
            <div className="zumba-schedule">
              <h3>{t.zumbaInstructorTitle}</h3>
              <p className="zumba-bio">{t.zumbaBio1}</p>
              <p className="zumba-bio">{t.zumbaBio2}</p>
              <p className="zumba-bio">{t.zumbaBio3}</p>
              <h3>{t.zumbaScheduleTitle}</h3>
              <div className="schedule-grid">
                <div className="schedule-item">
                  <span className="day">{t.days.monday}</span>
                  <span className="time">7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">{t.days.wednesday}</span>
                  <span className="time">7:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="day">{t.days.saturday}</span>
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
            <h3>{t.hoursTitle}</h3>
            <div className="hours-list">
              <p><strong>{t.hoursMonFri}</strong>: {t.hoursMonFriTime}</p>
              <p><strong>{t.hoursSat}</strong>: {t.hoursSatTime}</p>
              <p><strong>{t.hoursSun}</strong>: {t.hoursSunValue}</p>
            </div>
          </div>

          <div className="footer-section location-section">
            <h3>{t.locationTitle}</h3>
            <p>{t.address1}</p>
            <p>{t.address2}</p>
          </div>

          <div className="footer-section contact-section">
            <h3>{t.contactTitle}</h3>
            <p><a href="tel:(503)935-6027" className="phone-link">{t.phone}</a></p>
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
            <p>&copy; {new Date().getFullYear()} Chiqui's Nutrition.&nbsp;&nbsp;&nbsp;{t.copyright}</p>
            <p>{t.madeWith} <span style={{color: '#ff69b4'}}>❤</span> {t.madeBy} <a href="https://fabiovalentino.com" target="_blank" rel="noopener noreferrer" className="credit-link"><strong>Valentronix</strong></a></p>
            <p><span style={{fontFamily: 'monospace'}}>v{packageJson.version}</span></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
