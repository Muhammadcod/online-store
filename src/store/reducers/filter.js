import {
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  LOAD_DATA,
  FILTER_BY_PRICE,
} from '../actions/actionTypes'

const initialState = {}

export default function filterStore(state = initialState, action) {
  switch (action.type) {
    case SORT_BY_ALPHABET:
      // sort alphabetically
      return state
    case SORT_BY_PRICE:
      // sort by price
      return state
    case FILTER_BY_PRICE:
      // filter by price
      return state
    case LOAD_DATA:
      // load data
      return state
    default:
      return state
  }
}
