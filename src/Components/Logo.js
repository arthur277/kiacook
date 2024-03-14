import React from 'react';
import logokiacook from '../Assets/logokiacook.png'
import logo from './css/logo.css'

const Logo = () => {
return (
  <div className='container zone-logo-header'>
    <div className='row'>
      <div className='col-md-12 text-center'>
        <a>
            <img  src={logokiacook} />
        </a>
      </div>
    </div>
      
  </div>
)
}

export default Logo

