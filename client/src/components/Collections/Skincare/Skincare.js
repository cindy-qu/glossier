import React from 'react'
import { useNavigate } from 'react-router-dom'
import Balm from './Balms/Balm'


const Skincare = () => {
    let navigate = useNavigate();

    const handleBalmCard = (e) => {
        navigate("/items/skincare/balms")
    
    }

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
        <h1>Skincare</h1>
        <p>After Baume</p>
        <p onClick={handleBalmCard}>Balm DotCom</p>
        
    </div>
  )
}

export default Skincare