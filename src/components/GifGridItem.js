import React from 'react'

import PropTypes from 'prop-types';


export const GifGridItem = ( {id, title, url} ) => {
    console.log(title);

    return (
        <div className="card">
            <img src={ url} alt={title}/>
            <p> {title}</p>
        </div>
    )
}

GifGridItem.propTypes ={ 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}


/*
    1.Enzime
    2.Enzime to Json
    mostrar componentes
    *shallow
    *wrapper
         */
