import React from 'react';
import './Navbar.css';
import Ahead from '../../img/ahead.png'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className='n-left'>
           <img src={Ahead} alt="img" className="image" />
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul type="none">
                <li>Emotions</li>
                <li>Manifesto</li>
                <li>Self-awareness test</li>
                <li>Work with us</li>
            </ul>
          </div>
          <button className="button">Download App</button>
          </div>
    </div>
  )
}

export default Navbar

