import React from 'react'

const BreakfastList = ({ breakfasts }) => {

  return (
    <div className="container-fluid mb-4">
      <div className="list-group">
        <div className="list-group-item bg-light">
          <div className="row">
            <div className="col-sm">
              <p>Bebidas</p>
            </div>
            <div className="col-sm">
              <p>Comidas</p>
            </div>
            <div className="col-sm">
              {/* TODO: mirar a ver como quitar esta gitanada  */}
            </div>
          </div>
        </div>
        {breakfasts.map((breakfast, index) => (
          <div className="list-group-item" key={index}>
            <div className="row">
              <div className="col-sm">
                <p>{breakfast.drink}</p>
              </div>
              <div className="col-sm">
                <p>{breakfast.food}</p>
              </div>
              <div className="col-sm">
                <button type="button" className="btn btn-danger">X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BreakfastList