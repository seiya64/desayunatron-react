import React from 'react'

const BreakfastForm = (props) => {
  const { editingBreakfast, onSaveBreakfast, onChangeValue } = props
  const { drink, food } = editingBreakfast

  return (
    <div className="container-fluid  mb-4">
      <form>
        <div className='form-group'>
          <label htmlFor='drink'>Bebida</label>
          <input type='text' name='drink' value={drink} className='form-control' id='drink' onChange={onChangeValue} />
        </div>
        <div className='form-group'>
          <label htmlFor='food'>Comida</label>
          <input type='text' name='food' value={food} className='form-control' id='food' onChange={onChangeValue} />
        </div>
        <button type='button' className='btn btn-primary' onClick={onSaveBreakfast}>Ya ehtaría!</button>
      </form>
    </div>
  )
}

export default BreakfastForm