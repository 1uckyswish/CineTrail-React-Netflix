import {useState} from 'react'
import "./Review.css"
import defaultAvatar from "/src/assets/avatar-error.png";

function Review({review, imgBaseUrl}) {
    const [imgError, setImageError] = useState(false);
    const [seeMore, setSeeMore] = useState(false);

    const toggleReview = ()=>{
        setSeeMore(!seeMore);
    };

  return (
   <div className="review">
    <div className="avatar-container">
        <img
         src=
         {
        imgError? 
         defaultAvatar 
         :
         `${imgBaseUrl}/${review.author_details.avatar_path}`
         }
         alt=""
         className="avatar"
         onError={()=> {
            setImageError(true)
            }}
         />
         <p>{review.author}</p>
    </div>
    {
        seeMore?
        (<p className="content">
        {review.content}<span className='read-less' onClick={toggleReview}>Read Less</span></p>)
        :
        (<p className="content">
        {review.content.slice(0,250)}...<span className='read-less' onClick={toggleReview}>Read More</span></p>)

    }
   </div>
  )
}

export default Review