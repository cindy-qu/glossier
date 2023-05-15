import React, { useEffect, useState } from 'react';
import MyCollectionCard from './MyCollectionCard';


const MyCollection = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [listUser, setListUser] = useState(null);
    const [updateAfterDelete, setUpdateAfterDelete] = useState(false)


    useEffect(() => {
        fetch("/me").then((res) => {
            if(res.ok) {
                res.json().then((userData) => {
                    setLoggedUser(userData);

                });
            }
        });
    },[])
console.log(loggedUser)


    useEffect(() => {
        fetch("/lists").then((res) => {
            if(res.ok) {
                res.json().then((userData) => {
                    setListUser(userData);

                });
            }
        });
    },[updateAfterDelete])

    

//   console.log(loggedUser?.items[0]?.lists[0]?.list_type)

//   let firstFilter = loggedUser?.items.map((product)=>product)
//   console.log(firstFilter)
//     let renderFilter = listUser?.filter(product => product.list_type.includes('Collection'))
//     console.log(renderFilter)

    let renderUser = listUser?.filter(product => product.user.username.includes(loggedUser?.username))

    let renderCollectionMap = renderUser?.map((product) => {
        // console.log(product)
        const str = product?.item?.images
        var fields = str?.split('~');
        var img1 = fields?.[0];
        const searchName = product?.item?.item_name ? product?.item?.item_name : `${product?.color} ${product?.item?.item_name}`
// console.log(product?.item?.item_category?.item_type)

        const pathName = product?.item?.item_category?.item_type ? product?.item?.item_category?.item_type : `skincare/balms`
        // console.log(pathName)

        const productIdName = product?.item?.id
        
        return(
            <MyCollectionCard 
                key={product?.id}
                key1={product?.id}
                searchName={searchName}
                pathName={pathName}
                img1={img1}
                productIdName={productIdName}
                setUpdateAfterDelete={setUpdateAfterDelete}

            />
            // <Link key={product?.id}  
            //     <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
            //         <img className="object-contain rounded-t-lg w-full h-64  " src={img1} alt={searchName}/>
            //         <div className="p-5">
            //         <h2>{searchName}</h2>
            //         </div>
            //     </div>
            // </Link>
        )
    })

    // const renderWishlist = listUser?.list_type?.filter(product => product.match("wishlist")).map((product) => {
    //     return (

    //             <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
    //                 <div className="p-5">
    //                     <h2>{product?.item?.item_name}</h2>
    //                 </div>
    //             </div>

    //     )
    // })




  return (
    <div>
        <h1 className="font-apercu">My Collection</h1>
        <div className="mx-20 my-8">
            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                { renderCollectionMap }
            </div>
        </div>
    </div>
  )
}

export default MyCollection