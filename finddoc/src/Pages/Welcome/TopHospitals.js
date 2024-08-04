import React from 'react'
import Hospital from '../../Component/Hospitals'
const TopHospitals = () => {
  const datas=[
    {
      id: 1,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "PSG Hospital",
      address: "123 Main St, Cityville",
     
    },
    {
      id: 2,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "KG Hospital",
      address: "456 Elm St, Townsville",
      
    },
    {
      id: 3,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "KMCH Hospital",
      address: "123 Main St, Cityville",
      
    },
    {
      id: 4,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "Stanley Hospital",
      address: "456 Elm St, Townsville",
      
    },
  ];
  return (
    <>
    <div className='Hospitals'>
    <h1 style={{marginLeft:"55px",marginTop:"100px"}}>TopHospitals</h1>
    {
    datas.map((d,index) => (
    
      <Hospital item={d}/>
   
      )
    )
    }
    </div>
    </>
  )
}

export default TopHospitals