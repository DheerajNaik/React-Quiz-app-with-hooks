import React from "react";
import Answer from "./Answer";
function Answers({ question, currentAnswer, selectedAnswer }) {
  return (
    <>
      <Answer
        letter="a"
        answer={question.answer_a}
        selected={currentAnswer === "a"}
        selectedAnswer={selectedAnswer}
      />
      <Answer
        letter="b"
        answer={question.answer_b}
        selected={currentAnswer === "b"}
        selectedAnswer={selectedAnswer}
      />
      <Answer
        letter="c"
        answer={question.answer_c}
        selected={currentAnswer === "c"}
        selectedAnswer={selectedAnswer}
      />
      <Answer
        letter="d"
        answer={question.answer_d}
        selected={currentAnswer === "d"}
        selectedAnswer={selectedAnswer}
      />
    </>
  );
}

export default Answers;
