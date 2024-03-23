const Listar = ({ data, search, sort, typesSelected }) => {


  let filteredAndSortedData = []

  if (sort != "default" || search != "" || typesSelected.length != 0) {
    // arreglo filteredData contiene la data a mostrar filtrada en base al valor de busqueda ingresado por el usuario.
    let filteredDatabySearch = data.filter((elemento) => elemento.name.includes(search))

    let filteredDatabyType = []
    if (typesSelected.length == 0) {
      filteredDatabyType = [...filteredDatabySearch]
    }
    else {
      const handleFilterByType = (arreglo) => {
        let arreglo_tipos_por_pokemon = arreglo.map(objeto => objeto.type.name)
        return (arreglo_tipos_por_pokemon.filter(tipo => typesSelected.includes(tipo))).length;
      }
      filteredDatabyType = filteredDatabySearch.filter(pokemon => handleFilterByType(pokemon.types) == typesSelected.length)
    }

    /*Luego de filtrar la data, la ordeno en base a la opción del elemento select que elija el usuario. Para ello, haremos
      uso del metodo sort*/

    // -> Valor default. Orden por defecto. El usuario no ha elegido ninguna opción de ordenamiento
    if (sort == "default") {
      filteredAndSortedData = [...filteredDatabyType]
    }
    else {
      // -> 1) Orden alfabetico de la A a la Z.
      if (sort == 1) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      }
      // -> 2) Orden alfabetico de la Z a la A.
      else if (sort == 2) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.name > b.name) { return -1; }
          if (a.name < b.name) { return 1; }
          return 0;
        });
      }
      // -> 3) Orden por peso ascendente
      else if (sort == 3) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.weight < b.weight) { return -1; }
          if (a.weight > b.weight) { return 1; }
          return 0;
        });
      }
      // -> 4) Orden por peso descendente
      else if (sort == 4) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.weight > b.weight) { return -1; }
          if (a.weight < b.weight) { return 1; }
          return 0;
        });
      }
      // -> 5) Orden por estatura ascendente
      else if (sort == 5) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.height < b.height) { return -1; }
          if (a.height > b.height) { return 1; }
          return 0;
        });
      }
      // -> 6) Orden por estatura descendente
      else if (sort == 6) {
        filteredAndSortedData = filteredDatabyType.sort(function (a, b) {
          if (a.height > b.height) { return -1; }
          if (a.height < b.height) { return 1; }
          return 0;
        });
      }
    }
  }

  //No hay texto ingresado en el campo de busqueda, ni opción de ordenamiento seleccionada.
  else {
    filteredAndSortedData = [...data]
  }

  const displayData = ((pokemons) => {
    return (
      <>
        {pokemons.map((element) => {
          return (
            <div className="col" key={element.id }>
              <div className="card bg-card">
                <img src={element.sprites.other["official-artwork"].front_default} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                      <h5 className="card-title">{element.name.toUpperCase()}</h5>
                      <div className="container p-0 pb-3 ">
                        <div className='row gap-3 justify-content-center'>
                          {
                            element.types.map(({ type }) => <div key={type.name} className={`${type.name} tipo col-5 p-0 m-0`}> {type.name[0].toUpperCase() + type.name.slice(1)} </div>)
                          }
                        </div>
                      </div>
                      <div className="container p-0 ">
                        <div className='row gap-3 justify-content-center'>
                          <div className="col-5 bg-label p-0 m-0" role="alert">
                            {element.height / 10} m
                          </div>
                          <div className="col-5 bg-label p-0 m-0" role="alert">
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
        }
      </>
    )
  })

  const displayError = () => {
    return (
      <div className="container d-flex flex-row col-9 justify-content-center align-self-center">
        <div className="col-2">
          <img src="src\assets\img\logo_error.png" className="card-img-top" alt="..." />
        </div>
        <div className='d-flex flex-column align-self-center ps-4'>
        <h2>Ups</h2>
          <p className='m-0'>No hemos encontrado ningun resultado que coincida con tus criterios de busqueda.</p>
          <p>Por favor, intentalo nuevamente!</p>
          </div>
      </div>
    )
  }

  return (
    <>
      {
        filteredAndSortedData.length != 0 ? displayData(filteredAndSortedData) : displayError()
      }

    </>
  )
}
export default Listar