import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollectionCard = ( { item_type_id, item_type, handleSkincareCard }) => {

  // let navigate = useNavigate();
  // const [balmCollection, setBalmCollection] = useState([])
  // const [balmErrors, setBalmErrors] = useState([])

  const collectionCapitalize = item_type.charAt(0).toUpperCase() + item_type.slice(1)

//   const handleOpenCard = (e) => {

//       fetch(`/item_categories/${item_type_id}`).then ((res) => {
//         if (res.ok) {
//           res.json().then(setBalmCollection)
//           navigate("/items/skincare/balms")
//         } else {
//           res.json().then(data => setBalmErrors(data.error))
//         }
//       }, [])
      
// console.log(balmErrors)
//   }

  return (
    <div>
      <p onClick={handleSkincareCard}>{collectionCapitalize}</p>
    </div>
  )
}

export default CollectionCard