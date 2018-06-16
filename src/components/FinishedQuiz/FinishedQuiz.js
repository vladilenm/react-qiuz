import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../ui/Button/Button';
import {Link} from 'react-router-dom';

export default props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  const allAreCorrect = successCount === props.quiz.length

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map(({question, id}, index) => {
          const cls = [
            'fa',
            props.results[id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[id]]
          ]

          return (
            <li key={id}>
              <strong>{index + 1}</strong>.&nbsp;
              {question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>

      <p>{successCount} of {props.quiz.length}</p>

      <div>
        { allAreCorrect
          ?
          <Link to={'/'}>
            <Button type={'success'}>Go to list</Button>
          </Link>
          : <Button
            onClick={props.onRetry}
            type={'error'}
            >Retry?</Button>
        }
      </div>
    </div>
  )
}