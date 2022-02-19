import React from 'react'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0){
    return <p>No feedbacks yet!</p>
  }

  return (
    <>
   <div className="feedback-list">
     {feedback.map((item,id)=>(
       <FeedbackItem />
     ))}
   </div>
    </>
  )
}

export default FeedbackList