import React from 'react'
import CollectionCard from './Collections/CollectionCard'


const Home = ({ collectionCategories, handleSkincareCard }) => {
    const renderCollections = collectionCategories.map((categories) => {
        return (
            <CollectionCard 
                key={ categories.id }
                item_type={ categories.item_type }
                item_type_id={ categories.id }
                handleSkincareCard={ handleSkincareCard }
            />
        )
    })
  return (
    <div>
        <h1>Collections</h1>
        { renderCollections }
    </div>
  )
}

export default Home