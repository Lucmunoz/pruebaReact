import React from 'react'

const Listar = ({ data }) => {

  if (typeof (data) === 'undefined')
    return <></>


  const cardComponents = data.map((element) => {
    return (
      <div key={element.id}>{element.name}</div>
    )
  })
  return (
    <>
      {cardComponents}
    </>
  )

}

export default Listar
/* const cardComponents = data.map((element) => {
    return (
      <div className="col" key={element.id}>
        <div className="card">
          <img src={element.sprites.other["official-artwork"].front_default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            <p className="card-text">{element.height}</p>
            <p className="card-text">{element.height}</p>
          </div>
        </div>
      </div>
    )
  }) */