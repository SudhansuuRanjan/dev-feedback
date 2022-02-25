import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes , NavLink} from "react-router-dom";
import { FeedbackForm } from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import Feedbackdata from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
// import Card from "./components/shared/Card";
import Post from "./components/Post";

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                <AboutIconLink />
              </>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>

        <Routes>
          <Route path="/post/*" element={<Post/>}></Route>
        </Routes>

        {/*   Active navlinks
         <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}

      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
