import * as Actions from './Actions'

export const addBreakfast = () => ({
    type: Actions.ADD_BREAKFAST
})

export const updateEditingBreakfast = (name, value) => ({
    type: Actions.UPDATE_EDITINGBREAKFAST,
    name: name,
    value: value
})