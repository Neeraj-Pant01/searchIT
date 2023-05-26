import React from 'react'
import "./homepage.css"
import Posts from './posts/Posts'
import posts from '../../posts'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Uploadpost from '../../components/uploadpost/Uploadpost'

const Homepage = ({setShowmenu,showmenu}) => {
  return (
    <div className='homepage'>
      <Uploadpost />
        {
            posts.map((p,i)=>{
                return (
                <Posts p={p} key={i} />
                )
            })
        }
       {/* {
        showmenu &&
        <div className='menubar'>
          <div className='menubar-top-box'>
        <AiOutlineClose style={{fontSize:"30px"}} onClick={()=>setShowmenu(false)}/>
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
       } */}
    </div>
  )
}

export default Homepage
