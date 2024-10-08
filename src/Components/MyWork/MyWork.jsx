import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import tomato_front from '../../assets/tomato front.png'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      {/* <div className="mywork-container">
         {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt="" />
         })}
      </div> */}
      <div className="mywork-container">
         <a href="https://tomato-sohan.vercel.app/" target='_blank'><img src={tomato_front} alt="" /></a>
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  )
}

export default MyWork