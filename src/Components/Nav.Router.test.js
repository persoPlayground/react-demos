import React from 'react'
import { shallow, mount } from 'enzyme';
import { Route, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('testing router', () => {
let component;
    it('shoud renser Home /', () => {
         component = mount(
        <MemoryRouter initialEntries={['/']} >
            <App />
        </MemoryRouter>
        );
        expect(component.find('.home').length).toBe(1);
        component.unmount();
    });
    // it('shoud render recipes /recipes', () => {
    //      component = mount(
    //     <MemoryRouter  >
    //         <App />
    //     </MemoryRouter>
    //     );
      
    //     component.find('a[data-test-id="recipes-link"]').simulate('click')
    //     component.update()
    //     console.log(component.debug())
    //     expect(component.find('.menu').length).toBe(1);
    
    // });

});
