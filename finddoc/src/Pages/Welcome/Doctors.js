import React from 'react'
import Doctor from '../../Component/Doctor'
const Doctors = () => {
    const datas=[
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
      ];
  return (
    <>
    <div className='Doctors'>
    <h1 style={{marginLeft:"55px",marginTop:"100px"}}>TopDoctors</h1>
    {
    datas.map((d,index) => (
      <Doctor item={d}/>
      )
    )
    }
    </div>
    </>
  )
}

export default Doctors