import { useState, useEffect } from 'react';
import { Plus, Search, X, Calendar, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import api from '../services/api';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const CATEGORIES = ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Grains', 'Spices', 'Other'];

const Pantry = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [expiringItems, setExpiringItems] = useState([]);

    useEffect(() => {
        fetchPantryItems();
        fetchExpiringItems();
    }, []);

    useEffect(() => {
        filterItems();
    }, [items, searchQuery, selectedCategory]);

    const fetchPantryItems = async () => {
        try {
            const response = await api.get('/pantry');
            setItems(response.data.data.items);
        } catch (error) {
            toast.error('Failed to load pantry items');
        } finally {
            setLoading(false);
        }
    };

    const fetchExpiringItems = async () => {
        try {
            const response = await api.get('/pantry/expiring-soon?days=7');
            setExpiringItems(response.data.data.items);
        } catch (error) {
            console.error('Failed to load expiring items');
        }
    };

    const filterItems = () => {
        let filtered = items;

        if (searchQuery) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        setFilteredItems(filtered);
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        try {
            await api.delete(`/pantry/${id}`);
            setItems(items.filter(item => item.id !== id));
            toast.success('Item deleted');
        } catch (error) {
            toast.error('Failed to delete item');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="flex items-center justify-center h-96">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Pantry</h1>
                        <p className="text-gray-600 mt-1">Manage your ingredients and track expiry dates</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Add Item
                    </button>
                </div>

                {/* Expiring Soon Alert */}
                {expiringItems.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                                <h3 className="font-medium text-amber-900">Items Expiring Soon</h3>
                                <p className="text-sm text-amber-700 mt-1">
                                    {expiringItems.length} item{expiringItems.length > 1 ? 's' : ''} expiring within 7 days
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Search */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search ingredients..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems.map(item => (
                        <PantryItemCard key={item.id} item={item} onDelete={handleDelete} />
                    ))}
                </div>
            </div>

            {showAddModal && (
                <AddItemModal
                    onClose={() => setShowAddModal(false)}
                    onSuccess={() => {
                        fetchPantryItems();
                        fetchExpiringItems();
                    }}
                />
            )}
        </div>
    );
};

const PantryItemCard = ({ item, onDelete }) => (
    <div className="bg-white rounded-lg border p-4">
        <div className="flex justify-between">
            <h3>{item.name}</h3>
            <button onClick={() => onDelete(item.id)}>
                <X />
            </button>
        </div>
        <p>{item.quantity} {item.unit}</p>
    </div>
);

const AddItemModal = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        unit: 'pieces'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post('/pantry', {
            ...formData,
            quantity: parseFloat(formData.quantity)
        });

        onSuccess();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80 space-y-3">
                <input
                    placeholder="Item Name"
                    className="w-full border p-2"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                    placeholder="Quantity"
                    type="number"
                    className="w-full border p-2"
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white w-full py-2 rounded"
                >
                    Add Item
                </button>

                <button onClick={onClose} className="w-full text-gray-500">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Pantry;