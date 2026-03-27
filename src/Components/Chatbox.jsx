import React from 'react'
import '../Styles/Chatbox.css'

const Chatbox = ({ onClose, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className='chatbox-modal-overlay'>
      <div className='chat-container'>
        <div className="inner-container">
            <h2>Hello, How can I help you?</h2>
            <button onClick={onClose} className='close-btn'>×</button>
        </div>  
        <div className='conversation-container'>
            <div className="agent-msg">
                agent
            </div>
            <div className="user-msg">
                    user this
            </div>
            <div className="user-msg">
                    write a code for this line
            </div>
        </div>
        <div className="write-msg">
            <input type="text" placeholder='enter you question' />
            <button className='btn'>send</button>
        </div>
      </div>
    </div>
  )
  
}

export default Chatbox
