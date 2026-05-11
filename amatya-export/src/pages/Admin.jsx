import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';

const Admin = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        origin: '',
        curcumin: '',
        price: '',
        description: '',
        image: ''
    });

    const resetForm = () => {
        setFormData({
            name: '', origin: '', curcumin: '', price: '', description: '', image: ''
        });
        setEditingId(null);
        setIsFormOpen(false);
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditingId(product.id);
        setIsFormOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteProduct(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            updateProduct(editingId, formData);
        } else {
            addProduct(formData);
        }
        resetForm();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-brown-dark">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-2">Manage products (Local State Simulated CRUD)</p>
                    </div>

                    {!isFormOpen && (
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="btn-primary flex items-center space-x-2"
                        >
                            <Plus className="w-5 h-5" />
                            <span>Add Product</span>
                        </button>
                    )}
                </div>

                {isFormOpen && (
                    <div className="bg-cream rounded-xl p-8 shadow-sm border border-turmeric-light mb-10 animation-fade-in relative">
                        <button
                            onClick={resetForm}
                            className="absolute top-6 right-6 text-gray-400 hover:text-brown-dark transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold text-brown-dark mb-6">
                            {editingId ? 'Edit Product' : 'Add New Product'}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Product Name</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="e.g. Premium Finger" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Origin</label>
                                    <input required type="text" name="origin" value={formData.origin} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="e.g. Nizamabad" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Curcumin %</label>
                                    <input required type="text" name="curcumin" value={formData.curcumin} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="e.g. 5.5%" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Price (USD)</label>
                                    <input required type="number" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="e.g. 3000" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Image URL</label>
                                    <input type="url" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="https://..." />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-brown-dark mb-2 uppercase tracking-wide">Description</label>
                                    <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turmeric focus:border-transparent" placeholder="Brief description of the product..."></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={resetForm} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-primary flex items-center space-x-2">
                                    <Save className="w-5 h-5" />
                                    <span>{editingId ? 'Update' : 'Save'} Product</span>
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Product List */}
                <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-turmeric">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-brown-dark uppercase tracking-wider">Product</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-brown-dark uppercase tracking-wider">Origin</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-brown-dark uppercase tracking-wider">Curcumin</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-brown-dark uppercase tracking-wider">Price/Ton</th>
                                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-brown-dark uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-gray-500">No products found. Add one!</td>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded object-cover" src={product.image || 'https://via.placeholder.com/40'} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-brown-dark">{product.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product.origin}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.curcumin}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap font-bold text-turmeric-dark">
                                                ${product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900 mr-4">
                                                    <Edit2 className="w-5 h-5 inline" />
                                                </button>
                                                <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">
                                                    <Trash2 className="w-5 h-5 inline" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
