import React from 'react';

const Record = ({ status }) => {
  return (
    <>
      <div>{status.record[9].question}</div>
      <div>
        The answer is {status.record[9].correct_answer}, your answer is{' '}
        {status.record[9].user_answer}
      </div>
    </>
  );
};

export default Record;
