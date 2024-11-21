import { MdArrowOutward } from "react-icons/md";

import './index.css'

const BlogSection = () => (
    <div className="blog-section">
        <div className="blog-section-top-container">
            <div className="blog-section-top-content">
                <div className="blog-section-top-heading-and-supporting-text">
                    <div className="blog-section-top-heading-and-subheading">
                        <p className="blog-section-top-subheading">Our blog</p>
                        <h2 className="blog-section-top-heading">Lastest blog posts</h2>
                    </div>
                    <p className="blog-section-top-supporting-text">
                        Tool and strategies modern teams need to help their companies grow.
                    </p>
                </div>
                <button 
                    type="button"
                    className="blog-section-top-view-all-button-desktop"
                >
                    View all posts
                </button>
            </div>
        </div>
        <div className="blog-section-bottom-container">
            <div className="blog-section-bottom-content">
                <div className="blog-section-bottom-blog-post-card">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732173726/pxulgqbbar1sear7cgl7.png"
                        alt="blog post 1"
                        className="blog-section-bottom-blog-post-img"
                    />
                    <div className="blog-section-bottom-blog-post-content">
                        <div className="blog-section-bottom-blog-post-content-heading-subheading">
                            <p className="blog-section-bottom-blog-post-content-subheading">Design</p>
                            <div className="blog-section-bottom-blog-post-content-heading-and-text">
                                <div className="blog-section-bottom-blog-post-content-heading-and-icon">
                                    <h1 className="blog-section-bottom-blog-post-content-heading">UX review presentations</h1>
                                    <MdArrowOutward className="blog-section-bottom-post-content-arrow-outward-icon" />
                                </div>
                                <p className="blog-section-bottom-blog-post-content-supporting-text">
                                    How do you create compelling presentations that wow your colleagues
                                    and impress your managers?
                                </p>
                            </div>
                        </div>
                        <div className="blog-section-bottom-blog-post-content-avatar-label-group">
                            <img
                                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732175132/e1cbom2zdkukjz1buqov.png"
                                alt="avatar pic 1"
                                className="blog-section-bottom-blog-post-content-avatar-img"
                            />
                            <div className="blog-section-bottom-avatar-label-group-text-and-date">
                                <p className="avatar-label-group-text">Olivia Rhye</p>
                                <p className="avatar-label-group-text-date">20 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-section-bottom-blog-post-card">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732176082/mu2t4x81skfa947nojdy.png"
                        alt="blog post 2"
                        className="blog-section-bottom-blog-post-img"
                    />
                    <div className="blog-section-bottom-blog-post-content">
                        <div className="blog-section-bottom-blog-post-content-heading-subheading">
                            <p className="blog-section-bottom-blog-post-content-subheading">Product</p>
                            <div className="blog-section-bottom-blog-post-content-heading-and-text">
                                <div className="blog-section-bottom-blog-post-content-heading-and-icon">
                                    <h1 className="blog-section-bottom-blog-post-content-heading">Migrating to Linear 101</h1>
                                    <MdArrowOutward className="blog-section-bottom-post-content-arrow-outward-icon" />
                                </div>
                                <p className="blog-section-bottom-blog-post-content-supporting-text">
                                    Linear helps streamline software projects, sprints, tasks, and bug tracking.
                                    Here’s how to get started.
                                </p>
                            </div>
                        </div>
                        <div className="blog-section-bottom-blog-post-content-avatar-label-group">
                            <img
                                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732176081/itcmtxytpboujs3awdm9.png"
                                alt="avatar pic 2"
                                className="blog-section-bottom-blog-post-content-avatar-img"
                            />
                            <div className="blog-section-bottom-avatar-label-group-text-and-date">
                                <p className="avatar-label-group-text">Phoenix Baker</p>
                                <p className="avatar-label-group-text-date">19 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-section-bottom-blog-post-card">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732176460/skwtnzd4tpdjj7tkti7a.png"
                        alt="blog post 3"
                        className="blog-section-bottom-blog-post-img"
                    />
                    <div className="blog-section-bottom-blog-post-content">
                        <div className="blog-section-bottom-blog-post-content-heading-subheading">
                            <p className="blog-section-bottom-blog-post-content-subheading">Software Engineering</p>
                            <div className="blog-section-bottom-blog-post-content-heading-and-text">
                                <div className="blog-section-bottom-blog-post-content-heading-and-icon">
                                    <h1 className="blog-section-bottom-blog-post-content-heading">Building your API stack</h1>
                                    <MdArrowOutward className="blog-section-bottom-post-content-arrow-outward-icon" />
                                </div>
                                <p className="blog-section-bottom-blog-post-content-supporting-text">
                                    The rise of RESTful APIs has been met by a rise in tools for creating,
                                    testing, and managing them.
                                </p>
                            </div>
                        </div>
                        <div className="blog-section-bottom-blog-post-content-avatar-label-group">
                            <img
                                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732176460/b550emrfyqqgvjeema8t.png"
                                alt="avatar pic 3"
                                className="blog-section-bottom-blog-post-content-avatar-img"
                            />
                            <div className="blog-section-bottom-avatar-label-group-text-and-date">
                                <p className="avatar-label-group-text">Lana Steiner</p>
                                <p className="avatar-label-group-text-date">18 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="blog-section-bottom-view-all-posts-mobile"
            >
                View all posts
            </button>
        </div>
    </div>
)

export default BlogSection