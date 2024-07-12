import React from 'react';
import Banner from './Banner';
import Newslater from './Newslater';
import Stat from './Stat';
// import Banner from './Banner';

const Home = () => {
  return (
    <div>

      <div className='hidden lg:block lg:w-full mx-auto mt-5'>
        <div className=' w-full h-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: "1" }}>
          <div className='flex justify-center items-center h-full'>
            <div className=' w-[400px] md:w-[700px]  lg:w-[800px] mx-auto h-60'>
              <h3 className='text-3xl text-white text-center'>Crafting Connections Through Textile Art</h3>
              <input type="search" name="search" placeholder='Search here' value={''} className='w-full h-16 border-2 rounded-r-xl border-gray-400 mt-12 px-5 ' id="" />
            </div>
          </div>
        </div>
      </div>
        <Banner />

      <h4><div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div></h4>
      <div className="">
        <div className="">
        <h4><div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div></h4>
        </div>
        <div className="py-10">
              <Stat></Stat>
        </div>
      </div>
      <Newslater></Newslater>
    </div>
  );
};

export default Home;