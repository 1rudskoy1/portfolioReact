import React from 'react';
import './main.css'
import Slider from "../../components/slider/Slider"
import Tags from '../../components/tags/Tags';
function Main() {
  return (
    <>
    <div className='container'>
        <Tags/>
        <Slider/>
    </div>
    </>
  );
}

export default Main;
