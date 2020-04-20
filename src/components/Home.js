import React from 'react'
import Breakfasts from './Breakfasts'
const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1>Desyunatrón!</h1>
        <p>Para desayunar un montón!</p>
      </div>
      <Breakfasts></Breakfasts>
    </div>
  )
}

export default Home