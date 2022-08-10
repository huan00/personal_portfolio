import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './styles.css'
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-bar">
        <p>AVAILABLE FOR WORK</p>
        <CopyToClipboard text="SEND A MESSAGE" className="send-message">
          <p className="message-text"> SEND A MESSAGE</p>
        </CopyToClipboard>
      </div>
      <div className="contact-email">HELLO@HUAN-ZENG.COM</div>
      <NavBar />
    </div>
  )
}

export default Contact
