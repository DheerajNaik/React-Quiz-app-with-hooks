import React, { useState } from "react";
import "./App.css";

import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";
import { questions } from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [chosenAnswer, setChosenAnswer] = useState([]);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);

  const getAnswers = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    } else {
      return <span className="failed">Wrong</span>;
    }
  };
  const getResultsData = () => {
    return chosenAnswer.map((answer) => {
      const question = questions.find(
        (question) => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question}-{getAnswers(question, answer)}
        </div>
      );
    });
  };
  //error
  const callError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };

  //next button
  const next = () => {
    let answer = { questionId: question.id, answer: currentAnswer };
    if (!currentAnswer) {
      setError(<div>Please provide an answer</div>);
      return;
    } else {
      chosenAnswer.push(answer);
      setChosenAnswer(chosenAnswer);
      console.log(chosenAnswer);
      setCurrentAnswer("");
    }

    if (count + 1 < questions.length) {
      setCount(count + 1);
      return;
    }
    setShowResults(true);
  };
  // option button
  const selectedAnswer = (e) => {
    setCurrentAnswer(e.target.value);
    setError("");
  };

  const question = questions[count];
  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        {getResultsData()}
      </div>
    );
  } else {
    return (
      <div className="container">
        <Progress total={questions.length} currentquestion={question.id} />
        <Question question={question.question} />
        {callError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          selectedAnswer={selectedAnswer}
        />
        <button onClick={next} className="btn btn-primary">
          Confirm and Continue
        </button>
      </div>
    );
  }
}

export default App;
