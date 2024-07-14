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

if(loading){
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
              <h4><div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src={p.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{p.name}</h2>
                  <p>Published at: {p.publishDate}</p>
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
                src="data:image/jpeg;base64,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"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Embroidery!</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">View more</button>
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
                <button className="btn btn-secondary">View more</button>
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
                <button className="btn btn-secondary">View more</button>
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
                <button className="btn btn-secondary">View more</button>
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
                <button className="btn btn-secondary">View more</button>
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
                <button className="btn btn-secondary">View more</button>
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