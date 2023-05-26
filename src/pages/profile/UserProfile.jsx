import React, { useEffect } from 'react'
import profileposts from '../../profileposts'
import "./profile.css"
import Posts from '../homepage/posts/Posts'
import { useLocation } from 'react-router-dom'

const UserProfile = ({setShowmenu,showmenu}) => {
  const location = useLocation();
  console.log(location.pathname)
  useEffect(() => {
    if (location.pathname === '/profile/') {
      setShowmenu(false)
      alert(showmenu)
    }
    alert()
  }, []);
  return (
    <div className='profile'>
      <div className='profile-top'>
        <div className="pp-image-profile">
          <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt='profile-img'></img>
        </div>
          <div className='user-info-profile'>
            <div className='U-INFO'><span style={{color:"#93C572"}}>Username :</span><span style={{color:"green",marginLeft:"5px"}}>username</span></div>
            <div className='U-INFO'><span style={{color:"#93C572"}}>city :</span><span style={{color:"green",marginLeft:"5px"}}>username</span></div>
            <div className='U-INFO'><span style={{color:"#93C572"}}>Followers :</span><span style={{color:"green",marginLeft:"5px"}}>username</span></div>
            <div className='U-INFO'><span style={{color:"#93C572"}}>Posts :</span><span style={{color:"green",marginLeft:"5px"}} >username</span></div>
            <div className='U-INFO'><span style={{color:"#93C572"}}>Profession :</span><span style={{color:"green",marginLeft:"5px"}}>username</span></div>
        </div>
      </div>
      {
        profileposts.map((p,i)=>{
          return (
            <Posts key={i} p={p} />
          )
        })
      }
    </div>
  )
}

export default UserProfile
