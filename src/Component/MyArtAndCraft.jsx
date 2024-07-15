import React, { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from './Loader';

const MyArtAndCraft = () => {
  const { user } = useAuth();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.email) {
      fetch(`https://fiber-fantasia-server-site.vercel.app/myCraft/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setItem(data);
          setLoading(false)

        })
        .catch(error => {
          alert('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = _id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://fiber-fantasia-server-site.vercel.app/myCraft/${_id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
                });
                const remaining = item.filter(cof => cof._id !== _id);
                setItem(remaining);
              }
            });
        } 
        
        else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  };


  if(loading){
    return <><Loader></Loader></>
  }

  if(item.length < 1){
    return <div className='text-3xl text-pink-600 items-center mx-auto flex-grow border-2 border-pink-500'><h3>Yet you have not add any Art of Craft item</h3></div>
  }
  return (
    <div className=' grid md:grid-cols-2 lg:grid-cols-3 lg:flex-col'>
      {
        item?.map(p => (<h4 key={item.id}><div className="w-full p-2">
          <div className="card bg-base-100 shadow-xl h-full flex flex-col">
            <figure className="h-64 overflow-hidden">
              <img
                src={p.imageUrl || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title text-lg font-bold">{p?.name}</h2>
                <p className="mt-2"><strong>Price:</strong> ${p.price}</p>
                <p><strong>Publish Date:</strong> {new Date(p.publishDate).toLocaleDateString()}</p>
                <p><strong>Rating:</strong> ⭐ ({p.rating}/5)</p>
              </div>
              <div className="card-actions mt-4 justify-between">
                <button className="btn btn-primary"><Link to={`/update/${p?._id}`}>Update</Link></button>
                <button className="btn btn-primary" onClick={() => handleDelete(p._id)} >Delete</button>
              </div>
            </div>
          </div>
        </div></h4>))
      }
    </div>
  );
};

export default MyArtAndCraft;