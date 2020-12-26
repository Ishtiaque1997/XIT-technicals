import React from 'react';
// import web from '../src/images/download.jpg'
import Ssdata from '../src/Ssdata'
import Card from './Card';
const Services= ()=>{
 return (
  <>
  <div className="my-5">
  <h1 className="text-center">Our services</h1>
  </div>
  <div className="container-fluid mb-5">
   <div className="row ">
      <div className="col-10 mx-auto">
      
       <div className='row gy-4'>
       {
         Ssdata.map((val, ind)=>{
           return <Card  key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            />
         })
       }
      
</div>
      


        </div>

       </div>

      </div>
    
      
      
      </>
 )
}
export default Services