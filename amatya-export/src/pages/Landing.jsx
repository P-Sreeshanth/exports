import React, { useContext } from 'react';
import { ShieldCheck, Truck, Award, Leaf } from 'lucide-react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Landing = () => {
    const { products } = useContext(ProductContext);

    const features = [
        { icon: <ShieldCheck className="w-12 h-12 text-turmeric" />, title: 'Premium Quality', desc: 'Sourced directly from the finest farms in India.' },
        { icon: <Award className="w-12 h-12 text-turmeric" />, title: 'Certified Export', desc: 'Full compliance with international food safety standards.' },
        { icon: <Truck className="w-12 h-12 text-turmeric" />, title: 'Global Delivery', desc: 'Secure worldwide shipping in food-grade packaging.' },
        { icon: <Leaf className="w-12 h-12 text-turmeric" />, title: 'Organic Options', desc: 'Pesticide-free and organically certified varieties available.' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-brown-dark/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Turmeric background"
                />

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-[-10vh]">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        PREMIUM INDIAN TURMERIC <br />
                        <span className="text-turmeric text-transparent bg-clip-text bg-gradient-to-r from-turmeric-light to-turmeric-dark">
                            EXPORTED WORLDWIDE
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-cream mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        The gold standard in turmeric exports. High curcumin, authentic Indian origins, and unrivaled purity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/products" className="btn-primary text-lg w-full sm:w-auto px-10 py-4 uppercase tracking-widest">
                            Explore Products
                        </a>
                        <a href="mailto:contact@amatyaexport.com" className="btn-outline border-white text-white hover:bg-white hover:text-brown-dark text-lg w-full sm:w-auto px-10 py-4 uppercase tracking-widest">
                            Get A Quote
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-turmeric-dark tracking-widest uppercase mb-3">About Us</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brown-dark">Rooted in India, <br /> Delivered Globally.</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Amatya Export is a premier agribusiness specialized strictly in the global distribution of high-quality turmeric. We source directly from the most fertile fields in Nizamabad, Salem, and Erode.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our relentless focus on quality assurance and direct-to-farm relationships ensures that you receive turmeric with the highest possible curcumin percentage and pristine flavor profiles.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border-l-4 border-turmeric pl-4">
                                    <span className="block text-4xl font-bold text-brown-dark">15+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Years Experience</span>
                                </div>
                                <div className="border-l-4 border-turmeric pl-4">
                                    <span className="block text-4xl font-bold text-brown-dark">40+</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Countries Served</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/src/assets/logo.png" alt="Amatya Export Logo" className="w-[80%] mx-auto z-10 relative drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-turmeric-dark tracking-widest uppercase mb-3">Our Offerings</h2>
                        <h3 className="text-4xl font-bold text-brown-dark">Premium Turmeric Selection</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.slice(0, 3).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="/products" className="btn-primary inline-flex items-center space-x-2">
                            <span>VIEW ALL PRODUCTS</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-24 bg-brown-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-turmeric tracking-widest uppercase mb-3">Why Choose Amatya</h2>
                        <h3 className="text-4xl font-bold">Uncompromising Quality Standard</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-brown p-8 rounded-xl border border-brown-light hover:border-turmeric transition-colors group text-center lg:text-left">
                                <div className="mb-6 flex justify-center lg:justify-start transform group-hover:-translate-y-2 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
