import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brown-dark text-cream border-t border-brown">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img className="h-10 w-auto" src="/src/assets/logo.png" alt="Amatya Export" />
                            <span className="font-display font-bold text-xl text-turmeric tracking-wider">AMATYA EXPORT</span>
                        </div>
                        <p className="text-gray-400 max-w-xs">
                            Premium Indian turmeric exporter, delivering gold standard quality worldwide since 2010.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Our Products</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="/products" className="text-gray-400 hover:text-turmeric transition-colors">Turmeric Finger</a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-400 hover:text-turmeric transition-colors">Turmeric Powder</a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-400 hover:text-turmeric transition-colors">Organic Turmeric</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="flex-shrink-0 h-5 w-5 text-turmeric mr-3 mt-0.5" />
                                <span className="text-gray-400">123 Export Zone, Mumbai, Maharashtra, India 400001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="flex-shrink-0 h-5 w-5 text-turmeric mr-3" />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="flex-shrink-0 h-5 w-5 text-turmeric mr-3" />
                                <a href="mailto:contact@amatyaexport.com" className="text-gray-400 hover:text-turmeric transition-colors">contact@amatyaexport.com</a>
                            </li>
                            <li className="flex items-center">
                                <Globe className="flex-shrink-0 h-5 w-5 text-turmeric mr-3" />
                                <span className="text-gray-400">www.amatyaexport.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-brown pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Amatya Export. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-gray-500">
                            Export Registration: APEDA / Spice Board of India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
