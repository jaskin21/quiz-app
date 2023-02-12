import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/shared/container.css';
import '../styles/components/cardQuestion.css';
import { StatusContext } from '../hooks/statusContext';

const CardQuestion = () => {
  let { status, setStatus } = useContext(StatusContext);
  const navigate = useNavigate();

  const clickAnswer = (onClickEvent) => {
    const currentQuestion = status.record[status.question];
    console.log(status.record);
    const targetValue = onClickEvent.target.value;

    setStatus({
      ...status,
      score:
        targetValue.toString().toLowerCase() ===
        currentQuestion.correct_answer.toString().toLowerCase()
          ? status.score + 1
          : status.score + 0,
      page: status.page + 1,
      question: status.question + 1,
      record: [
        ...status.record,
        { ...currentQuestion, user_answer: targetValue },
      ].filter((value, index, Array) => {
        return index !== status.question;
      }),
    });

    if (status.question >= 9) {
      navigate('/result');
    }
  };

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

export default CardQuestion;
