import React from 'react'
import "./navbar.css"
import { AiFillCloseSquare, AiFillHome, AiOutlineAppstore, AiOutlineClose, AiOutlineMenuFold, AiOutlineQuestion, AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Navbar = ({setShowmenu,showmenu}) => {
  return (
    <div className='navbar'>
      <div className='left'>
      <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt='pp'></img>
      <div className='search'>
        <input type='text' placeholder='search here ...'></input>
        <AiOutlineSearch style={{fontSize:"20px", cursor:"pointer"}}/>
      </div>

      {
      showmenu &&
      <div className='menubar'>
        <div className='menubar-top-box'>
      <AiFillCloseSquare style={{fontSize:"40px",marginRight:"10px",marginTop:"10px"}} onClick={()=>setShowmenu(false)}/>
        </div>
        <div className='personal-info'>
          <div className='img-pp-box'>
          <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt='pp'></img>
          <span>username</span>
          </div>
          <div className='pp-box'>
            <Link to={'/profile'} style={{textDecoration:"none",color:"inherit"}}>
            <b>profile</b>
            </Link>
            <span>conatct: email</span>
            <span>city: city</span>
            <span>profession</span>
            <span>followers</span>
            <span>posts</span>
            <b>log Out</b>
          </div>
        </div>
    </div>
     }

      </div>
      <div className='mid'>
        <Link to='/'><AiFillHome /></Link>
      <AiOutlineAppstore />
      <span>ask<AiOutlineQuestion /></span>
      </div>
      <div className='right'>
        <AiOutlineMenuFold onClick={()=>setShowmenu(true)}/>
      </div>
    </div>
  )
}

export default Navbar
