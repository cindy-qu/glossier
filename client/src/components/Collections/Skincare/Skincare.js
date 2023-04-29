import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Balm from './Balms/Balm'


const Skincare = () => {
  const [skinCollection, setSkinCollection] = useState([])

  useEffect(() => {
    fetch("/item_categories/1")
    .then(res => res.json())
    .then(res => setSkinCollection(res))

  },[])

  const handleSkincareCard = (e) => {
    // navigate(`/items/skincare/${params.id}`)
console.log(params.id)
}
  const renderSkinCollections = skinCollection?.items?.map((skins) => {

    const str = skins?.images;

    var fields = str?.split('~');

    var img1 = fields?.[0];

    return (
      <Link key={skins?.id} to ={`/items/skincare/${skins.id}/`}>
      <div  key={skins?.id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
      <img className="rounded-t-lg" alt="balmdotcom" src={img1}></img>
      <div className="p-5">
        <h2 >{skins.item_name}</h2>
      </div>
    </div>
    </Link>
    )
  })

    let navigate = useNavigate();

    const handleBalmCard = (e) => {
        navigate("/items/skincare/balms")
    
    }
    const params = useParams();







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
        <h1 className="font-apercu ">Skincare</h1>
        <div className="mx-20 my-8">
          <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {renderSkinCollections}
          
          </div>
        </div> 
    </div>
  )
}

export default Skincare