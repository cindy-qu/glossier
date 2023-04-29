import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const StickerCard = () => {
    const [stickerInformation, setStickerInformation] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`/items/${params.id}`)
        .then(res => res.json())
        .then(res => setStickerInformation(res))
    }, [])


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
        </div>
      </div>
    </div>
  )
}

export default StickerCard