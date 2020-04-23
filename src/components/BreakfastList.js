import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BreakfastList = ({ breakfasts }) => {

  return (
    <Container fluid className='mb-4'>
      <Table striped bordered hover>
        <thead>
          <th>Bebidas</th>
          <th>Comidas</th>
          <th></th>
        </thead>
        <tbody>
        {breakfasts.map((breakfast, index) => (
          <tr>
            <td>{breakfast.drink}</td>
            <td>{breakfast.food}</td>
            <td>
              <Button variant='primary'>E</Button>
              <Button variant='danger'>X</Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BreakfastList