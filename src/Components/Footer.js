import React from "react";

import "../Css/footer.css";

import footer from "../images/footer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-6">
                <div>
                  <h6 className="py-2">LIBRARY</h6>
                  <ul className="p-0">
                    <li>
                      <a href="#"></a>Blog
                    </li>
                    <li>
                      <a href="#"></a>Assessments
                    </li>
                  </ul>
                  <h6 className="py-2">THERAPY</h6>
                  <ul className="p-0">
                    <li>
                      <a href="#"></a>Therapists
                    </li>
                    <li>
                      <a href="#"></a>Marriage Counselling
                    </li>
                    <li>
                      <a href="#"></a>Join Our Network
                    </li>
                  </ul>
                  <h6 className="py-2">AREAS</h6>
                  <ul className="p-0">
                    <li>
                      <a href="#"></a>Depression
                    </li>
                    <li>
                      <a href="#"></a>Stress
                    </li>
                    <li>
                      <a href="#"></a>Anxiety
                    </li>
                    <li>
                      <a href="#"></a>Sleep
                    </li>
                    <li>
                      <a href="#"></a>Anger
                    </li>
                    <li>
                      <a href="#"></a>Happiness
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div>
                  <h6 className="py-2">PARTNERSHIPS</h6>
                  <ul className="p-0">
                    <li>Employers</li>
                    <li>Schools</li>
                  </ul>
                  <h6 className="py-2">TRY OUR ACTIVITIES</h6>
                  <ul className="p-0">
                    <li>PMR</li>
                    <li>Deep Breathing</li>
                    <li>Guided Imagery</li>
                    <li>Beach Visualisation</li>
                    <li>Self-Compassion</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div>
                  <h6 className="py-2">ABOUT US</h6>
                  <ul className="p-0">
                    <li>What is InnerHouse</li>
                    <li>Team</li>
                    <li>Careers</li>
                  </ul>
                  <h6 className="py-2">HELP</h6>
                  <ul className="p-0">
                    <li>FAQS</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="Footer_img">
                  <h6 className="py-2 text-center">
                    Build a good life for yourself with InnerHour
                  </h6>
                  <img src={footer} />
                  <a
                    href="#"
                    className="btn btn-dark round-footer-button btn-block"
                  >
                    DOWNLOAD NOW
                  </a>
                </div>
              </div>
            </div>
            {/* End Of Row1 */}
            <div className="row row_2 copyright">
              <div className="col-md-6 ">
                <span className="copyright-section">
                  © <span className="update-year"></span> InnerHour
                </span>
                <a className="copyright-section  " href="/privacy-policy">
                  Privacy Policy
                </a>

                <a className="copyright-section " href="/terms-and-conditions">
                  Terms &amp; Conditions
                </a>
                <a className="copyright-section " href="/sitemap">
                  Sitemap
                </a>
              </div>
              <div className="col-md-6 ">
                <ul className="social_icons">
                  <li>
                    <a href="#" className="icons">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icons">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icons">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Of Container */}
          <div className="container disclaimer">
            <div className="row row_3">
              <div className="col-12">
                <p>
                  InnerHour does not deal with medical or psychological
                  emergencies. We are not designed to offer support in crisis
                  situations - including when an individual is experiencing
                  thoughts of self-harm or suicide, or is showing symptoms of
                  severe clinical disorders such as schizophrenia and other
                  psychotic conditions. In these cases, in-person medical
                  intervention is the most appropriate form of help.
                </p>
                <p>
                  If you feel you are experiencing any of these difficulties, we
                  would urge you to seek help at the nearest hospital or
                  emergency room where you can connect with a psychiatrist,
                  social worker, counsellor or therapist in person. We recommend
                  you to involve a close family member or a friend who can offer
                  support.
                </p>
                <p>
                  You can also reach out to a suicide hotline in your country of
                  residence:{" "}
                  <a href="http://www.suicide.org/international-suicide-hotlines.html">
                    http://www.suicide.org/international-suicide-hotlines.html
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
