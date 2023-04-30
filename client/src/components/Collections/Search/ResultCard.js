import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';

const ResultCard = ({ searchDetail}) => {

    const renderSearchCards = searchDetail?.map((search) => {
        const str = search?.images;
        var fields = str?.split('~');
        var img1 = fields?.[0];

        const searchName = search?.item_name ? search?.item_name : `${search?.color} ${search?.item?.item_name}`

        const pathName = search?.item_category?.item_type ? search?.item_category?.item_type : `skincare/balms`

        return (
            <Link key={search?.id} to={`/items/${pathName}/${search.id}`}>
                <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow " >
                    <img className="object-cover h-64 w-full " alt={search.item_name} src={img1}></img>
                    <div className="p-5">
                    <h2>{searchName}</h2>
                    </div>
                </div>
            </Link>           
        )
    })


  return (
    <>{renderSearchCards}</>
  )
}

export default ResultCard