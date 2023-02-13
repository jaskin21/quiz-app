export const randomQuestion = async ([array]) => {
  const n = 10; // number of elements we want to get
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  const listOfQuestions = shuffledArray.slice(0, n);

  return listOfQuestions;
};
