import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Wishlist = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [listUser, setListUser] = useState(null);
    useEffect(() => {
        fetch("/me").then((res) => {
            if(res.ok) {
                res.json().then((userData) => {
                    setLoggedUser(userData);

                });
            }
        });
    },[])

    useEffect(() => {
        fetch("/lists").then((res) => {
            if(res.ok) {
                res.json().then((userData) => {
                    setListUser(userData);

                });
            }
        });
    },[])

    let renderFilter = listUser?.filter(product => product.list_type.includes('Collection'))
    console.log(renderFilter)

    let renderCollectionMap = renderFilter?.map((product) => {
        return(
            <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
               <div className="p-5">
                    <h2>{product?.item?.item_name}</h2>
                </div>
            </div>
          
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

export default Wishlist