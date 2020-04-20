
import { connect } from 'react-redux'
import BreakfastForm from '../components/BreakfastForm'
import { addBreakfast, updateEditingBreakfast } from '../actions/BreakfastActions'

const mapStateToProps = state => ({
  editingBreakfast: state.breakfasts.editingBreakfast
})

const mapDispatchToProps = (dispatch) => ({
  onSaveBreakfast: () => dispatch(addBreakfast()),
  onChangeValue: (event) => dispatch(updateEditingBreakfast(event.target.name, event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BreakfastForm)