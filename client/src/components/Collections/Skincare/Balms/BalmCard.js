import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BalmCard = ({ collectionCategories, individualBalm }) => {

  const [balmInformation, setBalmInformation] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/items/${params.id}`)
      .then(res => res.json())
      .then(res => setBalmInformation(res))

  }, [])

  const str = balmInformation?.images;
  
  var fields = str?.split('~');

  var img1 = fields?.[0];
  var img2 = fields?.[1];
  var img3 = fields?.[2];

  return (
    <div className="container mx-auto font-apercu my-8 xl:px-20 lg:px-20 md:px-20 sm:px-10 px-10">
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-2 xl:columns-2 gap-8">
        <img className="px-20 " src={img1}></img>
        <div className="text-left">
          <h1 className="font-[700] text-2xl">{balmInformation?.item_name}</h1>
          <p className="font-[200]">{balmInformation?.item_detail}</p>
          <div className="my-4">
            <div className="columns-2">
              <div>
                <p> <b>Release Date:</b> {balmInformation?.release_date} </p>
                <p> <b>Original Price:</b> {balmInformation?.original_price} </p>
                <p> <b>Size:</b> {balmInformation?.size}</p>
              </div>
              <div>
                <p> <b>Store Exclusive:</b> {balmInformation?.store_exclusive}</p>
                <p> <b>Limited Edition:</b> {balmInformation?.limited_edition}</p>
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