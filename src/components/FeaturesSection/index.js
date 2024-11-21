import './index.css'

const FeaturesSection = () => (
    <div className='features-section'>
        <div className='features-section-top-container'>
            <div className='features-section-top-content'>
                <div className='features-section-top-heading-and-supporting-text'>
                    <div className='features-section-top-heading-and-subheading'>
                        <p className='features-section-top-subheading'>Features</p>
                        <h1 className='features-section-top-heading'>
                            Analytics that feels like it’s from the future
                        </h1>
                    </div>
                    <p className='features-section-top-supporting-text'>
                        Powerful, self-serve product and growth analytics to help you convert,
                        engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>
        </div>
        <div className='features-section-bottom-container'>
            <div className='features-section-bottom-content'>
                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/prnegntvoqlmvvi3wzpu.png"
                        alt="message chat circle"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Share team inboxes</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            Whether you have a team of 2 or 200, our shared team inboxes keep
                            everyone on the same page and in the loop.
                        </p>
                    </div>
                </div>

                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/x3w22bmiiis258wnyvzg.png"
                        alt="zap"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Deliver instant answers</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            An all-in-one customer service platform that helps you balance everything your
                            customers need to be happy.
                        </p>
                    </div>
                </div>

                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/dv6oabkgczcgxpkn5gja.png"
                        alt="chart breakout square"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Manage your team with reports</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, 
                            and drilldown on the data in a couple clicks.
                        </p>
                    </div>
                </div>

                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/moeeelekxigjokd8inkr.png"
                        alt="message smile circle"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Connect with customers</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            Solve a problem or close a sale in real-time with chat. If no one is available, 
                            customers are seamlessly routed to email without confusion.
                        </p>
                    </div>
                </div>

                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/qzjszaxx03eefxfun7t5.png"
                        alt="command icon"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Connect the tools you already use</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            Explore 100+ integrations that make your day-to-day workflow more efficient 
                            and familiar. Plus, our extensive developer tools.
                        </p>
                    </div>
                </div>

                <div className='features-section-bottom-feature'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732125575/sgjweu1quwqasmerpuxr.png"
                        alt="message heart circle"
                        className="features-section-feature-icon"
                    />
                    <div className='features-section-bottom-feature-heading-supporting-text'>
                        <h2 className='features-section-bottom-feature-heading'>Our people make the difference</h2>
                        <p className='features-section-bottom-feature-supporting-text'>
                            We’re an extension of your customer service team, and all of our resources 
                            are free. Chat to our friendly team 24/7 when you need help.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default FeaturesSection