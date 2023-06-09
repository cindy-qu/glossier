// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Skincare from './components/Collections/Skincare/Skincare';
import Balm from './components/Collections/Skincare/Balms/Balm';
import BalmCard from './components/Collections/Skincare/Balms/BalmCard';
import SkinCard from './components/Collections/Skincare/SkinCard';
import Glossiwear from './components/Collections/Glossiwear/Glossiwear';
import GlossiwearCard from './components/Collections/Glossiwear/GlossiwearCard';
import Stickers from './components/Collections/Stickers/Stickers';
import StickerCard from './components/Collections/Stickers/StickerCard';
import Fragrance from './components/Collections/Fragrance/Fragrance';
import Results from './components/Collections/Search/Results';
import Profile from './components/Profile/Profile';
import Login from './components/Profile/Login';
import Signup from './components/Profile/Signup';
import Wishlist from './components/Wishlist/Wishlist';
import MyCollection from './components/MyCollection/MyCollection';

function App() {
  const [errors, setErrors] = useState([])
  const [collectionCategories, setCollectionCategories] = useState([])
  const [updateAfterCollection, setUpdateAfterCollection] = useState([])
  const [updateListItems, setUpdateListItems] = useState([])
  const [updateAfterCreate, setUpdateAfterCreate] = useState(false)
  const [updateAfterRemove, setUpdateAfterRemove] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)
  const [updateAfterImageUpdate, setUpdateAfterImageUpdate] = useState(false)
  const [updateAfterUsername, setUpdateAfterUsername] = useState(false)


  let navigate = useNavigate();
  const [skincareCollection, setSkincareCollection] = useState([])
  const [balmErrors, setBalmErrors] = useState([])

  useEffect(() => {
    fetch("/item_categories").then((res) => {
      if (res.ok) {
        res.json().then(setCollectionCategories)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })

  }, [updateAfterCollection])
  // console.log(errors)



  const handleSkincareCard = (e) => {

    fetch(`/item_categories/1`).then((res) => {
      if (res.ok) {
        res.json().then(setSkincareCollection)
        navigate("/items/skincare/")
      } else {
        res.json().then(data => setBalmErrors(data.error))
      }
    }, [])

    // console.log(balmErrors)
  }

  const [individualBalm, setIndividualBalm] = useState([])
  const handleBalmCard = (e) => {
    fetch(`/items/${e.target.id}`).then((res) => {
      if (res.ok) {
        navigate(`/items/skincare/balms/${e.target.id}/`)
        res.json().then(setIndividualBalm)
      }
    }, [])

  }

  const [searchItem, setSearchItem] = useState("")
  const [searchDetail, setSearchDetail] = useState([])
  const handleSearch = (e) => {
      setSearchItem(e.target.value)
  }
  // console.log(searchItem)

  async function fetchSearch ( searchItem )  {
         let response = await fetch(`http://localhost:3000/search/${searchItem}`, {
         method: "GET",
         headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },

     })

     let responseJson = await response.json()
     return responseJson
    
 }

  const handleKeyDown = async (e) => {
     
      if (e.key === 'Enter') {
          e.preventDefault();
          const searchArray = await fetchSearch(searchItem)
          setSearchDetail(searchArray)
          navigate(`/results/${searchItem}`)
      }
  }


  // user information
  const [user, setUser] = useState(null)

  // automatically login if user_id is in session, load home page
    useEffect(() => {
      fetch("/me").then((res) => {
        if (res.ok) {
          res.json().then((userData) => {
            setUser(userData);
            setUpdateListItems(userData)
          });
        }
      });
    }, [updateStatus, updateAfterImageUpdate, updateAfterUsername])

    // fetch wishlist items
    
    

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch} handleKeyDown={handleKeyDown}/>
      <Routes >
        <Route path="/" element={<Home collectionCategories={collectionCategories} setUpdateAfterCollection={setUpdateAfterCollection} handleSkincareCard={handleSkincareCard} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>

        <Route path="/items/skincare/" element={<Skincare />} />
        <Route path="/items/skincare/:id" element={<SkinCard />} />
        <Route path="/items/skincare/1" element={<Balm collectionCategories={collectionCategories} handleBalmCard={handleBalmCard} />} />
        <Route path="/items/skincare/balms/:id" element={<BalmCard collectionCategories={collectionCategories} individualBalm={individualBalm} />} />
        <Route path="/items/glossiwear/" element={<Glossiwear  />} />
        <Route path="/items/glossiwear/:id" element={<GlossiwearCard />} />
        <Route path="/items/stickers/" element={<Stickers  />} />
        <Route path="/items/stickers/:id" element={<StickerCard user={user} updateListItems={updateListItems} setUpdateAfterCreate={setUpdateAfterCreate} updateAfterCreate={updateAfterCreate} updateAfterRemove={updateAfterRemove} setUpdateAfterRemove={setUpdateAfterRemove} setUpdateStatus={setUpdateStatus}/>} />
        <Route path="/results/:search" element={<Results searchDetail={searchDetail}/>} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} setUpdateAfterImageUpdate={setUpdateAfterImageUpdate} updateAfterImageUpdate={updateAfterImageUpdate} setUpdateAfterUsername={setUpdateAfterUsername}/>} />
        <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser}/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mycollection" element={<MyCollection/>} />
        <Route path ="/items/fragrance/" element={<Fragrance />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
