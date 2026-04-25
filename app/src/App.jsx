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

const popularRecommendations = [
  { label: 'Rabbit Vibrator', src: '/popular-product-1.png' },
  { label: 'Clitoral Stimulator', src: '/popular-product-2.png' },
  { label: 'Clitoral Massage Vibrator', src: '/popular-product-3.png' },
  { label: "Couple's Vibrator", src: '/popular-product-4.png' },
  { label: 'Realistic Dildo', src: '/popular-product-5.png' },
  { label: 'Bullet Vibrator', src: '/popular-product-6.png' },
  { label: 'Tongue Licking Vibrator', src: '/popular-product-7.png' },
  { label: 'Clitoral Massager', src: '/popular-product-8.png' },
];

const maleRecommendations = [
  {
    title: 'MASTURBATOR HIGH STIMULATION',
    copy: [
      'soft like young girl skin',
      'textured sensation',
      '5D internal textured tunne',
    ],
    src: '/male-product-1.png',
    alt: 'Black masturbator product',
    reverse: false,
  },
  {
    title: 'PENILE STRETCHING TRAINER',
    copy: [
      'Comfortable and practical, sturdy and durable',
      'Durable and suitable for all sizes',
    ],
    src: '/male-product-2.png',
    alt: 'Penile stretching trainer product',
    reverse: true,
  },
  {
    title: 'VIBRATING SILICONE PROSTATE',
    copy: [
      'wireless remote control',
      'Charging range',
      'Seven frequency strong earthquake',
      'Low noise privacy',
      'soft material',
      'Water-resistant for daily use',
    ],
    src: '/male-product-3.png',
    alt: 'Black silicone prostate vibrator',
    reverse: false,
  },
];

const womenGridRecommendations = [
  {
    title: 'Corn vibrating egg sex vibrator',
    copy: [
      'Adjustable depth control',
      'Double the coolness of the particles',
      'Multiple vibration sensations',
    ],
    src: '/women-product-corn.png',
    alt: 'Corn vibrating egg sex vibrator',
  },
  {
    title: 'Vibration stick female masturbator',
    copy: [
      'Adhere to sensitive points',
      'Satisfy internal and external pleasure',
      'numbing strong shock',
    ],
    src: '/women-product-v.png',
    alt: 'Vibration stick female masturbator',
  },
  {
    title: 'Mini Teaser Couple foreplayMasturbator',
    copy: [
      'Finger wearing',
      'Stimulating female organs',
      'Compact and exquisite',
    ],
    src: '/women-product-mini.png',
    alt: 'Mini teaser couple foreplay product',
  },
  {
    title: 'Sexy flirtatious lingerie hollow mesh',
    copy: [
      'Low light, high vibes',
      'Your silhouette, sharpened',
      'Designed to be seen',
    ],
    src: '/women-product-model.png',
    alt: 'Sexy flirtatious lingerie hollow mesh',
  },
];

const trustHighlights = [
  {
    lines: [
      [
        { text: 'Over 10,000+', accent: false },
        { text: ' real', accent: true },
      ],
      [
        { text: 'reviews', accent: true },
        { text: ' offline', accent: false },
      ],
    ],
  },
  {
    lines: [
      [
        { text: 'we are ', accent: false },
        { text: 'always', accent: true },
        { text: ' in the', accent: false },
      ],
      [
        { text: 'exhibition', accent: true },
      ],
    ],
  },
  {
    lines: [
      [
        { text: 'But, of course your', accent: false },
      ],
      [
        { text: 'privacy', accent: true },
        { text: ' is guaranteed', accent: false },
      ],
    ],
  },
  {
    lines: [
      [
        { text: 'It will become the reason', accent: false },
      ],
      [
        { text: 'for your most ', accent: false },
        { text: 'correct', accent: true },
        { text: ' choice', accent: false },
      ],
    ],
  },
];

const reviewCards = [
  {
    body:
      '"AylaMuse has one of its kind and amazing customer support. delivers what they promised. There is no need to go to other fraudulent sellers. Prices seem high due to costly import duties. But they work hard toreduce costs, and offers premium adult toys at best prices. Truly, this is trust worthy adult brand ."',
    author: 'Gurtej',
  },
  {
    body:
      '"Her passion, dedication, and proactiveness ensured my queries were resolved, and even out-of-stocksex toy was delivered promptly. Their after sales service reflects excellence and position them as a market leader."',
    author: 'Kirti',
  },
  {
    body:
      '"I am glad thet has madeit possible to get branded sex toys that everyone internationally talks about. Ordered AylaMuse Prostate Masturbator and the product was perfect directly from the brand. GladI dont have to worry about anything else when I am ordering as its very discreet."',
    author: 'Harsh',
  },
  {
    body:
      '"I was afraid to buy sex toy because of my experience with fake sites. But,when I landed at AylaMuse\'selectronic store, I had to place my order. My order was delayed, so I had to contact their customer service team. They expedited the shipping and I received my order with a free gift."',
    author: 'Aditya',
  },
  {
    body:
      '"This my 2nd review & my 3rd order with AylaMuse. They sell genuine sex toys, so I purchased couples of toys available and Received quickly good packaging . Thanks to AylaMuse."',
    author: 'Tony',
  },
  {
    body:
      '"I was looking for Anal Toy and cameto AylaMuse website. I decided to chat with them and damn was amaze by the response I got. They are so helpful to guide you and help you select the perfect oy for you. Loved the support from them, thank you so much."',
    author: 'Praveen',
  },
];

