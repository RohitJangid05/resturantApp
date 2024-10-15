import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Foodezy App</p>
      <div className="app-download-platform">
        <img loading='lazy' src={assets.play_store} alt="" />
        <img loading='lazy' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
