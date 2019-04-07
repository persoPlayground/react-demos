import React from 'react';
import { shallow, mount } from 'enzyme';

import Star from './Star';


describe('starRating', () => {
let wrapper = shallow(<Star />);
    it('renders correctly', () => {
    expect(wrapper.find('.star').length).toBe(1);    
    });

    it('should not have class selected', () => {
        const props = {
            selected: false,
            onCLick: f => f
        }
        expect(wrapper.find('.selected').length).toBe(0);   
        wrapper = shallow(<Star {...props } />);
        expect(wrapper.find('.selected').length).toBe(0);   
        });

        it('should  have class selected', () => {
            const props = {
                selected: true,
                onCLick: f => f
            }
            wrapper = shallow(<Star {...props } />);
            expect(wrapper.find('.selected').length).toBe(1);   
            });
});
