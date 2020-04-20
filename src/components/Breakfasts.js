import React from 'react'
import BreakfastList from '../containers/BreakfastList'
import BreakfastForm from '../containers/AddBreakfast'

const Breakfasts = () => {
  
  return (
    <div className="container-fluid">
      <BreakfastForm></BreakfastForm>
      <BreakfastList></BreakfastList>
    </div>
  )
}

export default Breakfasts