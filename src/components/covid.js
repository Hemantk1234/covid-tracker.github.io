import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19api.com/summary");
      const actualData = await res.json();
      console.log(actualData.Countries[77]);
      setData(actualData.Countries[77]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getCovidData();
  }, []);

  return (
    <>
      <main>
        <article>
          {/* Landing page */}
          <section
            className="section hero has-bg-image section-bg"
            id="home"
            aria-label="home"
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">COVID-19 Tracker</h1>
                <p className="hero-text">Tatal Corona Cases In India</p>
                <data className="counter" value={data.TotalConfirmed}>
                  {data.TotalConfirmed}
                </data>
                <ul className="hero-list">
                  <li className="hero-list-item yellow">
                    Total Deaths <span className="span">{data.TotalDeaths}</span>
                  </li>
                  <li className="hero-list-item green">
                    Total Recovered <span className="span">{data.TotalRecovered}</span>
                  </li>
                  <li className="hero-list-item red">
                    New Confirmed <span className="span">{data.NewConfirmed}</span>
                  </li>
                  <li className="hero-list-item red">
                    New Deaths <span className="span">{data.NewDeaths}</span>
                  </li>
                  <li className="hero-list-item red">
                    New Recovered <span className="span">{data.NewRecovered}</span>
                  </li>
                  <li className="hero-list-item red">
                    Last Updated <span className="span">{data.Date}</span>
                  </li>
                </ul>
                <a href="https://covid19.who.int/" target="blank" className="btn btn-primary" title="Click here">
                  For More Info
                </a>
              </div>
              <figure className="hero-banner">
                <img
                  src=""
                  alt=""
                  className="w-100 animated-img"
                  width={570}
                  height={562}
                />
              </figure>
            </div>
          </section>
        </article>
      </main>

      {/* FOOTER */}
      <footer
        className="footer has-bg-image">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <h3 className="h4 footer-list-title">About Covid-19</h3>
              <p className="footer-text text">
                I believe in Simple Creative and Flexible Design Standards.
              </p>
              <ul className="contact-list">
                <li className="contact-item">
                  <p className="contact-title">Headquarters:</p>
                  <address className="address text">
                    Nagpur - 400001, Maharashtra, India
                  </address>
                </li>
                <li className="contact-item">
                  <p className="contact-title">Phone:</p>
                  <a href="tel:+524623435643" className="text">
                    (+91) 90755 *****
                  </a>
                </li>
                <li className="contact-item">
                  <p className="contact-title">Email:</p>
                  <a href="mailto:info@covid-19.com" className="text">
                    hemantkumbhalkar5@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-list-title">Navigate</h3>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Advertisers
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Developers
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Resources
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Company
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Connect
                </a>
              </li>
            </ul>
            <ul className="footer-list social-list">
              <li>
                <h3 className="h4 footer-list-title">Social Contact</h3>
              </li>
              <li className="footer-list-item">
                <ion-icon name="logo-facebook" aria-hidden="true" />
                <a href="https://www.facebook.com/hemant.kumbhalkar.581/" className="footer-link">
                  Facebook
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="logo-twitter" aria-hidden="true" />
                <a href="https://twitter.com/HemantkEtc116" className="footer-link">
                  Twitter
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="logo-instagram" aria-hidden="true" />
                <a href="https://www.instagram.com/hemant_k_116/" className="footer-link">
                  Instagram
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="logo-youtube" aria-hidden="true" />
                <a href="https://github.com/Hemantk1234" className="footer-link">
                  Github
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="logo-xing" aria-hidden="true" />
                <a href="https://www.linkedin.com/in/hemant-kumbhalkar-87393b235/" className="footer-link">
                  Linkedin
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-list-title">Privacy And Policy</h3>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Advertiser Agreement
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Acceptable Use Policy
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Technology Privacy
                </a>
              </li>
              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true" />
                <a href="#" className="footer-link">
                  Developer Agreement
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              © 2023 All Rights Reserved. Developed by Hemant
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Covid;
