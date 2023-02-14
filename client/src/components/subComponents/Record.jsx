import React from 'react';

const Record = ({ record, i }) => {
  return (
    <>
      <div>{record[i].question}</div>
      <div>
        The answer is {record[i].correct_answer}, your answer is{' '}
        {record[i].user_answer}
      </div>
    </>
  );
};

export default Record;
