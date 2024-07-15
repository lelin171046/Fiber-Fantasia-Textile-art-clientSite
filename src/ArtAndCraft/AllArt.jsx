import React, { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Component/Loader';

const AllArt = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [craft, setCraft] = useState([]);

  useEffect(() => {
    try {
      // setLoading(true);
      fetch(`https://fiber-fantasia-server-site-9h7ytplys.vercel.app/allcraft`)
        .then(res => res.json())
        .then(data => {
          setCraft(data);
          setLoading(false);
        })
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  if (loading) {
    return <Loader />
  }



  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {
          craft?.length == 0 ?
            <>
              <div className='min-h-screen flex justify-center items-center'>
                <h3>Empty Data</h3>
              </div>
            </> : craft.map((craft, index) => (
              <div key={index} className="w-full  p-2">
                <div className="card bg-base-100 shadow-xl h-full flex flex-col">
                  <figure className="h-64 overflow-hidden">
                    <img
                      src={craft.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                      alt={craft.name}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body flex flex-col justify-between">
                    <div>
                      <h2 className="card-title text-lg font-bold">{craft?.name}</h2>
                      <p className="mt-2"><strong>Price:</strong> ${craft.price}</p>
                      <p><strong>Publish Date:</strong> {new Date(craft.publishDate).toLocaleDateString()}</p>
                      <p><strong>Rating:</strong> ⭐ ({craft.rating}/5)</p>
                    </div>
                    <div className="card-actions mt-4 justify-end">
                      <button className="btn btn-primary"><Link to={`/allart/details/${craft?._id}`}>View details</Link></button>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default AllArt;
