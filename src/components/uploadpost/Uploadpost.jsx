import React from 'react'
import { AiFillFileImage, AiOutlineMenu, AiOutlineUpload } from 'react-icons/ai'
import "./upload.css"

const Uploadpost = () => {
  return (
    <div className='UPLOADPOSTS'>
      <div className="uploadpost-top">
        <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt='PP'></img>
        <span style={{color:"green"}}>username</span>
      </div>
        <div className="uploadpost-mid">
          <textarea placeholder='whats in your mind username ?'></textarea>
        </div>
        <div className="uploadpost-bottom">
          <label htmlFor='upl'>
          <AiFillFileImage style={{marginLeft:"10px",color:"goldenrod"}} /><span style={{fontSize:"13px",color:"#93C572"}}>select images</span>
          </label>
          <input style={{display:"none"}} type="file" accept='.png, .jpg, .jpeg' id='upl'></input>
          <span style={{fontSize:"13px",color:"#93C572",display:"flex",alignItems:"center",gap:"10px",marginRight:"10px"}}>upload
          <AiOutlineUpload style={{marginRight:"10px",color:"green",fontSize:"20px"}}/></span>
        </div>
    </div>
  )
}

export default Uploadpost
