import React from 'react'
import Container from 'react-bootstrap/Container';
import BreakfastList from '../containers/BreakfastList'
import BreakfastForm from '../containers/AddBreakfast'

const Breakfasts = () => {
  
  return (
    <Container fluid>
      <BreakfastForm></BreakfastForm>
      <BreakfastList></BreakfastList>
    </Container>
  )
}

export default Breakfasts