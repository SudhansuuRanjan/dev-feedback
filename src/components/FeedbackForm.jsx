import {React, useState , useEffect} from 'react'
import { useContext } from "react";
import Button from './shared/Button';
import Card from './shared/Card'
import RatingSelect from './shared/RatingSelect';
import FeedbackContext from "../context/FeedbackContext";

export const FeedbackForm = () => {

    const { addFeedback, feedbackEdit , updateFeedback} = useContext(FeedbackContext);

    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setbtnDisabled] = useState(true);
    const [message, setMessege] = useState('');

    const handleTextChange =(e) =>{
        if(text === ''){
            setbtnDisabled(true);
            setMessege(null)
        }else if( text !== '' && text.trim().length <= 10){
            setbtnDisabled(true);
            setMessege('Text must be atleast 10 characters')
        }else{
           setbtnDisabled(false); 
           setMessege(null);
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       if(text.trim().length > 10){
           const newFeedback = {
               text,
               rating
           }
           
           if(feedbackEdit.edit === true){
               updateFeedback(feedbackEdit.item.id , newFeedback)
           }else{
               addFeedback(newFeedback);
           }
           
           setText('');
       }
    }


  return (
   <Card>
       <form onSubmit={handleSubmit}>
           <h2>How would you rate your service with us?</h2>
           <RatingSelect select={(rating) => setRating(rating)}/>
           <div className="input-group">
               <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
               <Button type='submit' isDisabled={btnDisabled}>Send</Button>
           </div>

           {message && <div className='message'>{message}</div>}
       </form>
   </Card>
  )
}
