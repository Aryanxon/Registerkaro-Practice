import React from 'react'
import '../styles/WelcomeBottompage.css'
import photo from '../assets/photo.jpg'

function WelcomeBottompage() {
    return (
        <div className='WelcomeBottom_Container'>
            <div className='WelcomeBottom_Left'>
                <div className='WelcomeBottompage_head'>WELCOME TO REGISTERKARO.IN</div>
                <div className='WelcomeBottompage_heading'>About Register Karo</div>
                <div className='WelcomeBottompage_para'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. </div>
                <div className='WelcomeBottompage_para'>

                    I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</div>

                <div className='WelcomBottom_button'>Learn more</div>
            </div>

            <div className='WelcomeBottom_Right'>
                <img src={photo} alt="" />
            </div>

        </div>
    )
}

export default WelcomeBottompage
