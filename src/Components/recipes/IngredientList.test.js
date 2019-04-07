import React from 'react';
import { shallow, mount } from 'enzyme';

import IngredientList from './IngredientList';
import Ingredient from './Ingredient'
describe('IngredientList', () => {
   
 

   let wrapper = shallow(<IngredientList list={[]} />);

    it('shoud renders', () => {
        expect(wrapper.find('.IngredientList').length).toEqual(1);
    });

    it('shoud renders the List', () => {
        const list = [
            {
                amount: 1,
                mesurement: 'mesurement1',
                name: 'name1'
            },
            {
                amount: 2,
                mesurement: 'mesurement2',
                name: 'name2'
            },
            {
                amount: 3,
                mesurement: 'mesurement3',
                name: 'name3'
            },
        ];
        wrapper = mount(<IngredientList list={list} />);
        wrapper.update();
        expect(wrapper.find('.amount').exists()).toBeTruthy();
        
    });
   
})