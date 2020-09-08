import React, {useState} from 'react'

import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length>2){

            //setCategorias( cats => [...cats, inputValue ] );
            setCategorias( cats => [inputValue,...cats ] );

            setinputValue('');
        }
        //console.log('Submit');

        
    }

    return (
        
        <form onSubmit={handleSubmit}>
            {/* <p> {inputValue}</p> */}

            <input 
            type="text"
            value= {inputValue}
            onChange= {handleInputChange}
            
            />
            
        </form>

    )
}

AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired
}
