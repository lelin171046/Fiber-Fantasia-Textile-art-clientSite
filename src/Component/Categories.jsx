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

    // Handling loading and error states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Render the component
    return (
        <div>
            {
            category
            
            }
        </div>
    );
};

export default Categories;
