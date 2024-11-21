import './index.css'

const FooterSection = () => (
    <div className="footer-section">
        <div className="footer-section-top-container">
            <div className="footer-section-top-content">
                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Product</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">Overview</li>
                        <li className="footer-links-list-item">Features</li>
                        <li className="footer-links-list-item">
                            Solutions
                            <span className="list-item-span-element">New</span>
                        </li>
                        <li className="footer-links-list-item">Tutorials</li>
                        <li className="footer-links-list-item">Pricing</li>
                        <li className="footer-links-list-item">Releases</li>
                    </ul>
                </div>

                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Company</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">About us</li>
                        <li className="footer-links-list-item">Careers</li>
                        <li className="footer-links-list-item">Press </li>
                        <li className="footer-links-list-item">News</li>
                        <li className="footer-links-list-item">Media kit</li>
                        <li className="footer-links-list-item">Contact</li>
                    </ul>
                </div>

                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Resources</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">Blog</li>
                        <li className="footer-links-list-item">Newsletter</li>
                        <li className="footer-links-list-item">Events </li>
                        <li className="footer-links-list-item">Help center</li>
                        <li className="footer-links-list-item">Tutorials</li>
                        <li className="footer-links-list-item">Support</li>
                    </ul>
                </div>

                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Use cases</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">Startups</li>
                        <li className="footer-links-list-item">Enterprise</li>
                        <li className="footer-links-list-item">Government </li>
                        <li className="footer-links-list-item">SaaS centre</li>
                        <li className="footer-links-list-item">Marketplaces</li>
                        <li className="footer-links-list-item">Ecommerce</li>
                    </ul>
                </div>

                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Social</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">Twitter</li>
                        <li className="footer-links-list-item">LinkedIn</li>
                        <li className="footer-links-list-item">Facebook </li>
                        <li className="footer-links-list-item">GitHub</li>
                        <li className="footer-links-list-item">AngelList</li>
                        <li className="footer-links-list-item">Dribbble</li>
                    </ul>
                </div>

                <div className="footer-section-top-footer-links">
                    <h2 className="footer-section-top-footer-links-heading">Legal</h2>
                    <ul className="footer-links-list-container">
                        <li className="footer-links-list-item">Terms</li>
                        <li className="footer-links-list-item">Privacy</li>
                        <li className="footer-links-list-item">Cookies </li>
                        <li className="footer-links-list-item">Licenses</li>
                        <li className="footer-links-list-item">Settings</li>
                        <li className="footer-links-list-item">Contact</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-section-bottom-container">
            <hr className="footer-hr-line" />
            <div className="footer-section-bottom-content">
                <div className="footer-section-bottom-website-logo-container">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732091504/fucgcxu9fwaqpzifpydh.png"
                        alt="footer website logo"
                        className="footer-website-logo-img"
                    />
                    <h1 className="footer-website-logo-heading">Untitled UI</h1>
                </div>
                <p className="footer-copy-right-text">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
    </div>
)

export default FooterSection