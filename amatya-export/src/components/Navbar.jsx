import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Admin', path: '/admin' },
    ];

    const isActive = (path) => {
        return location.pathname === path ? 'text-turmeric border-b-2 border-turmeric' : 'text-cream hover:text-turmeric-light hover:scale-105';
    };

    return (
        <nav className="bg-brown-dark text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center space-x-3 group">
                            <img className="h-12 w-auto group-hover:scale-110 transition-transform duration-300" src="/src/assets/logo.png" alt="Amatya Export Logo" />
                            <span className="font-display font-bold text-2xl tracking-wider text-turmeric group-hover:text-turmeric-light transition-colors">AMATYA EXPORT</span>
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`flex items-center px-1 pt-1 text-sm font-medium uppercase tracking-widest transition-all duration-200 ${isActive(link.path)}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="mailto:contact@amatyaexport.com" className="btn-primary text-sm uppercase tracking-widest">
                            Contact Us
                        </a>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-turmeric hover:text-white hover:bg-brown focus:outline-none focus:bg-brown focus:text-white transition duration-150 ease-in-out"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-brown`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider mb-1 ${location.pathname === link.path ? 'bg-turmeric text-brown-dark' : 'text-cream hover:text-turmeric hover:bg-brown-dark'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="mailto:contact@amatyaexport.com" className="block w-full text-center mt-4 btn-primary">
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
