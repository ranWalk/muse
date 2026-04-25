import { useState } from 'react';

const languageOptions = [
  { code: 'en-GB', label: 'United Kingdom', flagSrc: '/flags/gb-circle.svg', flagAlt: 'United Kingdom flag' },
  { code: 'en-US', label: 'United States', flagSrc: '/flags/us-circle.svg', flagAlt: 'United States flag' },
  { code: 'de-DE', label: 'Germany', flagSrc: '/flags/de-circle.svg', flagAlt: 'Germany flag' },
];

const navItems = [
  'Display',
  'Sex Toys',
  'For Her',
  'For Him',
  'For Couples',
  'Sex Lingerie',
  'Lubs & Wellness',
  'About Us',
  'Advice',
];

const categoryIcons = [
  { label: 'Vibrator', src: '/icon-1.png' },
  { label: 'Dildo', src: '/icon-2.png' },
  { label: 'Silicone Doll', src: '/icon-3.png', tinted: true },
  { label: 'Sex Lingerie', src: '/icon-4.png', tinted: true },
  { label: 'Bondage', src: '/icon-5.png', tinted: true },
  { label: 'Condoms', src: '/icon-6.png' },
  { label: 'Masturbator', src: '/icon-7.png' },
];

const featureHighlights = [
  '/feature-icon-1.png',
  '/feature-icon-2.png',
  '/feature-icon-3.png',
];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0].code);
  const activeLanguage =
    languageOptions.find((option) => option.code === selectedLanguage) ?? languageOptions[0];

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <div className="topbar__spacer" />

          <div className="topbar__actions">
            <a className="topbar__whatsapp" href="https://wa.me/8617203836652">
              Whatsapp:8617203836652
            </a>

            <label className="topbar__language" aria-label="Select language or region">
              <span className="topbar__flag">
                <img
                  className="topbar__flag-image"
                  src={activeLanguage.flagSrc}
                  alt={activeLanguage.flagAlt}
                />
              </span>
              <select value={selectedLanguage} onChange={(event) => setSelectedLanguage(event.target.value)}>
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>

      <section className="masthead">
        <div className="masthead__inner">
          <div className="brand-block">
            <a className="brand-logo" href="/" aria-label="AylaMuse home">
              <span className="brand-logo__plate" aria-hidden="true" />
              <img className="brand-logo__image" src="/aylamuse.svg" alt="AylaMuse" />
            </a>
            <p className="brand-slogan">AylaMuse-For the muse in you</p>
          </div>

          <form className="search-form" role="search">
            <input
              className="search-form__input"
              type="search"
              placeholder="Search products, ideas, and collections"
              aria-label="Search products"
            />
            <button className="search-form__button" type="submit" aria-label="Search">
              <span className="search-form__icon" aria-hidden="true" />
            </button>
          </form>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} className="main-nav__link" href="/">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="banner-divider" aria-hidden="true" />

      <section className="hero-banner" aria-label="Homepage featured banner">
        <div className="hero-banner__backdrop" />

        <img className="hero-banner__product hero-banner__product--black-red" src="/banner-product-black-red.png" alt="" />
        <img className="hero-banner__product hero-banner__product--green" src="/banner-product-green.png" alt="" />
        <img className="hero-banner__product hero-banner__product--rabbit" src="/banner-product-rabbit.png" alt="" />
        <img className="hero-banner__product hero-banner__product--pink-curve" src="/banner-product-pink-curve.png" alt="" />

        <div className="hero-banner__bubble hero-banner__bubble--top-left">
          <img className="hero-banner__bubble-image" src="/bubble-top-left.png" alt="" />
          <span>If I am small size, what toys shall i use?</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--left-mid hero-banner__bubble--pink">
          <img className="hero-banner__bubble-image" src="/bubble-left-mid.png" alt="" />
          <span>what is a fleshlight?</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--left-bottom">
          <img className="hero-banner__bubble-image" src="/bubble-left-bottom.png" alt="" />
          <span>Do you have smart sex toys?</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--center-left">
          <img className="hero-banner__bubble-image" src="/bubble-center-left.png" alt="" />
          <span>Ask us ANYTHING</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--right-top hero-banner__bubble--pink">
          <img className="hero-banner__bubble-image" src="/bubble-right-top.png" alt="" />
          <span>Do women prefer vibrators?</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--right-mid">
          <img className="hero-banner__bubble-image" src="/bubble-right-mid.png" alt="" />
          <span>Are there toys for men?</span>
        </div>

        <div className="hero-banner__bubble hero-banner__bubble--right-bottom">
          <img className="hero-banner__bubble-image" src="/bubble-right-bottom.png" alt="" />
          <span>Why is lovense lush so popular?</span>
        </div>

        <div className="hero-banner__choice-panel">
          <a className="hero-banner__choice hero-banner__choice--her" href="/">
            FOR HER
          </a>
          <a className="hero-banner__choice hero-banner__choice--him" href="/">
            FOR HIM
          </a>
        </div>
      </section>

      <section className="category-strip" aria-label="Popular product categories">
        <div className="category-strip__inner">
          {categoryIcons.map((item) => (
            <article key={item.label} className="category-strip__item">
              <img
                className={`category-strip__icon${item.tinted ? ' category-strip__icon--tinted' : ''}`}
                src={item.src}
                alt=""
              />
              <span className="category-strip__label">{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-showcase" aria-label="G-spot massage product feature">
        <div className="feature-showcase__backdrop" />

        <div className="feature-showcase__stage">
          <div className="feature-showcase__product-zone" aria-hidden="true">
            <span className="feature-showcase__halo feature-showcase__halo--large" />
            <span className="feature-showcase__halo feature-showcase__halo--small" />
            <img className="feature-showcase__base" src="/feature-product-base.png" alt="" />
            <img
              className="feature-showcase__heat"
              src="/feature-heat-effect.png"
              alt=""
            />
            <img
              className="feature-showcase__product"
              src="/feature-product-main.png"
              alt=""
            />
          </div>

          <div className="feature-showcase__info">
            <div className="feature-showcase__text-box">
              <p className="feature-showcase__eyebrow">G-spot massage</p>
              <h2 className="feature-showcase__title">Female masturbation vibrator</h2>

              <ul className="feature-showcase__copy">
                <li className="feature-showcase__line">
                  10 frequency tongue licking+10 frequency vibration+6 frequency stretching
                </li>
                <li className="feature-showcase__line">
                  Stable, strong, low-noise, light tone, high-frequency tremor
                </li>
                <li className="feature-showcase__line">
                  8000 sensitive nerves precisely wrapped for stimulation
                </li>
              </ul>

              <p className="feature-showcase__tagline">Enjoy the joy of a pile driver</p>
            </div>
          </div>

          <div className="feature-showcase__highlights" aria-label="Product detail views">
            {featureHighlights.map((src, index) => (
              <span key={src} className={`feature-showcase__highlight-shell feature-showcase__highlight-shell--${index + 1}`}>
                <span className="feature-showcase__highlight-ring" aria-hidden="true" />
                <img
                  className="feature-showcase__highlight"
                  src={src}
                  alt={`Product detail view ${index + 1}`}
                />
              </span>
            ))}
          </div>

          <a className="feature-showcase__button" href="/">
            <span className="feature-showcase__button-label">VIEW DETAILS</span>
            <span className="feature-showcase__button-icon" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
