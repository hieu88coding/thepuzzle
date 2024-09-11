import React from 'react'
import './header.scss'
import { useEffect, useState } from 'react';
import Avatar from 'antd/es/avatar/avatar';
const Header = (props) => {
    const [selectedAvatar, setSelectedAvatar] = useState("OgJhin");

    const backgroundColor = {
        "OgJhin": "black",
        "HighNoonJhin": "orange",
        "BloodMoonJhin": "#A92835",
        "DarkCosmicJhin": "purple"
    };
    const handleAvatarClick = (avatarName) => {
        setSelectedAvatar(avatarName);
        props.handleChangeState(avatarName);
    };
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header" style={{ backgroundColor: backgroundColor[selectedAvatar] }}>
            <nav className="navbar">
                <div className="logo">
                    {/* Thêm logo hoặc tên */}
                    <a href="#">Hieucao Port4lio</a>
                </div>
                <div className='nav-links'>
                    <Avatar
                        className={selectedAvatar === "OgJhin" ? 'selected-avatar' : ''}
                        onClick={() => handleAvatarClick("OgJhin")} src="https://cdn.modelviewer.lol/lol/circles/202000.webp" />
                    <Avatar
                        className={selectedAvatar === "HighNoonJhin" ? 'selected-avatar' : ''}
                        onClick={() => handleAvatarClick("HighNoonJhin")} src="https://cdn.modelviewer.lol/lol/circles/202001.webp" />
                    <Avatar
                        className={selectedAvatar === "BloodMoonJhin" ? 'selected-avatar' : ''}
                        onClick={() => handleAvatarClick("BloodMoonJhin")} src="https://cdn.modelviewer.lol/lol/circles/202002.webp" />
                    <Avatar
                        className={selectedAvatar === "DarkCosmicJhin" ? 'selected-avatar' : ''}
                        onClick={() => handleAvatarClick("DarkCosmicJhin")} src="https://cdn.modelviewer.lol/lol/circles/202005.webp" />
                </div>
            </nav>
        </header>
    );
}

export default Header
