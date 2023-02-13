import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  difficulty: {
    type: String,
    require: true,
  },
  question: {
    type: String,
    require: true,
  },
  correct_answer: {
    type: String,
    require: true,
  },
  incorrect_answers: {
    type: Array,
    require: true,
  },
  user_answer: {
    type: String,
    default: null,
  },
});

export default mongoose.model('question', ItemSchema);
