import React from 'react'
const Filtros = ({ types, search, setSearch, sort, setSort, typesSelected, setTypesSelected }) => {

    const handleSort = (event) => setSort(event.target.value)
    const handleSearchString = (event) => setSearch(event.target.value)
    const handleSelectedType = (event) => {

        let typesSelectedArray = [...typesSelected]

        if (event.target.checked) {
            typesSelectedArray.push(event.target.value)
            setTypesSelected(typesSelectedArray)
        }
        else {
            const typesSelectedArrayFiltered = typesSelectedArray.filter(element => element != event.target.value)
            typesSelectedArray = typesSelectedArrayFiltered
            setTypesSelected(typesSelectedArray)
        }
    }


    return (
        <>
            <div className='d-flex flex-row align-items-center justify-content-center gap-4'>

                <div className=''>
                    <img className="img-logo" src="src\assets\img\poke_logo.png" alt="Logo Pokemon" />
                </div>
                
                <div className="col-2">
                    <h5>Busqueda por nombre</h5>
                    <div className=''><form className="" >
                        <input className="form-control" type="search" placeholder="Búsqueda por nombre" value={search} onChange={handleSearchString} />
                    </form>
                    </div>
                </div>

                <div className="col-2">
                    <h5>Ordena tus resultados</h5>

                    <div className=''>
                        <form className="" >
                            <select onChange={handleSort} className="form-select w-100" value={sort} aria-label="Default select example">
                                <option value="default">Elige una opcion...</option>
                                <option value="1">Orden Alfabetico A-Z</option>
                                <option value="2">Orden Alfabetico Z-A</option>
                                <option value="3">Peso Ascendente</option>
                                <option value="4">Peso Descendente</option>
                                <option value="5">Estatura Ascendente</option>
                                <option value="6">Estatura Descendente</option>
                            </select>
                        </form>
                    </div>
                </div>

                <div className='d-flex flex-column col-4'>
                    <div className='container text-center'>
                        <h5 className="">Filtra los resultados por tipo de pokemon</h5>
                    </div>

                    <div className='d-flex flex-wrap'>
                        {
                            types.map(type => {
                                return <div key={type} className="col-2">
                                    <div className=" form-check p-0 m-0">
                                        <input className="" type="checkbox" value={type} id="flexCheckDefault" onChange={handleSelectedType} />
                                        <label className=" ps-2 form-check-label ">{type[0].toUpperCase() + type.slice(1)} </label>
                                    </div>
                                </div>
                            })}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Filtros
//<label className="" >{type[0].toUpperCase() + type.slice(1)} </label>
/*<div className="container col-2 text-center">
                
            </div>

            <div className='d-flex flex-column align-items-center col-1 text-center p-0'>
                <h4 className=''>Busca a tus pokemon</h4>
                
            </div>

            <div className="col-1 d-flex flex-column align-items-center">
                <h4>Ordena los resultados</h4>
                <div className='col-10'>
                    
                </div>
            </div>
            <div className='container-fluid'>
                <div className="row d-flex flex-row">
                    {
                        types.map(type => {
                            return(<></>
)
                        })}
                </div>
            </div> */