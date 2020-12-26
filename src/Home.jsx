import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/0274207612d515f49012c87803a9e631.gif';
import Common from './Common';
const Home= ()=>{
 return (
  <>
   <Common name='Grow your bussiness with ' imgsrc={web} visit='/services' btname="Get started"/>
  </>
 )
}
export default Home