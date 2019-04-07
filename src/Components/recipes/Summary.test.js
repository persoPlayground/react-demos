import React from 'react';
import { shallow } from 'enzyme';

import Summary from './Summary';

const initialSetup = (props = {}) => shallow(<Summary {...props} />);
describe('summary', () => {
    it('renders correctly', () => {
        const wrapper = initialSetup();
        expect(wrapper.find('.summary').length).toBe(1);
    })

    it('renders correctly', () => {
        const props = {
            ingredients: 0,
            steps: 0,
            title: null
        }
        const wrapper = initialSetup();
        expect(wrapper.find('h1').text()).toBe('[recipe]');
    })
})