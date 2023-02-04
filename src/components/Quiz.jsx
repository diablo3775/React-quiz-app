import React, { useState } from 'react';
import questions from './data';
import Button from 'react-bootstrap/Button';


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0)

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);

    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer('');
    }, 1000);
  };

  if (currentQuestion === questions.length) {
    return <div>Finish, your score is {score}</div>;
  }

  const { questionText, options, answer } = questions[currentQuestion];
  return (
    <div>
      <div>{questionText}</div>
      <Button variant="primary">Primary</Button>{' '}

      <div>
        {options.map((option, index) => (
          <div key={index} onClick={() => handleOptionClick(option)} style={{cursor:'pointer'}}>
            {option}
          </div>
        ))}
      </div>
      {selectedAnswer && selectedAnswer === answer ? (
        <div>Correct</div>
      ) : (
        selectedAnswer && <div>Incorrect</div>
      )}
    </div>
  );
};

export default Quiz;