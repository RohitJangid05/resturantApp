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
        <div className="loading">
          <img loading='lazy' alt='loading-images' src={assets.cake} className="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.noodels} className="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.pulao} className="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.desertA} className="loader-img" />
          <img loading='lazy' alt='loading-images' src={assets.sandwich} className="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.rolls} className="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.pasta} className="loader-img img-none" />
          <img loading='lazy' alt='loading-images' src={assets.desert} className="loader-img img-none" />
        </div>
      </div>
    </>
  )
}

export default Loader