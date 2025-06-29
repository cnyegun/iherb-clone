import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import RowSection from './components/RowSection'
import specialProducts from './assets/products/specials.json'
import CategorySection from './components/CategorySection'
import trendingProducts from './assets/products/trending.json'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowSection name="Specials" viewAllUrl="https://www.iherb.com/specials" products={specialProducts} />
      <CategorySection />
      <RowSection name="Trending" viewAllUrl="https://www.iherb.com/trending" products={trendingProducts} />
    </>
  )
}

export default App
