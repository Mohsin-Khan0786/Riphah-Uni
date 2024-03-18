import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer"
import './Quiz.css';

const questionsData = [
  {
    question: "1. Which of the following sentences is correct?",
    options: [
      "When its raining, people's umbrella are all you're going to see from above",
      "When its raining, people's umbrella are all your going to see from above",
      "When its raining, peoples umbrella's are all you're going to see from above",
      "None of the above",
    ],
    answer: 0,
  },
  {
    question:
      "2. What does CSS standjbd fskajd fnkasdnbj asfkjdfna kdfnalfnadknf kdajnadjk dafkn danfk jadkn  danfkn dafnkjnfa adnkf nadkdanf kadnfd  for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: 1,
  },
  {
    question: "3. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Manipulation Language",
    ],
    answer: 0,
  },
  {
    question:
      "4. Which of the following tags is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: 0,
  },
  {
    question: "5. What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: 0,
  },
  {
    question: "6. Which of the following is NOT a programming language?",
    options: ["JavaScript", "HTML", "CSS", "MySQL"],
    answer: 1,
  },
  {
    question: "7. What is the purpose of JavaScript?",
    options: [
      "To add interactivity to websites",
      "To define the structure of a webpage",
      "To style web pages",
      "To store and organize data",
    ],
    answer: 0,
  },
  {
    question: "8. Which symbol is used to denote jQuery?",
    options: ["#", "&", "$", "@"],
    answer: 2,
  },
  {
    question: "9. What is the correct way to comment in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    answer: 0,
  },
  {
    question: "10. Which of the following is used for database management?",
    options: ["MySQL", "HTML", "CSS", "JavaScript"],
    answer: 0,
  },
  {
    question: "11. What does PHP stand for?",
    options: [
      "Personal Home Page",
      "Preprocessed Hypertext",
      "PHP: Hypertext Preprocessor",
      "Private Hypertext Processor",
    ],
    answer: 2,
  },
  {
    question: "12. What is the correct way to close an HTML tag?",
    options: ["</>", "</tag>", "<close>", "</tag>"],
    answer: 3,
  },
];

const Quiz = () => {
    const [answers, setAnswers] = useState(Array(questionsData.length).fill(null));
    const [timeRemaining, setTimeRemaining] = useState(300); 

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
  
      // Clear interval on component unmount
      return () => clearInterval(timer);
    }, []);
  
    // Function to handle option selection
    const handleOptionChange = (event, questionIndex, optionIndex) => {
      event.preventDefault();
      const newAnswers = [...answers];
      newAnswers[questionIndex] = optionIndex;
      setAnswers(newAnswers);
    };
  
    // Format time in MM:SS format
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
            <button className="btn btn-primary px-4 py-2 fw-bold">
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


