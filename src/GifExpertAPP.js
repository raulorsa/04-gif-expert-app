import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertAPP = () => {

    const [categorias, setCategorias] = useState (['Dragon Ball']);

    // const handleAdd = () =>{
    //     //categorias.push('HunterXHunters');
    //     setCategorias([...categorias,'HunterXHunter']);
    // }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategorias={setCategorias}/>
        <hr/>

        {/* <button onClick={ handleAdd}>Agregar</button> */}

        <ol>
            {
                // categorias.map( (category, i) => {
                // return <li key={category}> {category}</li>
                // })
                // es igual a...
                // categorias.map( (category, i) => <li key={category}> {category}</li> )

                
                categorias.map( (category, i) => (
                    <GifGrid 
                    key = {category}
                        category={ category} />
                ) )
            }
        </ol>

        </>
    )
}
