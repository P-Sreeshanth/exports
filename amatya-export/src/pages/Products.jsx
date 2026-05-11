import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="bg-cream min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-brown-dark mb-4">Export Catalog</h1>
                    <p className="text-lg text-brown-light max-w-2xl mx-auto">
                        Browse our selection of premium Indian turmeric products. All items are available in bulk wholesale quantities, export-ready.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-200">
                        <p className="text-2xl text-gray-500 font-bold">No products available at the moment.</p>
                    </div>
                )}

                <div className="mt-20 bg-turmeric rounded-2xl p-10 md:p-16 text-center text-brown-dark">
                    <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto font-medium">
                        We offer custom milling, specific packaging, and targeted curcumin extraction levels upon request.
                    </p>
                    <a href="mailto:contact@amatyaexport.com" className="bg-brown-dark text-white font-bold py-4 px-8 rounded-md hover:bg-black transition-colors uppercase tracking-widest">
                        Contact Sales Team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Products;
