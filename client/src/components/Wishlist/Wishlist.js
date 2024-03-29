import React, { useEffect, useState } from 'react';
import WishlistCard from './WishlistCard';


const Wishlist = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [listUser, setListUser] = useState(null);
    const [updateAfterWishlistDelete, setUpdateAfterWishlistDelete] = useState(false)
    
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
        fetch("/wishlists").then((res) => {
            if(res.ok) {
                res.json().then((userData) => {
                    setListUser(userData);

                });
            }
        });
    },[updateAfterWishlistDelete])

    console.log(listUser)

    // let renderFilter = listUser?.filter(product => product.list_type.includes('Wishlist'))

    let renderUser = listUser?.filter(product => product.user.username.includes(loggedUser?.username))
    let renderWishlistMap = renderUser?.map((product) => {

        const str = product?.item?.images
        var fields = str?.split('~')
        var img1 = fields?.[0];
        const searchName = product?.item?.item_name ? product?.item?.item_name : `${product?.color} ${product?.item?.item_name}`

        const pathName = product?.item?.item_category?.item_type ? product?.item?.item_category?.item_type : `skincare/balms`

        const productIdName = product?.item?.id
        
        return(
            <WishlistCard 
            key={product?.id}
            key2={product?.id}
            searchName={searchName}
            pathName={pathName}
            img1={img1}
            productIdName={productIdName}
            setUpdateAfterWishlistDelete={setUpdateAfterWishlistDelete}
            />
            // <Link key={product?.id} to={`/items/${pathName}/${product?.item?.id}`}>
            //     <div className="transform transition duration-500 hover:scale-105 bg-white border border-gray-200 rounded-lg shadow  font-apercu">
            //         <img className="object-contain rounded-t-lg w-full h-64  " src={img1} alt={searchName}/>
            //         <div className="p-5">
            //         <h2>{searchName}</h2>
            //         </div>
            //     </div>
            // </Link>
        )
    })


const renderEmptyWishlist = renderWishlistMap?.length > 0 ? 
<div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
{ renderWishlistMap }
</div>: 
<div>It looks like you haven't added anything to your wishlist yet.</div>

  return (
    <div>
        <h1 className="font-apercu">Wishlist</h1>
        <div className="mx-20 my-8">
            
                { renderEmptyWishlist }

        </div>
    </div>
  )
}

export default Wishlist



