import { connect } from 'react-redux'
import BreakfastList from '../components/BreakfastList'

const mapStateToProps = state => ({
  breakfasts: state.breakfasts.breakfastList
})

export default connect(mapStateToProps)(BreakfastList)