import React from 'react';
import { Link } from 'react-router-dom';

const MyCollectionCard = ({ key1, searchName, pathName, img1, productIdName, setUpdateAfterDelete }) => {

  function handleDelete(){
    fetch(`/lists/${key1}`, {
      method: "DELETE",
    })
    .then(setUpdateAfterDelete)
  }
  

                
  return (
    <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
      <button onClick={handleDelete} className=" flex justify-end"><i className="fa-solid fa-xmark text-rose-300"></i></button>
      <Link key={key1} to={`/items/${pathName}/${productIdName}`}>
        <div >
          <img className="object-contain rounded-t-lg w-full h-64  " src={img1} alt={searchName}/>
          <div className="p-5">
            <h2>{searchName}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MyCollectionCard