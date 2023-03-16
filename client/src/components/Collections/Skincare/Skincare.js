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
        <h1 className="font-apercu">Skincare</h1>
        <div className="mx-20 my-8">
          <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="afterbaume" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/AfterBaume_PDP_2_2000x.jpg?v=1656604713"></img>
              <div className="p-5">

                <h2>After Baume</h2>
              </div>
            </div>
            <div onClick={handleBalmCard} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="balmdotcom" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/02_bdc-variant-carousel-trio_2000x.jpg?v=1674592543"></img>
              <div className="p-5">
                <h2 >Balm DotCom</h2>
              </div>
            </div>
            
          </div>
        </div> 
    </div>
  )
}

export default Skincare