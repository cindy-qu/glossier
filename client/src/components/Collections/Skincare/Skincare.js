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

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="cleanserconcentrate" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Cleanser_Concentrare_-_1_2000x.jpg?v=1656604709"></img>
              <div className="p-5">

                <h2>Cleanser Concentrate</h2>
              </div>
            </div>
          
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="Futuredew" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/1_2000x.webp?v=1660932994"></img>
              <div className="p-5">

                <h2>Futuredew</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="invisible shield" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/InvisibleShield_2000x.jpg?v=1656604706"></img>
              <div className="p-5">

                <h2>Invisible Shield</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="mega greens galaxy" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Glossier-Mega-Greens-Galaxy-Pack-2_2000x.webp?v=1661278690"></img>
              <div className="p-5">

                <h2>Mega Greens Galaxy Pack</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="milky jelly cleanser" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/MilkyJelly_Carousel_1_2000x.webp?v=1651799493"></img>
              <div className="p-5">

                <h2>Milky Jelly Cleanser</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="milky oil" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/01_ShopGrid_2000x.jpg?v=1656604711"></img>
              <div className="p-5">

                <h2>Milky Oil</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="moon mask" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Glossier-Moisturizing-Moon-Mask-2_2000x.jpg?v=1656604710"></img>
              <div className="p-5">

                <h2>Moisturizing Moon Mask</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="Priming Moisturizer Rich" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/glossier-prm_1_v2_2000x.jpg?v=1669905634"></img>
              <div className="p-5">

                <h2>Priming Moisturizer Rich</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="priming moisturizer" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/PrimingMoisturizer_2000x.jpg?v=1656604712"></img>
              <div className="p-5">

                <h2>Priming Moisturizer</h2>
              </div>
            </div>

          
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="Priming Moisturizer Balance" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/PMB_1_2000x.jpg?v=1656604713"></img>
              <div className="p-5">

                <h2>Priming Moisturizer Balance</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="solution" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Solution_2000x.jpg?v=1656604712"></img>
              <div className="p-5">

                <h2>Solution</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="super bounce" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/SuperBounce_0_Global_01_2000x.jpg?v=1656604714"></img>
              <div className="p-5">

                <h2>Super Bounce</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="super pure" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/SuperPure_0_Global_01_2000x.jpg?v=1656604718"></img>
              <div className="p-5">

                <h2>Super Pure</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="Super Glow" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/SuperGlow_0_Global_01_2000x.jpg?v=1656604715"></img>
              <div className="p-5">

                <h2>Super Glow</h2>
              </div>
            </div>

            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-apercu">
              <img className="rounded-t-lg" alt="Universal Pro-Retinol" src="https://cdn.shopify.com/s/files/1/0627/9164/7477/products/Universal_Pro-Retinol_-_1_2000x.jpg?v=1656604722"></img>
              <div className="p-5">

                <h2>Universal Pro-Retinol</h2>
              </div>
            </div>
          
          </div>
        </div> 
    </div>
  )
}

export default Skincare