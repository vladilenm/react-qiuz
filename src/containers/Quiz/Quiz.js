import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'How much is the fish?',
        rightAnswer: 3,
        answers: [
          {text: 'First option', id: 1},
          {text: 'Second option', id: 2},
          {text: 'Third option', id: 3},
          {text: 'Another option', id: 4}
        ]
      },
      {
        question: 'How many cars do you own?',
        rightAnswer: 2,
        answers: [
          {text: 'New option 1', id: 1},
          {text: 'New option 2', id: 2},
          {text: 'New option 3', id: 3},
          {text: 'Another option', id: 4}
        ]
      }
    ]
  }

  componentWillMount() {
    console.log(this.props.match.params.id)
  }

  answerClickHandler = answeredId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (answeredId === question.rightAnswer) {
      this.setState({
        answerState: {[answeredId]: 'success'}
      })

      const timeout = setTimeout(() => {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        })
        clearTimeout(timeout)
      }, 1500)
    } else {
      this.setState({
        answerState: {[answeredId]: 'error'}
      })
    }
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.answerClickHandler}
            state={this.state.answerState}
            answerNumber={this.state.activeQuestion + 1}
            quizLength={this.state.quiz.length}
          />
        </div>
      </div>
    )
  }
}