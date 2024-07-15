import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Newslater from './Newslater';
import Stat from './Stat';
import useAuth from '../Hook/useAuth';
import { Link } from 'react-router-dom';
import Loader from './Loader';
// import Banner from './Banner';

const Home = () => {

  const { user, } = useAuth();
  const [craft, setCraft] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5001/allcraft`)
      .then(res => res.json())
      .then(data => {

        const sortedData = data.sort((a, b) => b._id.localeCompare(a._id));
        const latestCrafts = sortedData.slice(0, 6);
        setCraft(latestCrafts);
        setLoading(false)
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>
  }
  return (
    <div>


      <div className="">
        <Newslater></Newslater>
      </div>
      <div className="">
        <Banner></Banner>
      </div>


      <div className="grid gap-4 lg:grid-cols-3">
        {
          craft?.map(p => (
            <div key={p._id} className="">
              <h4><div className="card card-compact max-h-96 bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src={p.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.name}</h2>
                  <p className="mt-2"><strong>Price:</strong> ${p.price}</p>
                  <p><strong>Rating:</strong> ⭐ ({p.rating}/5)</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/allart/details/${p?._id}`}>View details</Link></button>
                  </div>
                </div>
              </div></h4>
            </div>
          ))
        }

      </div>
      <div className="py-6">
        <h3 className='items-center flex border-2 py-2 font-bold text-2xl justify-center border-pink-500 rounded-lg'>Sub-Category</h3>
        <div className="grid lg:grid-cols-3 gap-3">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src='' alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Embroidery!</h2>
              <div className="card-actions justify-end">
                <Link to={`/category/Embroidery}`}> <button className="btn btn-secondary">View more</button></Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5GUDGVD02r-TO0BbTV1Hhk6QoWzr995udqCbxv8Pf_dG5-4U5OYJJSOhQgECrkewJfo&usqp=CAU"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Knitting & Crocheting!</h2>
              <div className="card-actions justify-end">
                <Link to={`/category/Knitting`}> <button className="btn btn-secondary">View more</button></Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://stitchingthejourney.com/wp-content/uploads/2020/09/hand-quilting-29-1024x768.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white"> Quilting!</h2>
              <div className="card-actions justify-end">
                <Link to={`/category/Quilting`}> <button className="btn btn-secondary">View more</button></Link>

              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://eastendarts.ca/wp-content/uploads/2020/10/BYOBanner22.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Beadwork!</h2>
              <div className="card-actions justify-end">
                <Link to={`/category/Beadwork`}> <button className="btn btn-secondary">View more</button></Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://www.theadairgroup.com/blog/wp-content/uploads/2018/12/handmade-tie-dye-shirts.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Tie-Dyeing!</h2>
              <div className="card-actions justify-end">
                <Link to={`category/Tie-Dyeing`}>  <button className="btn btn-secondary">View more</button></Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/71tbmY7LDgL._AC_UF894,1000_QL80_.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Macrame!</h2>
              <div className="card-actions justify-end">
                <Link to={`category/Macrame`}>  <button className="btn btn-secondary">View more</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <Stat></Stat>
      </div>
      <div className='hidden lg:block lg:w-full mx-auto mt-5'>
        <div className=' w-full h-full'>
          <div className='flex justify-center items-center h-full'>
            <div className=' w-[400px] md:w-[700px]  lg:w-[800px] mx-auto h-60'>
              <h3 className='text-3xl text-white text-center'></h3>
              <input type="search" name="search" placeholder='Search here' value={''} className='w-full h-16 border-2 rounded-r-xl mt-12 px-5 ' id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;