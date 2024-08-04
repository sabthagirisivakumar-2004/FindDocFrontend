import React from 'react'
import Ldoc from "../../../Component/Ldoctors";
const Ourdoctors = () => {
    const doctorsData = [
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
        { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
        
      ];
      
  return (
    <div id='Doctors'>
    <div style={{}}>
    <center><h1>Discover Our Doctor</h1></center>
    {doctorsData.map((d,index) =>
    (
      <div style={{display:"inline-flex",gap:"30px",paddingLeft:"180px",marginLeft:"40px"}}>
 <Ldoc key={index} item={d}/>
 </div>
    )
)
    }
    </div>
    </div>
  )
}

export default Ourdoctors