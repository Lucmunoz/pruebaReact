import React from 'react'

const Listar = ({ data }) => {

  if (typeof (data) === 'undefined')
    return <></>

  const cardComponents = data.map((element) => {
    return (
      <div className="col d-flex justify-content-center" key={element.id}>
        <div className="card col-12">
          <div className="container">
              <img src={element.sprites.other["official-artwork"].front_default} className="card-img-top" alt="..." />
            </div>
          <div className="card-body text-center">
            <h5 className="card-title">{element.name}</h5>

            <div className="container p-0 ">
              <div className='row gap-3 justify-content-center'>
                <div className="col-5 alert alert-primary p-0 m-0" role="alert">
                  {element.height / 10} m
                </div>
                <div className="col-5 alert alert-secondary p-0 m-0" role="alert">
                  {element.weight} kg
                </div>
              </div>
            </div>


            <p className="card-text"></p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      {cardComponents}
    </>
  )
}

export default Listar