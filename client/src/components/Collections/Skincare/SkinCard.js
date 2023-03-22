import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SkinCard = () => {
    const [skinInformation, setSkinInformation] = useState([]);

    const params = useParams();

    useEffect(() => {
        fetch(`/items/${params.id}`)
        .then(res => res.json())
        .then(res => setSkinInformation(res))
    },[])
    
    const str = skinInformation?.images;
    var fields = str?.split('~');
    var img1 = fields?.[0];
    var img2 = fields?.[1];
    var img3 = fields?.[2];

    const [skinImage, setSkinImage] = useState("");
    const [fallback,  setFallback] = useState(false)

    const changeImage = (e) => {
        setSkinImage(e.target.getAttribute('src'))
    }

    const reloadSrc = (e) => {
        if(fallback) {
            e.target.src = img1
        } else {
            e.target.src = skinImage
            setFallback(true)
        }
    }

  return (
    <div className="container mx-auto font-apercu my-8 xl:px-20 lg:px-20 md:px-2 sm:px-10 px-10">
        <div className=" columns-1 sm:columns-1 md:columns-2 lg:columns-3 lg:flex xl:columns-3 gap-8">
            <div className=" flex w-1/6 sm:w-1/6 md:w-1/6 md:flex sm:flex lg:w-1/6 lg:flex-none lg:flex-col lg:w-12">
                <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img1} alt={skinInformation?.item_name}></img>
                <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img2} alt={skinInformation?.item_name}></img>
                <img onClick={changeImage} className="mb-1 mr-1 md:mr-1 border hover:border-[#918386]" src={img3} alt={skinInformation?.item_name}></img>
            </div>
            <img className="w-full sm:w-full md:w-full lg:w-2/6" src={skinImage} onError={reloadSrc} alt={skinInformation?.item_name}></img>
            <div className="text-left">
                <h1 className="font-[700] text-2xl ">Balm Dotcom</h1>
                <h2 className="font-[700] text-xl ">{skinInformation?.color}</h2>
                <p className="font-[200]">{skinInformation?.item_detail}</p>
                <div className="my-4">
                    <div className="columns-1 lg:columns-2">
                    <div>
                        <p> <b>Release Date:</b> {skinInformation?.release_date} </p>
                        <p> <b>Original Price:</b> ${skinInformation?.original_price} </p>
                        <p> <b>Size:</b> {skinInformation?.size}</p>
                    </div>
                    <div>
                        <p> <b>Store Exclusive:</b> {skinInformation?.store_exclusive?.toString()}</p>
                        <p> <b>Limited Edition:</b> {skinInformation?.limited_edition?.toString()}</p>
                    </div>
                </div>
                <div className="my-3">
                <p> <b>Description: </b>{skinInformation?.description}</p>
                </div>
                <div className="my-3">
                <p> <b>Ingredients:</b> {skinInformation?.ingredients}</p>
                </div>


            </div>
            </div>
        </div>
    </div>
  )
}

export default SkinCard