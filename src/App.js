import React, { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';  
import HamburgerIcon from './components/MobileMenu/HamburgerIcon'; 
import MobileMenu from './components/MobileMenu/MobileMenu';
import Main from './components/Main/Main';  
import './App.css';  

const App = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const menu = document.querySelector('.menu');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 200) {
                menu.classList.add('hidden');
            } else {
                menu.classList.remove('hidden');
            }

            if (scrollTop === 0) {
                menu.classList.remove('hidden');
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleHamburgerClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <Menu />
            <HamburgerIcon onClick={handleHamburgerClick} />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            <Main />
        </div>
    );
};

export default App;
