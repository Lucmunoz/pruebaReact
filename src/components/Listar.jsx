import React, { useEffect, useState } from 'react'

const Listar = ({ data, search, sort }) => {

  let arr =[...data] 
  let arr2=[]
  let arr3=[]

  if (sort != "default" || search != "") {

    arr2 = arr.filter((elemento) => elemento.name.includes(search))


    if (sort == 1) {
      console.log("orden alfabetico a-z")

      arr3 = arr2.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    console.log(arr3)

    }
    else if(sort==2){
      console.log("orden alfabetico z-a")
    }
    else if(sort==3){
      console.log("orden por peso ascendente")
    }
    else if(sort==4){
      console.log("orden por peso descendente")
    }
    else if(sort==5){
      console.log("orden por estatura ascendente")
    }
    else if(sort==6){
      console.log("orden por estatura descendente")
    }
    else{
      
    arr3=[...arr2]
    }

    arr=[...arr3]
    console.log(arr)
  }
  else{
    console.log(data)
  }




  return (
    <>
      {

arr.map((element) => {
          return (
            <div className="col d-flex justify-content-center" key={element.id}>
              <div className="card col-12 bg-card">
                <div className="container">
                  <img src={element.sprites.other["official-artwork"].front_default} className="card-img-top" alt="..." />
                </div>
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
}
export default Listar

