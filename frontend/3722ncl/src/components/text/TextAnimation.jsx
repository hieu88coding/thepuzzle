import React, { useEffect } from 'react';
import './textAnimation.scss';


const backgroundColor = {
    "OgJhin": "white",
    "HighNoonJhin": "orange",
    "BloodMoonJhin": "#A92835",
    "DarkCosmicJhin": "purple"
};
const TextAnimation = (props) => {
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
                <div style={{ color: backgroundColor[props.jhinState] }} className="second-text">what beauty truly is.</div>
            </h1>

        </div>
    );
};

export default TextAnimation;