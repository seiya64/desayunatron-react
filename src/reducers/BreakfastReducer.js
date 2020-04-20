import * as Actions from '../actions/Actions'
import set from 'lodash/fp/set'
import merge from 'lodash/fp/merge'

const initialBreakfastState = {
  breakfastList: [],
  editingBreakfast: {
    drink: '',
    food: ''
  }
}

const breakfasts = (state = initialBreakfastState, action) => {
  switch (action.type) {
    case Actions.ADD_BREAKFAST:
      return merge(state, {
        breakfastList: [
          state.editingBreakfast,
          ...state.breakfastList
        ],
        editingBreakfast: initialBreakfastState.editingBreakfast
      })
    case Actions.UPDATE_EDITINGBREAKFAST:
      return merge(state, {
        editingBreakfast: set(action.name, action.value, state.editingBreakfast)
      })
    default:
      return state
  }
}

export default breakfasts