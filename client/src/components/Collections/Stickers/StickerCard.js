import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StickerCard = ({ user, updateListItems,setUpdateAfterCreate, setUpdateAfterRemove, setUpdateStatus, updateAfterCreate, updateAfterRemove }) => {
    
  const navigate = useNavigate();

  const [stickerInformation, setStickerInformation] = useState([]);


    const [valList, setValList] = useState("lists");


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



      if (!user){
        navigate('/profile')
      } else {

        const listData = {
          user_id: user.id,
          item_id: params.id,
          list_type: valList,
          
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

    let renderRemoveCollection = showListWishlist?.filter(product => product.user.username.includes(user?.username))
    let renderRemoveWishlist = showListWishlist?.filter(product => product.user.username.includes(user?.username))

    const showButton = renderRemoveCollection?.length===0 ?

      <button className="text-white bg-red-300 hover:bg-red-400  font-medium rounded-l-lg text-sm px-5 py-2.5 text-center " onClick={handleAddList}>ADD TO</button> : 
      <button className="text-white bg-red-300 hover:bg-red-400  font-medium rounded-l-lg text-sm px-5 py-2.5 text-center " onClick={handleRemoveItem}>REMOVE</button>

const [ebaySearchLoaded, setEbaySearchLoaded] = useState([])

    useEffect(() => {
      
        fetch(`/items/${params.id}`)
        .then(res => res.json())
        .then(res => setStickerInformation(res))
        .then(setUpdateStatus)
        .then(res => setEbaySearchLoaded(res))
    }, [updateAfterCreate, updateAfterRemove])
    console.log(ebaySearchLoaded)

const [ebayInfo, setEbayInfo] = useState([])

    useEffect (() => {
      const asyncFunction = async () => {
        

          const data = {keywords: `glossier`+' '+stickerInformation?.item_name + ' ' + 'sticker'}
          console.log(data)
          fetch(`http://localhost:3000/search`, {
            method: "POST",
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => setEbayInfo(res))

          if (ebayInfo.length < 1) {
            const data = {keywords: `glossier`+' ' + 'sticker'}
          console.log(data)
          fetch(`http://localhost:3000/search`, {
            method: "POST",
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(res => setEbayInfo(res))
          } 
          console.log(ebayInfo?.findItemsByKeywordsResponse?.searchResult?.item)

      }
      asyncFunction();
    },[ebaySearchLoaded])

    console.log(ebayInfo?.findItemsByKeywordsResponse?.searchResult?.item)


const ebayItemCount = ebayInfo?.findItemsByKeywordsResponse?.searchResult?.count

const ebayTitle = ebayInfo?.findItemsByKeywordsResponse?.searchResult?.item

const ebayObj = Array.isArray(ebayTitle)
 console.log(ebayObj)

const ebayItems = Array.isArray(ebayTitle) ? ebayTitle?.map((ebayItem)=> {


        return (
          <div key={ebayItem?.title} className="max-w-full flex">

              <img className="border-l border-b border-t border-gray-400 
                              h-30 md:h:36 lg:h-50  xl:h-50
                              flex-none 
                              bg-cover 
                              rounded-l  
                              text-center 
                              overflow-hidden" src={ebayItem?.galleryURL}></img>
     
            <div className="border-r border-b border-l border-gray-400 border-l-0 border-t border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">

                <div className="text-gray-900 font-bold text-xs lg:text-base xl:text-base mb-2">{ebayItem?.title}</div>
                  <p className="text-xs lg:text-base text-gray-700 "><a className="underline text-red-200 hover:text-red-300 visited:text-red-400" href={ebayItem?.viewItemURL} target="_blank" rel="noreferrer">View Listing</a></p>
                </div>
                <div className="flex items-center">
                  
                  <div className="">
                    <span className="inline-block bg-glossier-pink rounded-full px-3 py-1 text-xs lg: text-sm font-semibold text-gray-700 mr-2 mb-2">${ebayItem?.sellingStatus?.currentPrice+`0`}</span>
                  </div>
                </div>
              </div>
            </div>
          
     
        )
      })
:

    <div key={ebayTitle?.title} className="max-w-full flex">

        <img className="border-l border-b border-t border-gray-400 
                        h-30 md:h:36 lg:h-50  xl:h-50
                        flex-none 
                        bg-cover 
                        rounded-l  
                        text-center 
                        overflow-hidden" src={ebayTitle?.galleryURL}></img>

      <div className="border-r border-b border-l border-gray-400 border-l-0 border-t border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">

          <div className="text-gray-900 font-bold text-xs lg:text-base xl:text-base mb-2">{ebayTitle?.title}</div>
            <p className="text-xs lg:text-base text-gray-700 "><a className="underline text-red-200 hover:text-red-300 visited:text-red-400" href={ebayTitle?.viewItemURL} target="_blank" rel="noreferrer">View Listing</a></p>
          </div>
          <div className="flex items-center">
            
            <div className="">
              <span className="inline-block bg-glossier-pink rounded-full px-3 py-1 text-xs lg: text-sm font-semibold text-gray-700 mr-2 mb-2">${ebayTitle?.sellingStatus?.currentPrice+`0`}</span>
            </div>
          </div>
        </div>
      </div>
    

  

let renderCollectionId = showListWishlist?.filter(type => type.list_type.includes(`${valList}`))

    function handleRemoveItem(){
      fetch(`/${valList}/${renderCollectionId[0]?.id}}`, {
        method: "DELETE",
      })
      .then(setUpdateAfterRemove)
    }

  return (
    <div className="container mx-auto font-apercu my-8 xl:px-20 lg:px-20 md:px-2 sm:px-10 px-10">
      <div className=" columns-1 sm:columns-1 md:columns-2 lg:columns-3 lg:flex xl:columns-3 gap-8">
       
        <img className="w-full sm:w-full md:w-full lg:w-2/6" src={stickerInformation.images} alt={stickerInformation?.item_name}></img>
        <div className="text-left">
          <h1 className="font-[700] text-2xl ">Stickers</h1>
          <h2 className="font-[700] text-xl ">{stickerInformation?.item_name}</h2>
          <p className="font-[200]"></p>
          <div className="my-4">
            <div className="columns-1 lg:columns-2">
              <div>
                <p className="break-all"> <b>Image Source:</b> <a className="text-sm underline text-red-200 hover:text-red-300 visited:text-red-400" href={stickerInformation?.description} target="_blank" rel="noreferrer">{stickerInformation?.description}</a> </p>
                
              </div>
             
            </div>

          </div>
          <div className="inline flex">
           
            {showButton}
           
            <select value={valList} onChange={handleList} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-4/12 p-2.5 ">
              <option value="lists">Collection</option>
              <option value="wishlists">Wishlist</option>
            </select>
           


          </div>

        </div>
      </div>
      <div>

      </div>
      <div className="py-6">
        <p className="py-4">Want one for your collection? We found these on eBay for you:</p>
          <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {ebayItems}
          </div>
            </div> 
    </div>
  )
}

export default StickerCard