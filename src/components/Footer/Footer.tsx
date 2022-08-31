import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='footer-content'>
                        <div className='text'>
                            <h2>Do you have a question</h2>
                            <h2><a>Check out our Frequently Asked Questions</a>page or simply get in touch with us.</h2>
                        </div>
                        <div className='contact-container'>
                            <a></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
}