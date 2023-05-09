import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StickerCard = ({ user, updateListItems,setUpdateAfterCreate, setUpdateAfterRemove }) => {
    const [stickerInformation, setStickerInformation] = useState([]);

    const [list, setList] = useState("Collection")

    const [getList, setGetList] = useState([])
    const handleList = (e) => {
      setList(e.target.value)

    }

    const params = useParams();

    const [listDetail, setListDetail] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleAddList = (e) => {
      console.log(params)
      const listData = {
        user_id: user.id,
        item_id: params.id,
        list_type: list,
      }

      fetch(`/lists`, {
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

    // function fetchListId(){
    //   fetch(`/lists`).then((res)=> {
    //     if (res.ok) {
    //       res.json().then((listData)=> {
    //         setGetList(listData)
    //       })
    //     }console.log(getList)
    //   })
    // }

console.log(updateListItems)

    useEffect(() => {
        fetch(`/items/${params.id}`)
        .then(res => res.json())
        .then(res => setStickerInformation(res))
    }, [])

console.log(errors)
console.log(stickerInformation.lists)
let renderCollectionId = stickerInformation?.lists?.filter(type => type.list_type.includes(`${list}`))
// console.log(renderCollectionId[0]?.id)
    function handleRemoveItem(){
      fetch(`/lists/${renderCollectionId[0]?.id}}`, {
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
          <div>
            <button onClick={handleAddList}>ADD TO</button>
            <button onClick={handleRemoveItem}>REMOVE</button>
            <select value={list} onChange={handleList} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option value="Collection">Collection</option>
              <option value="Wishlist">Wishlist</option>
            </select>
            <button onClick={handleAddList}><i className="fa-solid fa-plus"></i></button>
            {/* <button><i className="fa-solid fa-minus"></i></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickerCard