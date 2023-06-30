import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Stickers = () => {
    const [stickerCollection, setStickerCollection] = useState([]);

    const [updateStatus, setUpdateStatus] = useState(false)

    useEffect(() => {
        fetch("/item_categories/4")
        .then(res => res.json())
        .then(res => setStickerCollection(res))

    },[])
    

    const renderStickerCollection = stickerCollection?.items?.map((sticker) => {
        return (
            <Link key={sticker?.id} to={`/items/stickers/${sticker.id}`}>
                <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu" >
                    <img className="object-contain rounded-t-lg w-full h-64  " alt={sticker.item_name} src={sticker?.images}></img>
                    <div className="p-5">
                        <h2>{sticker.item_name}</h2>
                    </div>
                </div>
            </Link>
        )
    })
  return (
    <div>
        <h1 className="font-apercu"> Stickers </h1>
        <div className="mx-20 my-8 mb-20">
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                { renderStickerCollection }
            </div>
        </div>
    </div>
  )
}

export default Stickers