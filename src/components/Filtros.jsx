import React from 'react'
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const Filtros = ({ types, search, setSearch, sort, setSort }) => {

    const typesArray = [...types]
    //console.log(typesArray)

    const handleSort=(event)=> setSort(event.target.value)
    const handleSearchString= (event)=> setSearch(event.target.value)

    return (
        <>
            <div className='d-flex flex-column align-items-center col-2 text-center p-0'>
                <h4 className=''>Busca a tus pokemon</h4>
                <form className="d-flex col-10" role="search">
                    <input className="form-control mx-2" type="search" placeholder="Búsqueda por nombre" value={search} onChange={handleSearchString}/>
                </form>
            </div>
            <div className="col-2 d-flex flex-column align-items-center">
                <h4>Ordena los resultados</h4>
                <div className='col-10'>
                    <select onChange={handleSort} className="form-select" value={sort} aria-label="Default select example">
                        <option value="default">Elige una opcion...</option>
                        <option value="1">Orden Alfabetico A-Z</option>
                        <option value="2">Orden Alfabetico Z-A</option>
                        <option value="3">Peso Ascendente</option>
                        <option value="3">Peso Descendente</option>
                        <option value="3">Estatura Ascendente</option>
                        <option value="3">Estatura Ascendente</option>
                    </select>
                </div>
            </div>
            <div className='row col-6 container-fluid align-self-center ps-3'>
                {
                    typesArray.map(tipo => {
                        return <div key={tipo} className="col-2">
                            <div className=" form-check p-0 m-0">
                                <input className="" type="checkbox" value="" id="flexCheckDefault" />
                                <label className=" ps-2 form-check-label ">{tipo[0].toUpperCase() + tipo.slice(1)} </label>
                            </div>
                        </div>
                    })}
            </div>
        </>
    )
}

export default Filtros
