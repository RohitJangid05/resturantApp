import React from 'react'
import './Loader.css'
import { assets } from '../../assets/assets'

const Loader = () => {
  return (
    <>
      <div className="loading-container">
        <div className="loading-title">
          <h1>Foodezy</h1>
        </div>
        <div class="loading">
          <img src={assets.cake} class="loader-img" />
          <img src={assets.noodels} class="loader-img" />
          <img src={assets.pulao} class="loader-img" />
          <img src={assets.desertA} class="loader-img" />
          <img src={assets.sandwich} class="loader-img img-none" />
          <img src={assets.rolls} class="loader-img img-none" />
          <img src={assets.pasta} class="loader-img img-none" />
          <img src={assets.desert} class="loader-img img-none" />
        </div>
      </div>
    </>
  )
}

export default Loader