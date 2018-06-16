import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    results: {},
    quiz: [
      {
        question: 'How much is the fish?',
        id: 1,
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
        id: 2,
        answers: [
          {text: 'New option 1', id: 1},
          {text: 'New option 2', id: 2},
          {text: 'New option 3', id: 3},
          {text: 'Another option', id: 4}
        ]
      }
    ]
  }

  answerClickHandler = answeredId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (answeredId === question.rightAnswer) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {[answeredId]: 'success'},
        results
      })

      const timeout = setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({isFinished: true})
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        clearTimeout(timeout)
      }, 100) // 1500
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answeredId]: 'error'},
        results
      })
    }
  }

  handleRetry = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    const {quiz, activeQuestion, answerState} = this.state

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz number {this.props.match.params.id}</h1>
          {
            !this.state.isFinished
              ? <ActiveQuiz
                question={quiz[activeQuestion].question}
                answers={quiz[activeQuestion].answers}
                onAnswerClick={this.answerClickHandler}
                state={answerState}
                answerNumber={activeQuestion + 1}
                quizLength={quiz.length}
              />
              : <FinishedQuiz
                results={this.state.results}
                quiz={this.state.quiz}
                onRetry={this.handleRetry}
              />
          }
        </div>
      </div>
    )
  }
}