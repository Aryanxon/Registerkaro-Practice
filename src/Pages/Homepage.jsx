import React from 'react'
import '../styles/Homepage.css'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Banner from '../assets/Banner.png'

function Homepage() {
  return (
    <div>
      <div className='HomePageContainer'>

        <div className='HomePage_Left'>

          <div className='Home_Rating'>
            <IoStar  style={{color: 'rgba(242, 153, 74, 1)', marginRight:'4px'}}/>Google Rating
            <IoStar  style={{backgroundColor: 'rgba(242, 153, 74, 1)', color: 'rgba(255, 255, 255, 1)', padding:'1px', marginLeft: '4px'}}/>
            <IoStar  style={{backgroundColor: 'rgba(242, 153, 74, 1)', color: 'rgba(255, 255, 255, 1)', padding:'1px'}}/>
            <IoStar  style={{backgroundColor: 'rgba(242, 153, 74, 1)', color: 'rgba(255, 255, 255, 1)', padding:'1px'}}/>
            <IoStar  style={{backgroundColor: 'rgba(242, 153, 74, 1)', color: 'rgba(255, 255, 255, 1)', padding:'1px'}}/>
            <IoStar  style={{backgroundColor: 'rgba(242, 153, 74, 1)', color: 'rgba(255, 255, 255, 1)', padding:'1px'}}/>
            </div>

          <div className='Left_heading'>Your Trusted Partner<br />
            For Compliance needs</div>
          <p className='Left_para'>An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>



          {/* Home page data  */}
          <div className='Home_Data_group'>
            <div className='Home_Data'>
              <div className='Home_DataIcon'><HiOutlineSquares2X2 /></div>
              <div className='Home_Datagroup'>
                <div className='Home_DataHead'>4.5+</div>
                <div className='Home_Datapara'>Customer Rating</div>
              </div>
            </div>

            <div className='Home_Data'>
              <div className='Home_DataIcon'><IoIosContacts />                  </div>
              <div className='Home_Datagroup'>
                <div className='Home_DataHead'>20,000+</div>
                <div className='Home_Datapara'>Clients</div>
              </div>
            </div>

            <div className='Home_Data'>
              <div className='Home_DataIcon'><FaHandshake /></div>
              <div className='Home_Datagroup'>
                <div className='Home_DataHead'>99.8%</div>
                <div className='Home_Datapara'>Financial Stability</div>
              </div>
            </div>

          </div>

          <div style={{display: 'flex', gap: '2rem', padding: '10px 0px'}}>
        <div className='Home_Databutton'>Talk An Expert</div>
        <div className='Home_DataPlay'><FaPlayCircle style={{color: 'rgba(251, 67, 44, 1)'}}/>See how it works</div>
          </div>




        </div>





        <div className='HomePage_Right'>
          <img src={Banner} alt="Banner" style={{ width: '100%', height: '100%'}}/>
        </div>


      </div>

    </div>
  )
}

export default Homepage
