import React from 'react'
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const Filtros = ({ types }) => {

    const typesArray = [...types]
    //console.log(typesArray)

    return (
        <>
            <div className='col-3 text-center'>
                <h3 className='m-0'>Busca a tus pokemon</h3>
                <p className='p-1 pb-2 m-0'>Encuentra a tu pokemon por su nombre o muestralos según su especialidad</p>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Búsqueda por nombre" />
                </form>
            </div>

            <div className='col-8 container-fluid align-self-center'>
                <div className='row row-cols-6'>
                    {
                    typesArray.map(tipo => {
                        return <div key ={tipo} className="form-check">
                            <input className="" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="ps-2 form-check-label">{tipo[0].toUpperCase() + tipo.slice(1)} </label>
                        </div>
                    })}
                </div>





            </div>
        </>
    )
}

export default Filtros

/*[
    [
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
        "unknown",
        "shadow"
    ]
] 
[
    [
        [
            "normal",
            "fighting",
            "flying",
            "poison",
            "ground",
            "rock",
            "bug",
            "ghost",
            "steel",
            "fire",
            "water",
            "grass",
            "electric",
            "psychic",
            "ice",
            "dragon",
            "dark",
            "fairy",
            "unknown",
            "shadow"
        ]
    ]
]
[
    [
        [
            "normal",
            "fighting",
            "flying",
            "poison",
            "ground",
            "rock",
            "bug",
            "ghost",
            "steel",
            "fire",
            "water",
            "grass",
            "electric",
            "psychic",
            "ice",
            "dragon",
            "dark",
            "fairy",
            "unknown",
            "shadow"
        ]
    ]
]
*/