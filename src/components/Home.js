import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Breakfasts from './Breakfasts'

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Desyunatrón!</h1>
        <p>Para desayunar un montón!</p>
      </Jumbotron>
      <Breakfasts></Breakfasts>
    </div>
  )
}

export default Home