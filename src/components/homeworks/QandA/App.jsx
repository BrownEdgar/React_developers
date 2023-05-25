import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      question: "Ի՞նչ է վերադարձնում React-ի useState Hook-ը",
      answer:`React-ի useState Hook-ը վերադարձնում է զանգված,
       որի length - կազմված է երկու էլեմենտից
        ՝ առաջինը պահված արժեքը, երկրորդը դրա համար պատասխանատու ֆունկցիան։`,
    },
    {
      id: 2,
      question: `Ինչ՞պես է կոչվում react-ի syntax-ը`,
      answer: `React-ի syntax—ը կոչվում է JSX`,
    },
    {
        id:3,
        question:`Նշել թե քանի Hook կա React-ում`,
        answer:`useState,useEffect,useContext,useReducer,
        useRef,useMemo,useCallback,
        useLayoutEffect,
        useImperativeHandle,useDebugValue`
    }
  ]);
  const [isShow, setIsShow] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion + 1 >= data.length ? 0 : currentQuestion + 1;
    setCurrentQuestion(nextIndex);
  };

  useEffect(() => {
    setCurrentQuestion(0);
  }, [data]);

  return (
    <div className="wrap">
      <div className={`box ${isShow ? 'active' : ''}`}>
        <div className="question">
          <p>{data[currentQuestion].question}</p>
          <button onClick={toggleShow}>show answer</button>
        </div>
        <div className="answer">
          <p>{data[currentQuestion].answer}</p>
          <button onClick={toggleShow}>hide answer</button>
        </div>
        <button className='next-button' onClick={nextQuestion}>Next</button>
      </div>
      
    </div>
  );
}
