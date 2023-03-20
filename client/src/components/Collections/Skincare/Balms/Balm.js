import React, { useEffect, useState } from 'react'
import BalmCard from './BalmCard'
import { useNavigate, Link } from 'react-router-dom'

const Balm = ( { collectionCategories, handleBalmCard } ) => {
    console.log(collectionCategories)
    let navigate = useNavigate();
    const [balmCollection, setBalmCollection] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/item_categories/1")
        .then(res => res.json())
        .then(res => setBalmCollection(res))

      },[])

    // const handleBalmCard = (e) => {
    //   fetch(`/items/${e.target.id}`).then ((res) => {
    //     if (res.ok) {
    //       navigate(`/items/skincare/balms/${e.target.id}/`)
    //       console.log(collectionCategories)
    //     } 
    //   }, [])
    //   console.log(e.target.id)
    // }
    
    // console.log(balmCollection?.items?.[0])
    // const str = balmCollection?.items?.[0]?.images;

    // var fields = str.split('~');

    // var img1 = fields[0];
    // var img2 = fields[1];
    // var img3 = field[2];


    const renderBalmCollections = balmCollection?.items?.map((balms) => {

      const str = balms?.images;
  
      var fields = str.split('~');
  
      var img1 = fields[0];
      // var img2 = fields[1];
      // var img3 = fields[2];


        return (
            // <BalmCard 
            //     key={ balms.id }

            // />
            <Link to ={`/items/skincare/balms/${balms.id}/`}>
            <div 
            // onClick={handleBalmCard}
            id={ balms.id }
            key={ balms.id }
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu " >
                <img  id={ balms.id } src={img1} className="rounded-t-lg " alt="balmdotcom"></img>
                <div className="p-5"  id={ balms.id }>
                  <h2  id={ balms.id } className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{balms.item_detail}</h2>
                </div>

                <p  id={ balms.id } className="mb-3 font-normal text-gray-700 dark:text-gray-400">{balms.color}</p>
            </div>
            </Link>
        )
    })

  return (
    <div className="mx-20 my-8">
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        { renderBalmCollections }
      </div>
    </div>

    
    
  )
}

export default Balm