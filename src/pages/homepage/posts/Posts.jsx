import React, { useState } from 'react'
import "./posts.css"
import {AiFillDislike,AiFillHeart,AiFillLike, AiOutlineComment, AiOutlineMenu} from "react-icons/ai"

const Posts = ({p}) => {
  const [like, setLike] = useState(p.upvotes)
  const [isLiked, setIsliked] = useState(false)
  const [dislike, setDislike] = useState(p.devotes)
    const [showcomments, setShowComments] = useState(false)
    const handleComments = () =>{
        setShowComments(!showcomments)
    }
    const handleLike = () =>{
      setIsliked(true)
      !isLiked && setLike(like+1)
    }
    const handleDislike = () =>{
      setIsliked(false)
      isLiked && setDislike(dislike+1)
    }
  return (
    <div className='posts-wrapper'>
        <div className='posts'>
      <div className='posts-header'>
        <div className='pp'>
        <img src='https://www.rbsmba.in/wp-content/uploads/2021/06/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.jpg' alt='pp'></img>
        <span style={{color:"green"}}>{p.username}</span>
        </div>
        <div className='p-menu'>
        <p style={{color:"#93C572"}}>{p?.time || "1 day ago"}</p>
        <AiOutlineMenu style={{fontSize:"19px"}}/>
        </div>
      </div>
      <div className='post-desc'>
        <b style={{color:"green"}}>{p.title}</b>
        <p style={{color:"#93C572"}}>{p.desc}
        </p>
      </div>
      <div className='posts-mid'>
        <img src={p.img} alt='postimg'></img>
      </div>
      <div className='posts-bottom'>
        <span style={{color:" #93C572"}}>{like} 
        <spna>
        <AiFillLike style={{cursor:"pointer",color:"green"}} onClick={handleLike} />
        <AiFillHeart style={{cursor:"pointer",color:"red"}} />
        </spna>
        {dislike} <AiFillDislike style={{cursor:"pointer",color:"green"}} onClick={handleDislike}/> </span>
        <span style={{display:"flex",alignItems:"center",color:" #93C572"}} onClick={handleComments}>{p.comments.length} comments <AiOutlineComment style={{fontSize:"20px",cursor:"pointer",color:"green"}} /></span>
      </div>
    </div>
   { showcomments &&
    <div className='comments'>
      {/* <b style={{color:"black",paddingLeft:"10px",fontSize:"18px"}}>comments</b> */}
        {
            p?.comments.map((c,i)=><p key={i}>{c}</p>) ||
            <p>no comments</p>
        }
    </div>}
    </div>
  )
}

export default Posts
