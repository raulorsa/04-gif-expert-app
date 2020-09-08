import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, {useState, useEffect}  from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGift } from '../helpers/getGifs';

export const GifGrid = ({ category}) => {

    // const [images, setImages] = useState( [])

    const {data, loading} = useFetchGifs( category);

    // useEffect(() =>{
    //     getGift( category).then( imgs => setImages(imgs));
    // },[ category])




    return (
        <>
            <h3  > {category} </h3>

            {loading && <p>Loading</p> }

            <div className="card-grid animate__animated animate__fadeInDown">

                {
                   //console.log(data)
                   // <li key={img.id}> {img.title}</li>
                   
                       data.map( imgs => (

                        <GifGridItem 
                        key={imgs.id}
                        {...imgs}
                        />
                    ))
                }

            </div> 
        </>
    )
}
