import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ( { item_type_id, item_type, category_image, handleSkincareCard }) => {

  let navigate = useNavigate();
  // const [balmCollection, setBalmCollection] = useState([])
  const [balmErrors, setBalmErrors] = useState([])

  const collectionCapitalize = item_type.charAt(0).toUpperCase() + item_type.slice(1)

  const handleOpenCard = (e) => {

      fetch(`/items/${item_type_id}`).then ((res) => {
        if (res.ok) {
          navigate(`/items/${item_type}/`)
        } else {
          res.json().then(data => setBalmErrors(data.error))
        }
      }, [])
      

  }

  return (
    <div onClick={handleOpenCard} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
      <img src={category_image} className="rounded-t-lg " alt={collectionCapitalize}></img>
      <div className="p-5">
        <p>{collectionCapitalize}</p>
      </div>
      
      
    </div>
  )
}

export default CollectionCard