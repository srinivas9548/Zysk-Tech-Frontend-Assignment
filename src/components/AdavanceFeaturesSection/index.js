import { GoArrowRight } from "react-icons/go";

import './index.css'

const AdavanceFeaturesSection = () => (
    <div className='adavance-features-section'>
        <div className='adavance-features-section-top-container'>
            <div className='adavance-features-section-top-content'>
                <div className='adavance-features-section-top-heading-and-supporting-text'>
                    <div className='adavance-features-section-top-heading-and-badge'>
                        <div className='adavance-features-section-top-badge'>
                            <p className='adavance-features-section-top-badge-text'>Features</p>
                        </div>
                        <h1 className='adavance-features-section-top-heading'>Cutting-edge features for advanced analytics</h1>
                    </div>
                    <p className='adavance-features-section-top-supporting-text'>
                        Powerful, self-serve product and growth analytics to help you convert, engage,
                        and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>
        </div>
        <div className='advance-features-section-medium-content'>
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732157776/m1qrnngnk79bhi85i7sw.png"
                alt="iphone 12 pro mockup mobile"
                className="iphone-12-pro-mockup-mobile-img"
            />
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732158534/bbyydpyv9qxuif9y5fi4.png"
                alt="iphone 12 pro mockup desktop"
                className="iphone-12-pro-mockup-desktop-img"
            />
        </div>
        <div className='adavance-features-section-bottom-container'>
            <div className='adavance-features-section-bottom-content'>
                <div className='adavance-features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/prnegntvoqlmvvi3wzpu.png"
                        alt="advance message chat circle"
                        className="advance-feature-icon"
                    />
                    <div className='adavance-features-section-bottom-feature-text-and-supporting-text'>
                        <h2 className='adavance-features-section-bottom-feature-text'>Share team inboxes</h2>
                        <p className='adavance-features-section-bottom-feature-supporting-text'>
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone
                            on the same page and in the loop.
                        </p>
                        <button
                            type="button"
                            className="advance-features-section-bottom-feature-button"
                        >
                            Learn more
                            <GoArrowRight className="advance-features-section-bottom-feature-arrow-right" />
                        </button>
                    </div>
                </div>

                <div className='adavance-features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/x3w22bmiiis258wnyvzg.png"
                        alt="advance zap"
                        className="advance-feature-icon"
                    />
                    <div className='adavance-features-section-bottom-feature-text-and-supporting-text'>
                        <h2 className='adavance-features-section-bottom-feature-text'>Deliver instant answers</h2>
                        <p className='adavance-features-section-bottom-feature-supporting-text'>
                            An all-in-one customer service platform that helps you balance everything
                            your customers need to be happy.
                        </p>
                        <button
                            type="button"
                            className="advance-features-section-bottom-feature-button"
                        >
                            Learn more
                            <GoArrowRight className="advance-features-section-bottom-feature-arrow-right" />
                        </button>
                    </div>
                </div>

                <div className='adavance-features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/dv6oabkgczcgxpkn5gja.png"
                        alt="advance chat breakout square"
                        className="advance-feature-icon"
                    />
                    <div className='adavance-features-section-bottom-feature-text-and-supporting-text'>
                        <h2 className='adavance-features-section-bottom-feature-text'>Manage your team with reports</h2>
                        <p className='adavance-features-section-bottom-feature-supporting-text'>
                            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, 
                            and drilldown on the data in a couple clicks.
                        </p>
                        <button
                            type="button"
                            className="advance-features-section-bottom-feature-button"
                        >
                            Learn more
                            <GoArrowRight className="advance-features-section-bottom-feature-arrow-right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AdavanceFeaturesSection