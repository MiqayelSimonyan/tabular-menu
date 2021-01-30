import React, { useEffect, useState, memo } from 'react';

import './style.scss';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300 ? true : false);
        };

        document.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return <div className='back-to-top'>
        {
            isVisible && (
                <div onClick={scrollToTop}>
                    <svg viewBox='0 0 512 512'>
                        <path d='m6 370l24 23 227-226 225 226 24-23-249-251z'></path>
                    </svg>
                </div>
            )
        }
    </div>
};

export default memo(BackToTop);