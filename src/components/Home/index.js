import { GoArrowRight } from "react-icons/go";
import { FiPlayCircle } from "react-icons/fi";

import Header from '../Header'
import './index.css'
import SocialProofSection from "../SocialProofSection";
import FeaturesSection from "../FeaturesSection";
import TestimonialSection from "../TestimonialSection";
import AdavanceFeaturesSection from "../AdavanceFeaturesSection";
import FAQSection from "../FAQSection";
import BlogSection from "../BlogSection";
import CTASection from "../CTASection";
import FooterSection from "../FooterSection";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero-section">
        <div className="hero-section-container">
          <div className="hero-section-content">
            <div className="hero-section-heading-and-supporting-text">
              <div className="hero-section-heading-and-badge">
                <div className="hero-section-badge-group">
                  <div className="hero-section-badge-group-badge">
                    <p className="hero-section-badge-group-badge-text">New feature</p>
                  </div>
                  <div className="hero-section-badge-group-content">
                    <p className="hero-section-badge-group-content-message">
                      Check out the team dashboard
                    </p>
                    <div className="hero-section-badge-group-content-arrow-right">
                      <GoArrowRight className="badge-group-content-arrow-right-icon" />
                    </div>
                  </div>
                </div>
                <h1 className="hero-section-heading">Beautiful analytics to grow smarter</h1>
              </div>
              <p className="hero-section-supporting-text">
                Powerful, self-serve product and growth analytics to help you convert, engage,
                and retain more users. Trusted by over 4,000 startups.
              </p>
            </div>
            <div className="hero-section-actions">
              <button type="button" className="hero-section-sign-up-btn">Sign up</button>
              <button type="button" className="hero-section-demo-btn">
                <FiPlayCircle size={20} />
                Demo
              </button>
            </div>
          </div>
        </div>
        <div className="hero-section-mockup-container">
          <div className="hero-section-mockup-content">
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732117101/rpwfvnfjhmtxih1rlzem.png"
              alt="screen mockup mobile"
              className="screen-mockup-mobile-img"
            />
            <img
              src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732117102/diorhaoxyds7j7se9rgz.png"
              alt="screen mockup desktop"
              className="screen-mockup-desktop-img"
            />
          </div>
        </div>
        <SocialProofSection />
        <FeaturesSection />
        <TestimonialSection />
        <AdavanceFeaturesSection />
        <FAQSection />
        <BlogSection />
        <CTASection />
        <FooterSection />
      </div>
    </>
  )
}

export default Home