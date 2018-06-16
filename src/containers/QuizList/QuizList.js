import React, {Component} from 'react'
import classes from './QuizList.css'
import NavLink from 'react-router-dom/es/NavLink';

export default class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quizes: [
        {id: 'abc', name: 'First quiz'},
        {id: 'dvd', name: 'Second quiz'}
      ]
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>

          <ul className={classes.QuizListUl}>
            {this.renderQuizes()}
          </ul>
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