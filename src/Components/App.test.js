import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
let wrapper = shallow(<App />);
    it('renders correctly', () => {
    expect(wrapper.find('.app').length).toBe(1);    
  
    });
    it('renders nav bar', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('.nav').length).toBe(1);        
        wrapper.unmount();
        });

});
