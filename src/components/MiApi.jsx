import React, { useEffect, useState } from 'react'
import Listar from './Listar'
import Filtros from './Filtros'

const MiApi = () => {

    const [pokemons, setPokemons] = useState([]);
   
    const getPokemons = async () => { 
        //Con esta porción de codigo recibo un arreglo de 150 objetos que tienen un nombre y una URL.
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=150"); 
            const data = await res.json();
        //arr tiene las 150 url
        let arr = data.results.map((tipo) => {
            return tipo.url
        });

        getDataPokemons(arr)
    }

    const getDataPokemons = async (arr) => {
        //recibe el arrreglo de las 150 url y voy llamando a la API con cada una para obtener los datos de los 150 pokemon.
        const datos = arr.map((element) => fetch(element))
            const responses = await Promise.all(datos);
        const data = await Promise.all(responses.map(response => response.json()));
        //luego de recibir la data seteo el estado pokemons
        setPokemons(...pokemons, data)
    }



    {/*useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
    .then((response) => response.json())
    .then((data) => setResult(
        data.results.map((item) => {
            fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);}),
));
}, []); */}


    useEffect(() => {

        getPokemons()

        /*getDataTypes()
            .then( (data) => {
                const arrayTemp = data.results.map( (tipo) => { 
                    return tipo.name 
                })
            })*/




    }, [])

    return (
        <div className='container-fluid w-100 h-100 d-flex flex-column  '>
            <div className="row pb-3 ">
                <div className=" text-center">
                    <img src="src\assets\img\poke_logo.png" alt="Logo Pokemon" />
                </div>
                <div className=" py-2 row text-center "><Filtros types="" /></div>
            </div>
            <div className="container-fluid d-flex overflow-auto justify-content-center">
                <div className="col-10">
                    <div className="row row-cols-5 g-4 flex-grow-1 overflow-auto ">
                        <Listar data={pokemons} />
                    </div>
                </div>
            </div>
            <div className="row "><p>Footer</p></div>
        </div>
    )
}

export default MiApi