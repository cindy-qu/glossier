import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import ResultCard from './ResultCard'

const Results = ({searchDetail}) => {

    // const [searchDetail, setSearchDetail] = useState([])

    const params = useParams();
    const searchTerm = params.search

//     async function fetchSearch ( searchTerm )  {
//       let response = await fetch(`http://localhost:3000/search/${searchTerm}`, {
//       method: "GET",
//       headers:{
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       },

//   })

//   let responseJson = await response.json()
//   return responseJson
 
// }

// const handleKeyDown = async (e) => {
  


//        const searchArray = await fetchSearch(searchTerm)
//         setSearchDetail(searchArray)
//        // navigate(`/results/${searchItem}`)
   
// }
// handleKeyDown()

    // useEffect(() => {


    //         fetchSearch(searchTerm)

            
    //         .then((info) => {
    //           setSearchDetail(info)

    //         }
    //         )
    //         return searchDetail

    // }, [])




// console.log(searchDetail)



    // const renderSearchCards = searchDetail?.map((search) => {
    //     const str = search?.images;
    //     var fields = str?.split('~');
    //     var img1 = fields?.[0];

    //     const searchName = search?.item_name ? search?.item_name : `${search?.color} ${search?.item?.item_name}`

    //     const pathName = search?.item_category?.item_type ? search?.item_category?.item_type : `skincare/balms`

    //     return (
    //         <Link key={search?.id} to={`/items/${pathName}/${search.id}/`}>
    //             <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow " >
    //                 <img className="object-cover h-64 w-full " alt={search.item_name} src={img1}></img>
    //                 <div className="p-5">
    //                 <h2>{searchName}</h2>
    //                 </div>
    //             </div>
    //         </Link>           
    //     )
    // })


  return (
    // <div>Results for <b>{params.search}</b></div>
    <div>
      <h1  className="font-apercu">Results for <b>{params.search}</b></h1>
      <div className="mx-20 my-8">
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* { renderSearchCards } */}
          <ResultCard 
          searchDetail={searchDetail}
          />
        </div>
      </div>
    </div>

  )
}

export default Results