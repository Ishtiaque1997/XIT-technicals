import React, { useState } from 'react';
const Contact= ()=>{
 const [data,setData]=useState({
  fullName:'',
  phone:'',
  email:''
 })

 const InputEvent=(event)=>{
  const {name,value}=event.target;


  setData((preVal)=>{
   return{
    ...preVal,
    [name]:value,

   }
  })
 }

 const formSubmit=()=>{};
 return (
  <>
  <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
  </div>
  <div className="container contact_div">
     <div className="row">
      <div className="col-md-6 col-10 mx-auto">
         <form onSubmit={formSubmit}>
          <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter your full name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="fullName"
    value={data.fullName}
    onChange={InputEvent}
    placeholder="Enter your name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter your phone number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="Enter your number"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  
  <button type="submit" class="btn ">Submit</button>
</form>
         </form>
      </div>

     </div>
  </div>
  </>
 )
}
export default Contact