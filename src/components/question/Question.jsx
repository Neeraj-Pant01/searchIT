import React, { useState } from 'react'
import "./question.css"
import {AiFillCopy, AiFillDislike, AiFillLike} from 'react-icons/ai'

const Question = ({q}) => {
    const [ans, setAns] = useState(false)
  return (
      <div className="QUES-WRAPPER">
        <div className="QUES-TOP">
            <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt=''></img>
            <span>username</span>
        </div>
        <div className="QUES-MID">
            <p>{q.ques}</p>
            <p>answer</p>
        </div>
        <div className="QUES-BOTTOM">
            <div>
                <div><AiFillLike></AiFillLike>
            <AiFillDislike /></div>
            <div><AiFillCopy onClick={()=>setAns(!ans
                )}/>write answer </div>
            </div>
           {ans&& <div className='ans-ques'>
                <textarea></textarea>
            </div>}
        </div>
    </div>
  )
}

export default Question
