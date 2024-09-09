import React from 'react'
import './header.scss'
import { useEffect } from 'react';
const Header = () => {
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
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    {/* Thêm logo hoặc tên */}
                    <a href="#">Hieucao Port4lio</a>
                </div>
                <ul className="nav-links">
                    {/* Các liên kết điều hướng */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
