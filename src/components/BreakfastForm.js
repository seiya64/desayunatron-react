import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const BreakfastForm = (props) => {
  const { editingBreakfast, onSaveBreakfast, onChangeValue } = props
  const { drink, food } = editingBreakfast

  return (
    <Container fluid className='mb-4'>
      <Form>
        <Form.Group>
          <Form.Control placeholder='Bebida' name='drink' value={drink} id='drink' onChange={onChangeValue} />
        </Form.Group>
        <Form.Group>
          <Form.Control placeholder='Comida' name='food' value={food} id='food' onChange={onChangeValue} />
        </Form.Group>
        <Button variant='primary' onClick={onSaveBreakfast}>Ya ehtaría!</Button>
      </Form>
    </Container>
  )
}

export default BreakfastForm