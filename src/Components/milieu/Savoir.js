import React from 'react'
import {savoir} from '../cssmilieu/savoir.css'
import cuisine from '../../Assets/pexels-august-de-richelieu-4262002.jpg'
import cuisine2 from '../../Assets/pexels-rachel-claire-6126975.jpg'

const Savoir = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 '>
                <div className='mr-2 milieucontenu'>
                    <img src={cuisine}/>
                    <div className='endroit'>
                        <h2>Chef afro</h2>
                        <p>Faites découvrir la cuisine africaine à coté de chez vous.</p>
                        <a className='suivre m-auto' href=''>EN SAVOIR PLUS</a>
                    </div>
                </div>
            </div>
            <div className='col-md-6 '>
                <div className='mr-2 milieucontenu'>
                    <img src={cuisine2}/>
                    <div className='endroit'>
                        <h2>Business</h2>
                        <p>Developpez une nouvelle clientèle et diversifiez vos sources de revenus.</p>
                        <a className='suivre m-auto' href=''>EN SAVOIR PLUS</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Savoir