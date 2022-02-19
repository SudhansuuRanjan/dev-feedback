import {React, useState} from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Feedbackdata from "./data/FeedbackData"

function App() {
  const [feedback , setFeedback] = useState(Feedbackdata)
  
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
