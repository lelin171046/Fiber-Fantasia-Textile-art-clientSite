import React, { useState, useEffect } from 'react';
import useAuth from '../Hook/useAuth';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const oldData = useLoaderData();
    const {
        name,
        creator,
        description,
        publishDate,
        imageUrl,
        category,
        price,
        rating,
        customization,
        stockStatus
    } = oldData;

    const [formData, setFormData] = useState();

 

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const creator = form.creator.value;
        const imageUrl = form.imageUrl.value;
        const description = form.description.value;
        const publishDate = form.publishDate.value;
        const category = form.category.value;
        const price = form.price.value;
        const  rating = form. rating.value;
        const  customization = form. customization.value;
        const  stockStatus = form. stockStatus.value;
        const updateData = { name,
            creator,
            description,
            publishDate,
            imageUrl,
            category,
            price,
            rating,
            customization,
            stockStatus }
       

        fetch(`https://localhost:5001/update/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Item updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    return (
        <div>
            <div className="min-h-screen m-5 dark:bg-gray-100 dark:text-gray-800">
                <div className="p-4 border-2 border-pink-500 lg:p-16 shadow-2xl bg-white rounded-lg">
                    <h1 className="text-2xl text-pink-400 font-bold mb-4">Update Your Art or Craft</h1>
                    <form onSubmit={handleSubmit} className='max-w-screen-lg mx-auto'>
                        <div className="flex flex-col lg:flex-row gap-3 flex-grow">
                            <div className="w-full lg:w-1/2">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Update your Art or Craft Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Art or Craft name'
                                       defaultValue={name}
                                        
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
                                       defaultValue={creator}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        placeholder='Description'
                                        defaultValue={description}
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
                                       defaultValue={price}
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
                                       defaultValue={rating}
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
                                       defaultValue={publishDate}
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
                                        defaultValue={imageUrl}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        name="category"
                                        placeholder='Choose category'
                                        defaultValue={category}
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
                                      defaultValue={customization}
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
                                       defaultValue={stockStatus}
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
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
