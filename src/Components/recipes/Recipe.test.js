import React from 'react';
import { shallow } from 'enzyme';

import Recipe from './Recipe';
import IngredientList from './IngredientList';
import Instructions from './Instructions';

describe('recipe', () => {
    const props = {
        name: 'name1',
        ingredients:[
            {
                amount: 'amount1',
                mesurement: 'mesurement1',
                name: 'name1'
            },
            {
                amount: 'amount2',
                mesurement: 'mesurement2',
                name: 'name2'
            }
        ],
        steps: [
            'step1',
             'step2'
        ]
    }
    let wrapper = shallow(<Recipe {...props} />);
    it('renders correctly', () => {
        expect(wrapper.find('.recipe').length).toEqual(1);
    });
 it('rendres name', () => {
    expect(wrapper.find('h1').text()).toEqual('name1');
 })
 it('rendres IngredientList', () => {
    expect(wrapper.find(IngredientList).length).toEqual(1);
 });
 it('rendres instructions', () => {
    expect(wrapper.find(Instructions).length).toEqual(1);
 })
  
});