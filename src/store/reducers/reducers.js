import {FETCH_QUIZES} from '../actions/actionTypes'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES:
      break
    default:
      return state
  }
}