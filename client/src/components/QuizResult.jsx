import React from 'react';
import { Link } from 'react-router-dom';
import Record from './subComponents/Record';

const QuizResult = ({ status }) => {
  const rows = [];
  for (let i = 0; i < status.record.length; i++) {
    rows.push(<Record key={i} status={status} />);
  }
  console.log(status.record.length);
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
