import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import './index.css'

const Header = () => (
    <nav className="nav-header">
        <div className="nav-content">
            <div className="nav-website-logo-header-and-list-container">
                <div className="nav-website-logo-and-title-container">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732091504/fucgcxu9fwaqpzifpydh.png"
                        alt="website logo"
                        className="website-logo"
                    />
                    <h1 className="website-title">Untitled UI</h1>
                </div>
                <ul className="nav-header-list-container">
                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">
                        <div className="nav-list-item-content">
                            Products
                            <IoIosArrowDown className="arrow-down" />
                        </div>
                    </li>
                    <li className="nav-list-item">
                        <div className="nav-list-item-content">
                            Resources
                            <IoIosArrowDown className="arrow-down" />
                        </div>
                    </li>
                    <li className="nav-list-item">Pricing</li>
                </ul>
            </div>
            <IoMenu className="hamburger-menu-icon" />
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732097368/akiiuwfa9tgbi5gvvcyq.png"
                alt="profile pic"
                className="profile-pic-img"
            />
        </div>
    </nav>
)

export default Header