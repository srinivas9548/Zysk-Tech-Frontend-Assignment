import { useState } from "react";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import './index.css'


const FAQSection = () => {
    const [isFirstActive, setIsFirstActive] = useState(false)
    const [isSecondActive, setIsSecondActive] = useState(false)
    const [isThirdActive, setIsThirdActive] = useState(false)
    const [isFourthActive, setIsFourthActive] = useState(false)
    const [isFifthActive, setIsFifthActive] = useState(false)
    const [isSixthActive, setIsSixthActive] = useState(false)

    const onClickToggleFirstFaq = () => {
        setIsFirstActive(prevState => !prevState)
        setIsSecondActive(false)
        setIsThirdActive(false)
        setIsFourthActive(false)
        setIsFifthActive(false)
        setIsSixthActive(false)
    }

    const onClickToggleSecondFaq = () => {
        setIsSecondActive(prevState => !prevState)
        setIsFirstActive(false)
        setIsThirdActive(false)
        setIsFourthActive(false)
        setIsFifthActive(false)
        setIsSixthActive(false)
    }

    const onClickToggleThirdFaq = () => {
        setIsThirdActive(prevState => !prevState)
        setIsFirstActive(false)
        setIsSecondActive(false)
        setIsFourthActive(false)
        setIsFifthActive(false)
        setIsSixthActive(false)
    }

    const onClickToggleFourthFaq = () => {
        setIsFourthActive(prevState => !prevState)
        setIsFirstActive(false)
        setIsSecondActive(false)
        setIsThirdActive(false)
        setIsFifthActive(false)
        setIsSixthActive(false)
    }

    const onClickToggleFifthFaq = () => {
        setIsFifthActive(prevState => !prevState)
        setIsFirstActive(false)
        setIsSecondActive(false)
        setIsThirdActive(false)
        setIsFourthActive(false)
        setIsSixthActive(false)
    }

    const onClickToggleSixthFaq = () => {
        setIsSixthActive(prevState => !prevState)
        setIsFirstActive(false)
        setIsSecondActive(false)
        setIsThirdActive(false)
        setIsFourthActive(false)
        setIsFifthActive(false)
    }

    return (
        <div className='faq-section'>
            <div className='faq-section-top-container'>
                <div className='faq-section-top-content'>
                    <div className='faq-section-top-heading-and-supporting-text'>
                        <h2 className='faq-section-top-heading'>Frequently asked questions</h2>
                        <p className='faq-section-top-supporting-text'>Everything you need to know about the product and billing.</p>
                    </div>
                </div>
            </div>
            <div className='faq-section-medium-container'>
                <div className='faq-section-medium-content'>
                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    Is there a free trial available?
                                </h2>
                                {isFirstActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        Yes, you can try us for free for 30 days. If you want, we’ll provide
                                        you with a free, personalized 30-minute onboarding call to get you
                                        up and running as soon as possible.
                                    </p>
                                )}
                            </div>
                            {isFirstActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleFirstFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleFirstFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    Can I change my plan later?
                                </h2>
                                {isSecondActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        Yes, you can change your plan at any time. Simply go to your
                                        account settings and select the plan that works best for you.
                                    </p>
                                )}
                            </div>
                            {isSecondActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleSecondFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleSecondFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    What is your cancellation policy?
                                </h2>
                                {isThirdActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        You can cancel your subscription anytime with no extra charges.
                                        Your account will remain active until the end of the current
                                        billing cycle.
                                    </p>
                                )}
                            </div>
                            {isThirdActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleThirdFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleThirdFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    Can other info be added to an invoice?
                                </h2>
                                {isFourthActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        Yes, additional information such as company details or tax IDs
                                        can be added to your invoices. Contact our support team for
                                        assistance.
                                    </p>
                                )}
                            </div>
                            {isFourthActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleFourthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleFourthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    How does billing work?
                                </h2>
                                {isFifthActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        Billing is done monthly or annually, depending on your plan.
                                        You’ll be charged automatically at the beginning of each billing
                                        cycle.
                                    </p>
                                )}
                            </div>
                            {isFifthActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleFifthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleFifthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className='faq-section-medium-faq-item'>
                        <div className='faq-section-medium-faq-item-content'>
                            <div className='faq-section-medium-faq-item-content-text-and-supporting-text'>
                                <h2 className='faq-section-medium-faq-item-content-text'>
                                    How do I change my account email?
                                </h2>
                                {isSixthActive && (
                                    <p className='faq-section-medium-faq-item-content-supporting-text'>
                                        To change your account email, visit your account settings. Update
                                        the email field and confirm the change via the verification link
                                        sent to your new email.
                                    </p>
                                )}
                            </div>
                            {isSixthActive ? (
                                <AiOutlineMinusCircle onClick={onClickToggleSixthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            ) : (
                                <AiOutlinePlusCircle onClick={onClickToggleSixthFaq} className="faq-section-medium-outline-plus-minus-icon" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='faq-section-bottom-container'>
                <div className='faq-section-bottom-content'>
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1732171437/ghtjihyyumrhkzcttdwq.png"
                        alt="faq bottom avatar group"
                        className="faq-section-bottom-avatar-group-img"
                    />
                    <div className="faq-section-bottom-content-heading-supporting-text">
                        <h2 className="faq-section-bottom-content-heading">Still have questions?</h2>
                        <p className="faq-section-bottom-content-supporting-text">
                            Can’t find the answer you’re looking for? Please chat to our friendly team.
                        </p>
                        <button type="button" className="faq-bottom-get-in-touch-btn">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQSection