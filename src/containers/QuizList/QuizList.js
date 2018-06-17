import React, {Component} from 'react'
import classes from './QuizList.css'
import NavLink from 'react-router-dom/es/NavLink'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/ui/Loader/Loader';

export default class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quizes: [],
      loading: true
    }
  }

  async componentDidMount() {
    const response = await axios.get('/quizes.json')
    const quizes = []

    Object.keys(response.data).forEach((key, index) => {
      quizes.push({
        id: key,
        name: `Quiz ${index + 1}`
      })
    })

    this.setState({
      quizes, loading: false
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>

          {
            this.state.loading
              ? <Loader />
              : <ul className={classes.QuizListUl}>
                  {this.renderQuizes()}
                </ul>
          }
        </div>
      </div>
    )
  }

  renderQuizes() {
    return this.state.quizes.map((quiz, index) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{index + 1}. {quiz.name}</NavLink>
        </li>
      )
    })
  }
}