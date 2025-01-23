import React from 'react'
import '../styles/Startuppage.css'
import Oracle from '../assets/Oracle.png'
import monday from '../assets/monday.png'
import morpheus from '../assets/morpheus.png'
import samsung from '../assets/samsung.png'
import segment from '../assets/segment.png'



function Startuppage() {
  return (
    <div>
        <div className='Startup_Container'>
            <div className='Startup_Container_Heading'>Trusted By Over 100+ Startups and freelance business</div>
            <div className='Startup_Container_img'>
                <img src={Oracle} alt="" />
                <img src={monday} alt="" />
                <img src={morpheus} alt="" />
                <img src={samsung} alt="" />
                <img src={segment} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Startuppage
