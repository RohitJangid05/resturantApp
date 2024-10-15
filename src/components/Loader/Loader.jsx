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
          <img loading='lazy' alt='loading-images' src={assets.cake} class="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.noodels} class="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.pulao} class="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.desertA} class="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.sandwich} class="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.rolls} class="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.pasta} class="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.desert} class="loader-img img-none" />
        </div>
      </div>
    </>
  )
}

export default Loader