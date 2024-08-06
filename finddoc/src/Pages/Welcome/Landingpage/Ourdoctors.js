import React from 'react'
import Ldoc from "../../../Component/Ldoctors";
import "./OurDoctors.css";
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
    <div className='ourdoctors'>
    {doctorsData.map((d,index) =>(
 <Ldoc key={index} item={d}/>
 ))}
 </div>
    </div>
    </div>
  ) 
}

export default Ourdoctors