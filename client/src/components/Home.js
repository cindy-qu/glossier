import React from 'react'
import CollectionCard from './Collections/CollectionCard'


const Home = ({ collectionCategories, handleSkincareCard }) => {
    const renderCollections = collectionCategories.map((categories) => {
        return (
            <CollectionCard 
                key={ categories.id }
                item_type={ categories.item_type }
                item_type_id={ categories.id }
                category_image= {categories.category_image}
                handleSkincareCard={ handleSkincareCard }
            />
        )
    })
  return (
    <div >
        <h1 className="font-apercu">Categories</h1>
        <div className="mx-20 my-8">
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                { renderCollections }
            </div>
            
        </div>
        
    </div>
  )
}

export default Home