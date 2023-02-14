import React from 'react';
import { Link } from 'react-router-dom';
import Record from './subComponents/Record';

const QuizResult = ({ record }) => {
  const rows = [];
  for (let i = 0; i < record.length; i++) {
    rows.push(<Record key={i} record={record} i={i} />);
  }
  return (
    <div className='card-result'>
      <div className='container'>
        <div>Result</div>
        {rows}
        <div className='card-question-choices'>
          <Link to={'/'}>Exit</Link>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
