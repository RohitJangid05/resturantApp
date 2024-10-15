import React, {Suspense, useState } from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'

const FoodDisplay = React.lazy(()=>import('../../components/foodDisplay/FoodDisplay'))

const Home = () => {
  const [category, setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Suspense fallback={<div>Loading Content.....</div>}>
      <FoodDisplay category={category}/>
      </Suspense>
      <AppDownload />
    </div>
  )
}

export default Home
