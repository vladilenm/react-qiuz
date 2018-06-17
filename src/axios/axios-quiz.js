import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-prepare.firebaseio.com/'
})