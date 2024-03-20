import React, { useEffect, useState } from 'react'
import Listar from './Listar'
import Filtros from './Filtros'

const MiApi = () => {


    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

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
            <div className="row ">
                <div className=" text-center">
                    <img src="src\assets\img\poke_logo.png" alt="Logo Pokemon" />
                </div>
                <div className="row justify-content-center pt-2 pb-4">
                    <Filtros types={types} />

                </div>
            </div>
            <div className="container-fluid d-flex overflow-auto justify-content-center">
                <div className="col-9">
                    <div className="row row-cols-5 row-gap-5 flex-grow-1 overflow-auto justify-content-center ">
                        <Listar data={pokemons} />
                    </div>
                </div>
            </div>
            <div className="row "><p>Footer</p></div>
        </div>
    )
}

export default MiApi