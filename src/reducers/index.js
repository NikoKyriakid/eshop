
import { combineReducers } from 'redux'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const products = (state = [], action) => {
   return state;
}

export default combineReducers({
	products,
  	visibilityFilter
})
