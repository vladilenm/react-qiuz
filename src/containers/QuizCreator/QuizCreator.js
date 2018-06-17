import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Aux from '../../hoc/Auxiliary'
import createControl from '../../form/create-control'
import checkValidation from '../../form/check-validation' // validate
import checkFormValidity from '../../form/check-form-validation' // validateForm
import Input from '../../components/ui/Input/Input'
import Button from '../../components/ui/Button/Button'
import Select from '../../components/ui/Select/Select'
import axios from '../../axios/axios-quiz'

function createOptionControl(number) {
  return createControl({
    label: `Option ${number}`,
    errorMessage: `Option can't be empty`,
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Enter question',
      errorMessage: `Question can't be empty`,
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    rightAnswer: 1,
    formControls: createFormControls()
  }

  handleChange = (event, controlName) => {
    const updatedFormControls = {
      ...this.state.formControls
    }
    const updatedControl = {
      ...updatedFormControls[controlName]
    }

    updatedControl.touched = true
    updatedControl.value = event.target.value
    updatedControl.valid = checkValidation(updatedControl.value, updatedControl.validation)

    updatedFormControls[controlName] = updatedControl

    this.setState({
      isFormValid: checkFormValidity(updatedFormControls),
      formControls: updatedFormControls
    })
  }

  handleAddNewQuestion = () => {
    const quiz = this.state.quiz.concat()
    const index = quiz.length + 1

    const {question, option1, option2, option3, option4} = this.state.formControls

    const quizItem = {
      question: question.value,
      id: index,
      rightAnswer: this.state.rightAnswer,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id}
      ]
    }

    quiz.push(quizItem)

    this.setState({
      quiz,
      isFormValid: false,
      rightAnswer: 1,
      formControls: createFormControls()
    })

  }

  handleFinishQuiz = async () => {
    try {
      await axios.post('/quizes.json', this.state.quiz)

      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswer: 1,
        formControls: createFormControls()
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleSelectRightAnswer = event => {
    this.setState({
      rightAnswer: +event.target.value
    })
  }

  render() {
    const form = Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Aux key={index + controlName}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.handleChange(event, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Aux>
      )
    })

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>

          <div className={classes.CreateQuiz}>
            {form}

            <Select
              label={'Select right answer'}
              value={this.state.rightAnswer}
              options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
              ]}
              onChange={this.handleSelectRightAnswer}
            />

            <Button
              type="primary"
              disabled={!this.state.isFormValid}
              onClick={this.handleAddNewQuestion}
            >Add question</Button>
            <Button
              type="success"
              disabled={this.state.quiz.length === 0}
              onClick={this.handleFinishQuiz}
            >Finish quiz</Button>
          </div>
        </div>
      </div>
    )
  }
}