"use client"
import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('br')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'br' ? 'us' : 'br'));
    };

    return (
        <header className="bg-white pl-1 py-1 px-8 flex justify-between shadow sticky top-0" id="zidx-5">
            <div className="flex place-items-center font-bold tracking-wide">
                <Image src="/images/logo.png" alt="Solutiva Tech" width={60} height={60} />
                <h3 className='text-primary-dark'>Solutiva</h3><h3 className='text-gray-600'>Tech</h3>
            </div>
            <nav className="hidden md:flex space-x-8 place-items-center">
                <a href="#about" className="nav-link">
                    Sobre
                    <span></span>
                </a>
                <a href="#services" className="nav-link">
                    Serviços
                    <span></span>
                </a>
                <a href="#portfolio" className="nav-link">
                    Portfólio
                    <span></span>
                </a>
                <a href="#contact" className="nav-link">
                    Contato
                    <span></span>
                </a>
                <button onClick={changeLanguage}>
                    {language === 'br' ? <Icon icon="twemoji:flag-brazil" width="24" height="24" /> : <Icon icon="twemoji:flag-united-states" width="24" height="24" />}
                </button>
            </nav>
            <div className="md:hidden flex">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <Icon icon="material-symbols-light:menu" width="34" height="34" />
                </button>
            </div>
            <div
                className={`fixed inset-0 bg-primary transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 flex justify-end">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <Icon icon="material-symbols-light:close" width="34" height="34" />
                    </button>
                </div>
                <nav className="flex flex-col items-end p-4 space-y-4">
                    <a href="#home" className="block text-white py-2 hover:text-gray-300 transition-colors" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="block text-white py-2 hover:text-gray-300 transition-colors" onClick={toggleMenu}>Sobre</a>
                    <a href="#services" className="block text-white py-2 hover:text-gray-300 transition-colors" onClick={toggleMenu}>Serviços</a>
                    <a href="#portfolio" className="block text-white py-2 hover:text-gray-300 transition-colors" onClick={toggleMenu}>Portfólio</a>
                    <a href="#contact" className="block text-white py-2 hover:text-gray-300 transition-colors" onClick={toggleMenu}>Contato</a>
                    <button onClick={changeLanguage} className="text-white">
                        {language === 'br' ? <Icon icon="twemoji:flag-brazil" width="24" height="24" /> : <Icon icon="twemoji:flag-united-states" width="24" height="24" />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
