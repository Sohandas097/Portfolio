import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logopicup.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a full stack web developer from Kolkata and have solved 250+ DSA problems</p>
            </div>
            {/* <div className="footer-top-right">
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div> */}
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">&#169; 2024 Sohan Das.  All rights reserved.</p>
          <div className="footer-bottom-right">
            <a className='leetcode' href="https://leetcode.com/u/Sohandas/" target='_blank'><p>LeetCode</p></a>
            <a className='github' href="https://github.com/Sohandas097" target='_blank'><p>GitHub</p></a>
            <a className='linkedin' href="https://www.linkedin.com/in/sohan-das-86966626b/" target='_blank'><p>LinkedIn</p></a>
          </div>
        </div>
    </div>
  )
}

export default Footer