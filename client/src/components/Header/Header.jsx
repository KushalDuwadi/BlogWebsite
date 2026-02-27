import React from 'react'
import './Header.css';
import { assets } from '../../assets/assets';

export const Header = () => {
  return (
    <div className='header'>
    <div className='item'>
    <div className='header-item'>
        <p>New: AI feature integrated</p>
        <img src={assets.star_icon} alt="" />
    </div>
    <h1 className='title'>Your own <span className='text'>blogging</span> <br/> <span >Platform.</span> </h1>
    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum inventore animi sint, nihil veritatis dicta necessitatibus ipsa maiores quos natus consectetur unde ullam distinctio!</p>


    <form >
    <input type="text" placeholder="Search for Blog... "name="" id=""  required/>
    <button type='submit'>Search</button>

    </form>





    </div>
 

    </div>
  )
}

