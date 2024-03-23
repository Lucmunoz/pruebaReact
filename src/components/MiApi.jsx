import React, { useEffect, useState } from 'react'
import Listar from './Listar'
import Filtros from './Filtros'

const MiApi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("default")
    const [isloading, setIsloading] = useState(true)
    const [typesSelected, setTypesSelected] = useState([])

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
        getPokemonTypes()
        getPokemonsData()
    }, [])

    useEffect(() => {
        if (pokemons.length != 0 && types.length != 0) {
            setIsloading(false)
        }
        else {
            setIsloading(true)
        }
    }, [pokemons, types])

    const handleLoading = () => {
        return (
            <div className='align-self-center text-center'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const handleData = () => {
        return (
            isloading ? handleLoading() : <Listar data={pokemons} search={search} sort={sort} typesSelected={typesSelected} />
        )
    }

    return (
        <div className='container-fluid w-100 h-100 d-flex flex-column'>
            <div className="container-fluid bg-filtros align-items-center">
                <Filtros types={types} search={search} setSearch={setSearch} sort={sort} setSort={setSort} typesSelected={typesSelected} setTypesSelected={setTypesSelected} />
            </div>

            <div className="container-fluid d-flex flex-grow-1 overflow-auto justify-content-center pt-4">
                <div className="col-9 container-fluid  row row-cols-5 row-gap-4 justify-content-center">
                    {isloading ? handleLoading() : handleData()}
                </div>
            </div>

            <div className="container-fluid d-flex flex-row py-2 bg-footer justify-content-center">
                <div className='pe-4 text-center'>
                    <img className="logo-desafio pe-3" src="src\assets\img\logo-academia-ne.png" alt="Logo Pokemon" />
                </div>
                
                <div className="col-5 pe-3 text-center">
                    <p className="mb-0 footer-text fst-italic ms-auto me-auto">Este sitio web no cuenta con el patrocinio de Pokemon® y se desarrolla con fines académicos a fin de aprobar el modulo REACT-I del programa de estudios "Programación Fullstack" academia Desafío Latam.</p>
                </div>
                <div className='col-2 d-flex flex-row column-gap-4 align-self-center justify-content-center'>
                    <div className="col-1">
                        <a href="http://www.ejemplo.es"><i className="fa-brands fa-square-facebook  rrss-icon"></i></a>
                    </div>
                    <div className="col-1 ">
                        <a href="http://www.ejemplo.es"><i className="fa-brands fa-square-instagram  rrss-icon"></i></a>
                    </div>
                    <div className="col-1">
                        <a href="http://www.ejemplo.es"><i className="fa-brands fa-square-github  rrss-icon"></i></a>
                    </div>
                    <div className="col-1">
                        <a href="http://www.ejemplo.es"><i className="fa-brands fa-square-x-twitter  rrss-icon"></i></a>
                    </div>
                    <div className="col-1">
                        <a href="http://www.ejemplo.es"><i className="fa-brands fa-square-youtube  rrss-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiApi
