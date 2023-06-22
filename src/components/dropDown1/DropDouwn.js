import React from 'react'
import style from './drop.module.css'
const DropDouwn = () => {
  return (
    <>
      <div className="container">
        <div className={style.shado2}>
          <div className={style.image}>
            <img src="./images/orang-shado-pic.svg" alt="" />
          </div>
          <div className={style.sText}>
            <h2>Damages Available in Personal Injury Cases</h2>
            <p>
              Under Ohio law, compensation can be awarded for economic damages,
              non-economic damages, and punitive damages in personal injury
              lawsuits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDouwn
