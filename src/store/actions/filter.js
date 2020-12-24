import {
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  LOAD_DATA,
  FILTER_BY_PRICE,
} from './actionTypes'

export const sortByPrice = (payload) => ({
  type: SORT_BY_PRICE,
  payload,
})
export const filterByPrice = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
})
export const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload,
})
export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
})
