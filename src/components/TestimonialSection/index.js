import './index.css'

const TestimonialSection = () => (
    <div className='testimonial-section'>
        <div className='testimonial-section-container'>
            <div className='testimonial-section-content'>
                <div className='testimonial-section-quote-and-attribution'>
                    <img 
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732153444/i7xnw3xfnrgqntzqqjqv.png"
                        alt="sisyphus company logo"
                        className="sisyphus-company-logo-img"
                    />
                    <p className='testimonial-section-quote'>
                        We’ve been using Untitled to kick start every new project and can’t imagine 
                        working without it.
                    </p>
                    <div className='testimonial-section-avatar-and-text'>
                        <img 
                            src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732154174/ojorlzm7jkhu9oohgipv.png"
                            alt="avatar logo"
                            className="testimonial-section-avatar-logo"
                        />
                        <div className='testimonial-section-avatar-text-and-supporting-text'>
                            <h3 className='testimonial-section-avatar-text'>Candice Wu</h3>
                            <p className='testimonial-section-avatar-supporting-text'>Product Manager, Sisyphus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TestimonialSection