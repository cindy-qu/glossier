import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BalmCard = ({ collectionCategories, individualBalm }) => {

  const [balmInformation, setBalmInformation] = useState([]);


  const params = useParams();

  useEffect(() => {
    fetch(`/sub_items/${params.id}`)
      .then(res => res.json())
      .then(res => setBalmInformation(res))

  }, [])

  const str = balmInformation?.images;
  
  var fields = str?.split('~');

  var img1 = fields?.[0];
  var img2 = fields?.[1];
  var img3 = fields?.[2];


  const [balmImage, setBalmImage] = useState("");
  const [fallback, setFallback] = useState(false)


  const changeImage = (e) => {
    setBalmImage(e.target.getAttribute('src'))
  }

  const reloadSrc = (e) => {
    if(fallback) {
      e.target.src= img1
    } else {
      e.target.src = balmImage
      setFallback(true)
    }
  }
  return (
    <div className="container mx-auto font-apercu my-8 xl:px-20 lg:px-20 md:px-2 sm:px-10 px-10">
      <div className=" columns-1 sm:columns-1 md:columns-2 lg:columns-3 lg:flex xl:columns-3 gap-8">
        <div className=" flex w-1/6 sm:w-1/6 md:w-1/6 md:flex sm:flex lg:w-1/6 lg:flex-none lg:flex-col lg:w-12">
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img1} alt={balmInformation?.item_name}></img>
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img2} alt={balmInformation?.item_name}></img>
          <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img3} alt={balmInformation?.item_name}></img>
        </div>
        <img className="w-full sm:w-full md:w-full lg:w-2/6" src={balmImage} onError={reloadSrc} alt={balmInformation?.item_name}></img>
        <div className="text-left">
          <h1 className="font-[700] text-2xl ">Balm Dotcom</h1>
          <h2 className="font-[700] text-xl ">{balmInformation?.color}</h2>
          <p className="font-[200]">{balmInformation?.item_detail}</p>
          <div className="my-4">
            <div className="columns-1 lg:columns-2">
              <div>
                <p> <b>Release Date:</b> {balmInformation?.release_date} </p>
                <p> <b>Original Price:</b> ${balmInformation?.original_price} </p>
                <p> <b>Size:</b> {balmInformation?.size}</p>
              </div>
              <div>
                <p> <b>Store Exclusive:</b> {balmInformation?.store_exclusive?.toString()}</p>
                <p> <b>Limited Edition:</b> {balmInformation?.limited_edition?.toString()}</p>
              </div>
            </div>
            <div className="my-3">
              <p> <b>Description: </b>{balmInformation?.description}</p>
            </div>
            <div className="my-3">
              <p> <b>Ingredients:</b> {balmInformation?.ingredients}</p>
            </div>


          </div>

        </div>
      </div>


    </div>
  )
}

export default BalmCard