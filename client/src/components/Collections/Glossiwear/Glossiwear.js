import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Glossiwear = () => {
  const [wearCollection, setWearCollection] = useState([]);

  useEffect(() => {
    fetch("/item_categories/3")
    .then(res => res.json())
    .then(res => setWearCollection(res))
  },[])

  const renderWearCollections = wearCollection?.items?.map((wear) => {
    const str = wear?.images;
    var fields = str?.split('~');
    var img1 = fields?.[0];
    return (
      <Link key={wear?.id} to={`/items/glossiwear/${wear.id}/`}>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu" >
        <img className="rounded-t-lg" alt={wear.item_name} src={img1}></img>
        <div className="p-5">
          <h2>{wear.item_name}</h2>
        </div>
      </div>
      </Link>
    )
  })
  return (
    <div>
      <h1 className="font-apercu">GlossiWear</h1>
      <div className="mx-20 my-8">
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          { renderWearCollections }
        </div>
      </div>
    </div>
  )
}

export default Glossiwear