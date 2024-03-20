import React, { useEffect, useState } from 'react'
import Listar from './Listar'
import Filtros from './Filtros'

const MiApi = () => {


    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [search, setSearch] =useState("")
    const [sort, setSort] = useState("default")


    const getPokemonsData = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
        const data = await res.json();

        let arr = data.results.map(async (tipo) => {
            const res = await fetch(tipo.url)
            const data = await res.json()
            return data
        })

        const resultado = await Promise.all(arr)
        setPokemons(resultado)

    }

    const getPokemonTypes = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await res.json();
        let arr = data.results.map(async (tipo) => {
            return tipo.name
        })
        const resultado = await Promise.all(arr)
        setTypes(resultado)
    }


    useEffect(() => {
        getPokemonsData()
        getPokemonTypes()
    }, [])

    return (
        <div className='container-fluid w-100 h-100 d-flex flex-column'>
            <div className="container-fluid bg-filtros d-flex flex-row align-items-center">
                <div className="container col-2 text-center">
                    <img className="logo-img" src="src\assets\img\poke_logo.png" alt="Logo Pokemon" />
                </div>
                <div className=" col-10 d-flex flex-row  pt-2 pb-2 align-items-center ">
                    <Filtros types={types} search={search} setSearch={setSearch} sort={sort} setSort={setSort}/>
                </div>
            </div>
            <div className="container-fluid d-flex overflow-auto justify-content-center">
                <div className="col-9">
                    <div className="row row-cols-5 row-gap-5 p-3 flex-grow-1 overflow-auto justify-content-center ">
                        <Listar data={pokemons} search={search} sort={sort}/>
                    </div>
                </div>
            </div>
            <div className="row py-2 bg-footer ">
                <div className='col-2 text-center'><img className="w-50" src="src\assets\img\logo-academia-ne.png" alt="Logo Pokemon" /></div>
                <div className='col-5'>
                    <p className="mb-0 footer-text text-center fst-italic ms-auto me-auto">Este sitio web no cuenta con el patrocinio de Pokemon® y se desarrolla con fines académicos a fin de aprobar el modulo REACT-I del programa de estudios "Programación Fullstack" academia Desafío Latam.</p>
                </div>
                <div className='col-2'><p className="m-0">Referencias Utilizadas</p> </div>
            </div>
        </div>
    )
}

export default MiApi