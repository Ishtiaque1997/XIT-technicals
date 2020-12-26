import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/0274207612d515f49012c87803a9e631.gif';
import Common from './Common';
const About= ()=>{
 return (
  <>
   <Common  name='Welcome to About page ' imgsrc={web} visit='/contact' btname="Contact Now"/>
  </>
 )
}
export default About