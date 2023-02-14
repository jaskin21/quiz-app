import '../styles/components/shared/container.css';
import '../styles/components/cardQuestion.css';

const QuizQuestion = ({ status, setStatus, clickAnswer }) => {
  return (
    <div className='card-question'>
      <div className='container'>
        <div className='card-question-header'>
          <div className='card-question-icon'>icon</div>
          <div className='card-question-category'>
            Category: {status.record[status.question].category}
          </div>
          <div className='card-question-paging'>{status.page} out of 10</div>
        </div>
        <div className='card-question-question'>
          {status.record[status.question].question}
        </div>
        <div className='card-question-choices'>
          <input
            onClick={(onClickEvent) => clickAnswer(onClickEvent)}
            type='button'
            value='True'
          />
          <input
            onClick={(onClickEvent) => clickAnswer(onClickEvent)}
            type='button'
            value='False'
          />
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
