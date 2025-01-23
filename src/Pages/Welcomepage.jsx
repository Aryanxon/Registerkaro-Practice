import React from 'react'
import '../styles/Welcomepage.css'
import { GrSystem } from "react-icons/gr";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Welcomepage() {
  return (
    <div className='Welcomepage_container'>
      <div>

        <div className='Welcomepage_head'>WELCOME TO REGISTERKARO.IN</div>
        <div className='Welcomepage_heading'>Explore Our Services</div>

{/* Services  */}
        <div className='Welcome_group'>

          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Company Formation</div>
            <div className='WelcomSeervice_para'>Build web-based solutions that enhance customer experience.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>


          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Company Secretarial Services</div>
            <div className='WelcomSeervice_para'>Make data-driven decisions and
              utilize technology to reach
              business goals.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>


          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Virtual Office Address</div>
            <div className='WelcomSeervice_para'>Foster customer relationships by effectively serving your market.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>




        </div>

        <div className='Welcome_group'>

          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Annual Compliance Services</div>
            <div className='WelcomSeervice_para'>Turn your ideas into modern
            products with our design experts.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>


          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Payroll Services</div>
            <div className='WelcomSeervice_para'>Expand your business across the
            globe with minimal effort.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>


          <div className='WelcomeService_group'>
            <div className='WelcomSeervice_Icon'><GrSystem style={{ color: 'rgba(255, 162, 41, 1)' }} /></div>
            <div className='WelcomSeervice_Heading'>Bookkeeping Services</div>
            <div className='WelcomSeervice_para'>Steering user behaviours with creative design, data insights & technology.</div>
            <div className='WelcomeService_Learn'>Learn more <FaRegArrowAltCircleRight /></div>
          </div>




        </div>

<div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className='Welcome_button'>See All Services</div>
</div>





      </div>


    </div>
  )
}

export default Welcomepage
