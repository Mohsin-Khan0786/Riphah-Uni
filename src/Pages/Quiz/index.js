import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import './Quiz.css';
import { useParams } from "react-router-dom";
import { configapp } from "../../firebase";



const Quiz = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [answers, setAnswers] = useState(Array(0).fill(null));
  const [timeRemaining, setTimeRemaining] = useState(600); 

  const { id, collectionName } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await configapp.firestore().collection(collectionName).doc(id).get();
        if (snapshot.exists) {
          const data = snapshot.data();
          if (data && data.questions) {
            setQuestionsData(data.questions);
            setAnswers(Array(data.questions.length).fill(null));
          }
        }
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();

    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [id,collectionName]);

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    event.preventDefault();
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };  

const updateUserDocument = async () => {
  try {
    const currentUser = configapp.auth().currentUser;
    if (currentUser) {
      const userDocRef = configapp.firestore().collection('users').doc(currentUser.uid);
      const userDoc = await userDocRef.get();
      
      if (userDoc.exists) {
        const userData = userDoc.data();
        const newIndex = userData.index + 1;
        const topicStatus = `topic${newIndex}`;
        
        await userDocRef.update({
          [topicStatus]: "completed",
          index: newIndex
        });
        
        window.location.href ="/Topics"
      } else {
        alert("User document not found.");
      }
    } else {
      alert("No user logged in.");
    }
  } catch (error) {
    console.error("Error updating user document: ", error);
  }
};

const checkPassing = async () => {
  try {
    const snapshot = await configapp.firestore().collection(collectionName).doc(id).get();
    if (snapshot.exists) {
      const data = snapshot.data();
      if (data && data.questions) {
        const fetchedQuestions = data.questions;
        let correctAnswers = 0;

        fetchedQuestions.forEach((question, index) => {
          // Compare user's selected answer with the correct answer from Firebase
          if (answers[index] === question.answer) {
            correctAnswers++;
          }
        });

        console.log("Correct Answers:", correctAnswers);
        console.log("Total Questions:", fetchedQuestions.length);

        const passingThreshold = 4; // Define your passing threshold here

        if (correctAnswers >= passingThreshold) {
          alert("Congratulations! You have passed the quiz.");
          updateUserDocument();
        } else {
          alert("Sorry, you did not pass the quiz. Try again.");
          console.log("User Answers:", answers);
        }
      }
    }
  } catch (error) {
    console.error("Error fetching questions from Firebase: ", error);
  }
};



  return (
    <>
    <div className="container bg-light">


  {/* Timer display */}
  <div className="text-center mt-3">
          <h4>Time Remaining: {formatTime(timeRemaining)}</h4>
        </div>


      {/* ------------------mcqs----------------- */}

      <div className="container mb-5 bg-light ">
        <div className="row">
          {questionsData.map((question, questionIndex) => (
            <div key={questionIndex} className="col-7 mt-5 mb-5">
              <p className="fw-bold">{question.question}</p>
              <div>
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    htmlFor={`${questionIndex}-${optionIndex}`}
                    className="box"
                  >
                    <input
                      type="radio" className="circle"
                      name={`box-${questionIndex}`}
                      id={`${questionIndex}-${optionIndex}`}
                      checked={answers[questionIndex] === optionIndex}
                      onChange={(event) =>
                        handleOptionChange(event, questionIndex, optionIndex)
                      }
                    />
                    <div className="course">
                      {/* <span className="circle"></span> */}
                      <span className="subject">{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary px-4 py-2 fw-bold" onClick={checkPassing}>
              Continue
            </button>
          </div>
        </div>
      </div>

    </div>
<Footer/>
    </>
  );
};

export default Quiz;


