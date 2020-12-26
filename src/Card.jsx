import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/download.jpg'
const Card= (props)=>{
 return (
  <>
  
        <div className='col-md-4 col-10 mx-auto'>
         <div className="card" style={{marginBottom:'40px'}}>
  <img src={props.imgsrc} alt={props.imgsrc} style={{height:'300px'}}/>
  <div class="card-body">
 <h5 class="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
  

     
      
</div>
      
</div>
</div>

       
      
      </>
 )
}
export default Card