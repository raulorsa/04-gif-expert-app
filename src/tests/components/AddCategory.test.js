import PropTypes from 'prop-types';
import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <GifGridItem />',() => {

    const setCategorias = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias={ setCategorias} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategorias={ setCategorias} />);

    })

    test('debe mostrarse correctamente', () => {
        expect( wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', {target:{
            value: value
        }});

        //expect(wrapper.find('p').text().trim()).toBe(value);

    })


    test('No Debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault (){} });

        expect( setCategorias ).not.toHaveBeenCalled();
    })


    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        const vacio = '';
        
        //Simular el inputChange
        input.simulate('change', {target:{ value: value }});


        //simular el submit
        wrapper.find('form').simulate('submit', {preventDefault (){} });

        //setCategorias de debe haber llamado
        expect( setCategorias ).toHaveBeenCalled();
        //Se ha llamado una sola vez
        expect( setCategorias ).toHaveBeenCalledTimes(1);

        //el valor del input debe vaciarse
        expect(wrapper.find('input').prop('value')).toBe('');


    })
    

})