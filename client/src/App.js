// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar  from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skincare from './components/Collections/Skincare/Skincare'
import Balm from './components/Collections/Skincare/Balms/Balm'
import BalmCard from './components/Collections/Skincare/Balms/BalmCard'

function App() {
  const [errors, setErrors] = useState([])
  const [collectionCategories, setCollectionCategories] = useState([])
  const [updateAfterCollection, setUpdateAfterCollection] = useState([])

  let navigate = useNavigate();
  const [skincareCollection, setSkincareCollection] = useState([])
  const [balmErrors, setBalmErrors] = useState([])

  useEffect(() => {
    fetch("/item_categories").then ((res) => {
      if (res.ok) {
        res.json().then(setCollectionCategories)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
    
  },[updateAfterCollection])
  // console.log(errors)


  
  const handleSkincareCard = (e) => {

    fetch(`/item_categories/1`).then ((res) => {
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
  fetch(`/items/${e.target.id}`).then ((res) => {
    if (res.ok) {
      navigate(`/items/skincare/balms/${e.target.id}/`)
      res.json().then(setIndividualBalm)
    } 
  }, [])

}


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home collectionCategories={ collectionCategories } setUpdateAfterCollection={ setUpdateAfterCollection } handleSkincareCard={ handleSkincareCard }/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/items/skincare/" element={<Skincare />} />
        <Route path="/items/skincare/balms" element={<Balm collectionCategories={ collectionCategories } handleBalmCard={handleBalmCard}/>} />
        <Route path="/items/skincare/balms/:id" element={<BalmCard collectionCategories={ collectionCategories } individualBalm={individualBalm}/>} />
      </Routes>
    </div>
  );
}

export default App;
