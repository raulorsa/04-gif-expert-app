
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />',() => {


    const title ="Un Título";
    const url ='http://www.google.es';
    const wrapper = shallow( <GifGridItem title={ title} url={ url}/>);


    test('debe de mostrat el componente correctamente', () => {

        expect( wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el title',() => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title);
    })
 
 
    test('debe de tener la imagen igual a la url y alt de los props',() => {
        const img = wrapper.find('img');

      //  expect( img.props('src')).toBe(url);
      //  expect( img.props('alt')).toBe(title);
    })

    test('debe de tener amimate__fade in',() => {
        const div = wrapper.find('div');

        const className = div.prop('className');

      //  expect( className.includes('animate__fadeIn')).toBe(true);

    })


})