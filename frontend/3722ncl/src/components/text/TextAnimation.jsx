import React, { useEffect } from 'react';
import './textAnimation.scss';

const TextAnimation = () => {
    useEffect(() => {
        const animateText = () => {
            const secondText = document.querySelector('.second-text');

            setTimeout(() => {
                secondText.classList.add('show');
            }, 2000);
        };

        animateText();
    }, []);

    return (
        <div className="text-container">
            <h1>
                <div className="first-text">You will learn </div>
                <div className="second-text">what beauty truly is.</div>
            </h1>

        </div>
    );
};

export default TextAnimation;