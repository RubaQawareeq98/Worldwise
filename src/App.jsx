import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Price from "./pages/Pricing"
import HomePage from "./pages/HomePage"
import PageNotFound from "./pages/pageNotFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import "./index.css"
import CityList from "./components/CityList"
import { useState } from "react"
import { useEffect } from "react"
import CountriesList from "./components/CountriesList"
import City from "./components/City"
import  Form  from "./components/Form"

const URL= 'http://localhost:9000/cities'

function App() {
  const [cities, setCities]= useState([])
  const [isLoading, setIsLoading]= useState(false)
  useEffect(function(){
    
    async function fetchCities() {
        try{
          setIsLoading(true)
        const res= await fetch(`${URL}`);
        const data =await res.json();
        setCities(data)
          setIsLoading(false)
    }
    catch{
      alert('There was an error loading data...')
    }
  }
  fetchCities()
  },[])
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Price />} />
          <Route path="app" element={<AppLayout />} >

            <Route index element=
            {<Navigate replace to='cities'/>} 
            />
            <Route  element={<CityList cities={cities}
              isLoading={isLoading} />} path='cities'/>
          
            <Route path="cities/:id" element={<City/>} />

            <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
            <Route path="form" element={<Form/>} />
            </Route>
          <Route index element={<HomePage />}  />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
