

import { getGifs } from "../../helpers/getGifs";
import React from 'react';
import { shallow } from 'enzyme';


describe('pruebas con getGifts Fetch',() =>{

    test('debe tener 0 elementos al estar vacio', async() =>{

        const gifs = await getGifs('');

        expect( gifs.length).toBe(0);
    })
})
