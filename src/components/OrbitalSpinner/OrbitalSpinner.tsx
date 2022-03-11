import React from 'react'
import style from './OrbitalSpinner.module.css'

const OrbitalSpinner = () => {
  return (
    <div className={style.container}>
      <div className={style.sun}>
        <div className={style.planet}>
          <div className={style.moon}></div>
        </div>
      </div>
    </div>
  )
}

export default OrbitalSpinner