const sexEdCards = [
  {
    title: 'All You Need to Know About Erogenous Zones',
    src: '/edu-card-1.png',
    light: false,
  },
  {
    title: 'Is It OK to Masturbate in a Relationship?',
    src: '/edu-card-2.png',
    light: false,
  },
  {
    title: 'How to Spice Up Your Marriage After 20+ Years',
    src: '/edu-card-3.png',
    light: true,
  },
  {
    title: 'Penis Size Anxiety: Does Penis Size Really Matter?',
    src: '/edu-card-4.png',
    light: true,
  },
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

      <section className="popular-banner" aria-label="Popular recommendation products">
        <div className="popular-banner__backdrop" />

        <div className="popular-banner__inner">
          <h2 className="popular-banner__title">Popular Recommendation</h2>

          <div className="popular-banner__grid">
            {popularRecommendations.map((item) => (
              <article key={item.label} className="popular-banner__card">
                <div className="popular-banner__image-shell">
                  <img className="popular-banner__image" src={item.src} alt={item.label} />
                </div>
                <h3 className="popular-banner__label">{item.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="male-banner" aria-label="Popular recommendation for men">
        <div className="male-banner__backdrop" />

        <div className="male-banner__inner">
          <h2 className="male-banner__title">Popular Recommendation</h2>

          <div className="male-banner__rows">
            {maleRecommendations.map((item) => (
              <article
                key={item.title}
                className={`male-banner__row${item.reverse ? ' male-banner__row--reverse' : ''}`}
              >
                <div className="male-banner__copy-block">
                  <h3 className="male-banner__headline">{item.title}</h3>

                  <div className="male-banner__copy">
                    {item.copy.map((line) => (
                      <p key={line} className="male-banner__copy-line">
                        {line}
                      </p>
                    ))}
                  </div>

                  <a className="male-banner__button" href="/">
                    <span className="male-banner__button-label">VIEW DETAILS</span>
                    <span className="male-banner__button-icon" aria-hidden="true" />
                  </a>
                </div>

                <div className="male-banner__product-shell">
                  <img className="male-banner__product" src={item.src} alt={item.alt} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="women-grid-banner" aria-label="Popular recommendation products for women">
        <div className="women-grid-banner__backdrop" />

        <div className="women-grid-banner__inner">
          <h2 className="women-grid-banner__title">Popular Recommendation</h2>

          <div className="women-grid-banner__grid">
            {womenGridRecommendations.map((item) => (
              <article key={item.title} className="women-grid-banner__card">
                <img className="women-grid-banner__image" src={item.src} alt={item.alt} />

                <div className="women-grid-banner__copy">
                  <h3 className="women-grid-banner__headline">{item.title}</h3>

                  <div className="women-grid-banner__lines">
                    {item.copy.map((line) => (
                      <p key={line} className="women-grid-banner__line">
                        {line}
                      </p>
                    ))}
                  </div>

                  <a className="women-grid-banner__button" href="/">
                    <span className="women-grid-banner__button-label">VIEW DETAILS</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-banner" aria-label="Customer trust and reviews">
        <div className="trust-banner__inner">
          <div className="trust-banner__messages">
            {trustHighlights.map((item, index) => (
              <article key={index} className={`trust-banner__message trust-banner__message--${index + 1}`}>
                <div className="trust-banner__message-copy">
                  {item.lines.map((line, lineIndex) => (
                    <span key={lineIndex} className="trust-banner__line-row">
                      {line.map((part, partIndex) => (
                        <span
                          key={`${lineIndex}-${partIndex}`}
                          className={`trust-banner__line${part.accent ? ' trust-banner__line--accent' : ''}`}
                        >
                          {part.text}
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-banner" aria-label="Real reviews">
        <div className="reviews-banner__inner">
          <h2 className="reviews-banner__title">Real Reviews</h2>

          <div className="reviews-banner__grid">
            {reviewCards.map((item) => (
              <article key={`${item.author}-${item.body.slice(0, 18)}`} className="reviews-banner__card">
                <p className="reviews-banner__body">{item.body}</p>

                <div className="reviews-banner__stars" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="reviews-banner__star-box" aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                <p className="reviews-banner__author">by {item.author}</p>

                <div className="reviews-banner__rating-bar">
                  <span className="reviews-banner__rating-label">Rated 4.8 / 5 | 692 reviews</span>
                </div>
              </article>
            ))}
          </div>

          <a className="reviews-banner__button" href="/">
            VIEW MORE
          </a>
        </div>
      </section>

      <section className="sex-ed-banner" aria-label="Sex education topics">
        <div className="sex-ed-banner__inner">
          <h2 className="sex-ed-banner__title">Sex-Ed We All Need</h2>

          <div className="sex-ed-banner__grid">
            {sexEdCards.map((item) => (
              <article key={item.title} className="sex-ed-banner__card">
                <img className="sex-ed-banner__image" src={item.src} alt={item.title} />
                <div className={`sex-ed-banner__label${item.light ? ' sex-ed-banner__label--light' : ''}`}>
                  <h3 className="sex-ed-banner__label-text">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
