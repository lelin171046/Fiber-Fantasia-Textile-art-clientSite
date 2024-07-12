import React, { useEffect, useState } from 'react';

const AddItem = () => {

    const [formData, setFormData] = useState({
        name: '',
        creator: '',
        description: '',
        publishDate: '',
        imageUrl: '',
        category: 'Embroidery',
        price: '',
        rating: '',
        customization: 'No',
        stockStatus: 'In stock'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // Add your form submission logic here

        fetch('http://localhost:5001/additem', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
    };

    return (
        <div className="min-h-screen  dark:bg-gray-100 dark:text-gray-800">
            <div className="p-4 border-4 border-red-600 lg:p-16 shadow-2xl bg-white rounded-lg">
            <h1 className="text-2xl text-pink-400 font-bold mb-4">Add Your Art or Craft</h1>
                <form onSubmit={handleSubmit} className=' max-w-screen-lg mx-auto'>
                    <div className="flex flex-col lg:flex-row gap-3 flex-grow">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Art or Craft Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Art or Craft name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Creator Name</label>
                                <input
                                    placeholder='Creator name'
                                    type="text"
                                    name="creator"
                                    value={formData.creator}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    placeholder='Description'
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder='Price'
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Rating</label>
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder='Rating'
                                    min="1"
                                    max="5"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Publish Date</label>
                                <input
                                    type="date"
                                    name="publishDate"
                                    value={formData.publishDate}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    placeholder='Drop your image url here'
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <select
                                    name="category"
                                    placeholder='Choose category'
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                >
                                    <option value="Embroidery">Embroidery</option>
                                    <option value="Knitting & Crocheting">Knitting & Crocheting</option>
                                    <option value="Quilting">Quilting</option>
                                    <option value="Beadwork">Beadwork</option>
                                    <option value="Tie-Dyeing">Tie-Dyeing</option>
                                    <option value="Macrame">Macrame</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Customization</label>
                                <select
                                    name="customization"
                                    value={formData.customization}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                                <select
                                    name="stockStatus"
                                    value={formData.stockStatus}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                >
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
