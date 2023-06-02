import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StickerCard = ({ user, updateListItems,setUpdateAfterCreate, setUpdateAfterRemove, setUpdateStatus, updateAfterCreate, updateAfterRemove }) => {
    
  const navigate = useNavigate();

  const [stickerInformation, setStickerInformation] = useState([]);


    const [valList, setValList] = useState("lists");

    // const [getList, setGetList] = useState([])
    const handleList = (e) => {
      setValList(e.target.value)

    }

let showListWishlist ; 

if (valList === 'lists') {
  showListWishlist = stickerInformation?.lists
} else {
  showListWishlist = stickerInformation?.wishlists
}
    const params = useParams();

    const [listDetail, setListDetail] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleAddList = (e) => {
      // console.log(user.id)
      // console.log(params)


      if (!user){
        navigate('/profile')
      } else {

        const listData = {
          user_id: user.id,
          item_id: params.id,
          list_type: valList,
          sub_item_id: 1,
        }

        fetch(`/${valList}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(listData)
        })
        .then((res) => {
          if (res.ok) {
            res.json().then((userData) => {
              setListDetail(userData)
            }).then(setUpdateAfterCreate);
          } else {
            res.json().then((err) => setErrors(err.errors))
          }
        })
      }

      
    }

// console.log(stickerInformation?.lists)
// console.log(valList)
    let renderRemoveCollection = showListWishlist?.filter(product => product.user.username.includes(user?.username))
    let renderRemoveWishlist = showListWishlist?.filter(product => product.user.username.includes(user?.username))
    // let renderWishlist = stickerInformation?.wishlists?.filter(product => product.user.username.includes(user?.username))

// console.log(renderRemoveCollection)
// console.log(renderRemoveWishlist)
    const showButton = renderRemoveCollection?.length===0 ?

      <button className="text-white bg-red-300 hover:bg-red-400  font-medium rounded-l-lg text-sm px-5 py-2.5 text-center " onClick={handleAddList}>ADD TO</button> : 
      <button className="text-white bg-red-300 hover:bg-red-400  font-medium rounded-l-lg text-sm px-5 py-2.5 text-center " onClick={handleRemoveItem}>REMOVE</button>

    // const showMinuePlusButton = renderRemoveCollection?.length ===0 ?  <button onClick={handleAddList}><i className="fa-solid fa-plus"></i></button> : <button><i className="fa-solid fa-minus"></i></button>

    // function fetchListId(){
    //   fetch(`/lists`).then((res)=> {
    //     if (res.ok) {
    //       res.json().then((listData)=> {
    //         setGetList(listData)
    //       })
    //     }console.log(getList)
    //   })
    // }

// console.log(updateListItems)
// console.log(valList)

    useEffect(() => {
        fetch(`/items/${params.id}`)
        .then(res => res.json())
        .then(res => setStickerInformation(res))
        .then(setUpdateStatus)
    }, [updateAfterCreate, updateAfterRemove])

// console.log(errors)
// console.log(stickerInformation.lists)
// console.log(stickerInformation)
let renderCollectionId = showListWishlist?.filter(type => type.list_type.includes(`${valList}`))
// console.log(stickerInformation?.valList)
// console.log(valList)
    function handleRemoveItem(){
      fetch(`/${valList}/${renderCollectionId[0]?.id}}`, {
        method: "DELETE",
      })
      .then(setUpdateAfterRemove)
    }

  return (
    <div className="container mx-auto font-apercu my-8 xl:px-20 lg:px-20 md:px-2 sm:px-10 px-10">
      <div className=" columns-1 sm:columns-1 md:columns-2 lg:columns-3 lg:flex xl:columns-3 gap-8">
        {/* <div className=" flex w-1/6 sm:w-1/6 md:w-1/6 md:flex sm:flex lg:w-1/6 lg:flex-none lg:flex-col lg:w-12">
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img1} alt={wearInformation?.item_name}></img>
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img2} alt={wearInformation?.item_name}></img>
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img3} alt={wearInformation?.item_name}></img>
        </div> */}
        <img className="w-full sm:w-full md:w-full lg:w-2/6" src={stickerInformation.images} alt={stickerInformation?.item_name}></img>
        <div className="text-left">
          <h1 className="font-[700] text-2xl ">Stickers</h1>
          <h2 className="font-[700] text-xl ">{stickerInformation?.item_name}</h2>
          <p className="font-[200]"></p>
          <div className="my-4">
            <div className="columns-1 lg:columns-2">
              <div>
                <p> <b>Image Source:</b> <a href={stickerInformation?.description} target="_blank" rel="noreferrer">{stickerInformation?.description}</a> </p>
                {/* <p> <b>Original Price:</b> ${wearInformation?.original_price} </p>
                <p> <b>Size:</b> {wearInformation?.size}</p> */}
              </div>
              {/* <div>
                <p> <b>Store Exclusive:</b> {wearInformation?.store_exclusive?.toString()}</p>
                <p> <b>Limited Edition:</b> {wearInformation?.limited_edition?.toString()}</p>
              </div>                 */}
            </div>

          </div>
          <div className="inline flex">
            {/* <button onClick={handleAddList}>ADD TO</button>
            <button onClick={handleRemoveItem}>REMOVE</button> */}
            {showButton}
           
            <select value={valList} onChange={handleList} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 ">
              <option value="lists">Collection</option>
              <option value="wishlists">Wishlist</option>
            </select>
            {/* <button onClick={handleAddList}><i className="fa-solid fa-plus"></i></button> */}
            {/* <button><i className="fa-solid fa-minus"></i></button> */}
            {/* {showMinuePlusButton} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickerCard