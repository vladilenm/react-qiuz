import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={'/auth'} component={Auth} />
          <Route path={'/quiz-creator'} component={QuizCreator} />
          <Route path={'/quiz/:id'} component={Quiz}/>
          <Route path={'/'} exact component={QuizList} />
        </Switch>
      </Layout>
    )
  }
}
