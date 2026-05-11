import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card group">
            <div className="relative overflow-hidden h-64">
                <img
                    src={product.image || 'https://images.unsplash.com/photo-1615486171448-4fd32d03eef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-turmeric text-brown-dark font-bold px-3 py-1 rounded shadow-md text-sm uppercase tracking-wide">
                    {product.origin}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-turmeric-dark transition-colors">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wider block">Curcumin</span>
                        <span className="font-bold text-brown-dark">{product.curcumin}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-gray-500 uppercase tracking-wider block">Price / Metric Ton</span>
                        <span className="font-bold text-2xl text-turmeric-dark">${product.price}</span>
                    </div>
                </div>

                <button className="w-full btn-outline group-hover:bg-brown group-hover:text-white">
                    Request Quote
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
