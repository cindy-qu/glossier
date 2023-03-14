import React, { useEffect, useState } from 'react'
import BalmCard from './BalmCard'

const Balm = ( {balmCollectionCard} ) => {
    const [balmCollection, setBalmCollection] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/item_categories/1")
        .then(res => res.json())
        .then(res => setBalmCollection(res))

      },[])
    

    const renderBalmCollections = balmCollection?.items?.map((balms) => {
        return (
            // <BalmCard 
            //     key={ balms.id }

            // />
            <div key={ balms.id }>
                <img src={balms.images}></img>
                <h2>{balms.item_detail}</h2>
                <p>{balms.color}</p>
            </div>
        )
    })

  return (
    <div>
        <div>
            <h1>Balm Dotcom</h1>
        </div>

            { renderBalmCollections }
  
    </div>
    
    
  )
}

export default Balm