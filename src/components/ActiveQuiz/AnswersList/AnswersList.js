import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'
import classes from './AnswerList.css'

export default props => (
  <ul className={classes.AnswerList}>
    {props.answers.map((answer, index) => {
      return <AnswerItem
        answer={answer}
        state={props.state ? props.state[answer.id] : null}
        key={index + answer.id}
        onClick={props.onAnswerClick}
      />
    })}
  </ul>
)