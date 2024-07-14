import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Categories = () => {
    const { subcategory } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Ensure the subcategory is available before fetching
        if (subcategory) {
            fetch(`http://localhost:5001/category/${subcategory}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setCategory(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [subcategory]);

    console.log(category);

    // Handling loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Render the component
    return (
        <div>
            {category.length < 1 ? <div><h2 >Not Sub_Category Found!</h2></div> : category.map(item => <div key={item?._id} className="w-full p-2">
                <div className="card bg-base-100 shadow-xl h-full flex flex-col">
                    <figure className="h-64 overflow-hidden">
                        <img
                            src={item.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    <div className="card-body flex flex-col justify-between">
                        <div>
                            <h2 className="card-title text-lg font-bold">{item.name}</h2>
                            <p className="mt-2"><strong>Price:</strong> ${item.price}</p>
                            <p><strong>Publish Date:</strong> {new Date(item.publishDate).toLocaleDateString()}</p>
                            <p><strong>Rating:</strong> ⭐ ({item.rating}/5)</p>
                        </div>
                        <div className="card-actions mt-4 justify-end">
                            <button className="btn btn-primary">
                                <Link to={`/allart/details/${item._id}`}>View details</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
            }

        </div>
    );
};

export default Categories;
