import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('amatya_products');
        if (saved) return JSON.parse(saved);
        return [
            {
                id: '1',
                name: 'Turmeric Finger (Premium)',
                origin: 'Nizamabad, India',
                curcumin: '5.5%',
                price: '3000',
                description: 'High-quality whole turmeric fingers, sun-dried and sorted for maximum curcumin content.',
                image: 'https://images.unsplash.com/photo-1615486171448-4fd32d03eef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: '2',
                name: 'Turmeric Powder (Export Grade)',
                origin: 'Salem, India',
                curcumin: '6.0%',
                price: '2800',
                description: 'Finely ground turmeric powder with robust flavor and vibrant golden color.',
                image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: '3',
                name: 'Organic Turmeric Roots',
                origin: 'Erode, India',
                curcumin: '4.8%',
                price: '3500',
                description: 'Certified organic turmeric roots grown without artificial fertilizers or pesticides.',
                image: 'https://images.unsplash.com/photo-1605342415175-926e85501ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('amatya_products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: Date.now().toString() }]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
