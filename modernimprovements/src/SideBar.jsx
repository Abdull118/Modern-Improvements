import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menubars from './assets/images/menuBars.svg';
import QuoteForm from './QuoteForm';
import './sideBar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [header, setHeader] = useState(true);
    const [openQuote, setOpenQuote] = useState(false)

    const openModal = () => {

        setOpenQuote(true)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleNavItemClick = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='main'>
            {header ? (
                <header className='header'>

                    <nav>
                        <ul>
                            <li>
                                <a href='/' onClick={() => handleNavItemClick('home')} style={{ color: 'white', }}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('solutions')}>
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('testimonials')}>
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('services')}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('process')}>
                                    Our Process
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('about')}>About Us</a>
                            </li>
                            <li>
                                <a onClick={() => handleNavItemClick('contact')}>
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <div onClick={openModal}>Book a Quote</div>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) : (
                <>
                    <img src={menubars} onClick={() => setIsOpen(!isOpen)} className='menuBars' />
                    <aside style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: isOpen ? 0 : -300,
                        width: 300,
                        background: '#fff',
                        transition: 'left 0.3s ease-out',
                        padding: '20px',
                        boxSizing: 'border-box',
                        zIndex: 8
                    }}>
                        <button style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                        }} onClick={() => setIsOpen(false)} className='closeOut'>
                            X
                        </button>
                        <nav className='navSideBar'>
                            <ul>
                                <li><a href="/" onClick={() => handleNavItemClick('home')}>Home</a></li>
                                <li><a onClick={() => handleNavItemClick('solutions')}>Solutions</a></li>
                                <li><a onClick={() => handleNavItemClick('testimonials')}>Testimonials</a></li>
                                <li><a onClick={() => handleNavItemClick('services')}>Services</a></li>
                                <li><a onClick={() => handleNavItemClick('process')}>Our Process</a></li>
                                <li><a onClick={() => handleNavItemClick('about')}>About Us</a></li>
                                <li><a onClick={() => handleNavItemClick('contact')}>Contact Us</a></li>
                                <li><Link to='/quoteForm'>Book a Quote</Link></li>
                            </ul>
                        </nav>
                    </aside>
                </>)}

            {openQuote && (
                <QuoteForm openQuote={openQuote} setOpenQuote={setOpenQuote} />
            )}
        </div>
    );
};

export default Sidebar;