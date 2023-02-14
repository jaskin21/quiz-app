import { useContext } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import QuizResult from '../components/QuizResult';
import { StatusContext } from '../hooks/statusContext';

const Quiz = () => {
  let { status, setStatus, result, setResult } = useContext(StatusContext);

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
      setResult(true);
    }
  };

  return (
    <div className='main-container'>
      {result ? (
        <QuizResult status={status} />
      ) : (
        <QuizQuestion
          status={status}
          setStatus={setStatus}
          clickAnswer={clickAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
