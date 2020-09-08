
import React from 'react';

import { shallow } from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { GifGrid } = require("../../components/GifGrid");
jest.mock('../../hooks/useFetchGifs.js');

describe('Priebas con el GifGrid', () =>{

    const category = 'Dragon Ball';

    
    
    test('Debe mostrarse correctamente', () => {
        
        const gifs =[{
            id: 'ABC',
            url: 'https://localhost/nada/hola.jpg',
            title: 'prueba de verdad'
        }]

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category} />);
        expect (wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrat items cuando se carga imagenes', () => {
        
        
        const gifs =[{
            id: 'ABC',
            url: 'https://localhost/nada/hola.jpg',
            title: 'prueba de verdad'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category} />);
        expect (wrapper).toMatchSnapshot();

    })


})