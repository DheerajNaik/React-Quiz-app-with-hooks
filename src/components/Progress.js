import React from "react";

function Progress(props) {
  return (
    <div>
      <h2>
        Question {props.currentquestion} of {props.total}
      </h2>
    </div>
  );
}

export default Progress;
