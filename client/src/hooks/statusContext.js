import React, { useState, createContext } from 'react';
import { listOfQuestions } from './storeContext';

export const StatusContext = createContext();

export const StatusProvider = (props) => {
  const [result, setResult] = useState(false);
  const [status, setStatus] = useState({
    page: 1,
    question: 0,
    score: 0,
    record: [...listOfQuestions],
  });

  return (
    <StatusContext.Provider value={{ status, setStatus, result, setResult }}>
      {props.children}
    </StatusContext.Provider>
  );
};
