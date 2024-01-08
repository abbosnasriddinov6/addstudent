import React, { useState } from 'react';

import './Main.scss';
import {  brat  } from '../../assets';
import Modall from '../modal/Modal';
import FuncNumbers  from '../modal/Modal';

const Main = () => {
  
  
  return (
    <header className='Main'>
        <img src={brat} alt="" />
        <div className='div'>
          <div className='input'>
            <input type="text" placeholder='Search...' />
          </div>
          <div className='add'>
          </div>       
        </div>
        <div className='adding'>
          <div className='foiz'>
            <div className='break'>
            <Modall/>

            </div>
          
          </div>
        </div>
        <div>
       
        </div>
    </header>
    
  );
};

export default Main;  