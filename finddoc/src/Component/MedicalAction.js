import React from 'react'

const MedicalAction = () => {
  return (
    <>
    <div style={{position:"absolute",top:"760px",left:"1050px",width:"420px",height:"490px",backgroundColor:"white",borderRadius:"20px",boxShadow:"0 4px 8px 3px rgba(0, 0, 0, 0.2)"}}>
      <h1 style={{fontSize:"28px",paddingLeft:"106px",paddingTop:"15px"}}>Medical Actions</h1>
      <ul style={{paddingLeft:"60px",display:"block",gap:"20px"}}>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",marginTop:"35px"}}>BERA</li>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",paddingTop:"20px"}}>ENT Surgery</li>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",paddingTop:"20px"}}>ENT Corpus Alienum</li>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",paddingTop:"20px"}}>Ear Endoscope</li>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",paddingTop:"20px"}}>Ear Irrigation</li>
      <li style={{fontSize:"25px",fontWeight:"lighter",color:"grey",paddingTop:"20px"}}>TiltoPlasty</li>
      </ul>
      <input type="button" value="Make Appoinment" onclick="msg()" style={{width:"170px",height:"50px",marginLeft:"125px",backgroundColor:"green",color:"white",borderRadius:"10px",marginTop:"10px"}}></input>
      </div>
    </>
  )
}

export default MedicalAction