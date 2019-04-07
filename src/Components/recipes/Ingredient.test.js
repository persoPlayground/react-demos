import React from 'react';
import { shallow } from 'enzyme';

import Ingredient from './Ingredient';

describe('Ingredient', () => {
   
   let  wrapper = shallow(<Ingredient />);

    it('shoud renders', () => {
        expect(wrapper.find('.amount').length).toEqual(1);
    });
    it('should renders ingredients details', () => {
        const props = {
            amount:4,
            mesurement:'mesurement-expample',
            name:'name-expample'
        }
        wrapper = shallow(<Ingredient {...props} />);

        expect(wrapper.find('.amount').text()).toBe("4");
    });

   
})