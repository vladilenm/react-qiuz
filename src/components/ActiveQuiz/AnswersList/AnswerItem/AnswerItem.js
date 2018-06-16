import React from 'react'
import classes from './AnswerItem.css'

export default props => {
  const cns = [
    classes.QuestionItem
  ]

  if (props.state) {
    cns.push(classes[props.state])
  }

  return (
    <li
      className={cns.join(' ')}
      onClick={() => props.onClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}