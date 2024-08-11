import React from 'react'
import "./Doctorreview.css"
const Doctorreview = ({item}) => {
  return (
    <>
    <div className='Review'>
    <h1 className="rev">Review</h1>
    <div className="Rcard">
      <img src={item.rimg} style={{width:"80px",height:"80px",borderRadius:"60px",marginLeft:"15px",marginTop:"21px"}}></img>
      <h2 className="RheadF">{item.rname}</h2>
      <p className="Rsubhead">{item.rdate}</p>
      <p className="Ryear">{item.rdesc}</p>
      </div>
      </div>
    </>
  )
}

export default Doctorreview