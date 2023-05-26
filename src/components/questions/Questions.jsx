import React, { useEffect, useState } from 'react'
import "./ques.css"
import axios from 'axios'
import Question from '../question/Question'

const Questions = () => {
    const [questions, setQuestions] = useState([])
useEffect(()=>{
    const loadQuestions = async ()=>{
        const response = await axios.get(`http://localhost:9000/api/ques/sort/new`)
        setQuestions(response.data)
    }
    loadQuestions()
},[])
  return (
    <div className='questions'>
      <div className="quesWrapper">
        <div className="ques-top">
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg'></img>
            <span style={{fontSize:"13px"}}>username</span>
            </div>
            <p>ask a question ?</p>
        </div>
        <div className='ask-box'>
            <textarea rows={6} placeholder='ask your question here'></textarea>
        </div>
        <div className="ques-bottom">
            <button className='send'>upload</button>
        </div>
      </div>
      {
        questions.map((q,i)=><Question q={q} key={i} />)
      }
    </div>
  )
}

export default Questions
