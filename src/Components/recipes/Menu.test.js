import React from 'react';
import { shallow } from 'enzyme';

import waitUntil from 'async-wait-until';
import nock from 'nock';

import Menu from './Menu';
import Recipe from './Recipe';

describe('Menu', () => {

   beforeAll(() => {
      nock('http://localhost:3001/')
      .get('/recipes')
      .reply(200, {
         data:[{
            "name": "Fish Tacos",
            "ingredients": [
            {
            "name": "Whitefish",
            "amount": 1,
            "measurement": "l lb"
            },
            {
            "name": "Cheese",
            "amount": 1,
            "measurement": "cup"
            },
            {
            "name": "Iceberg Lettuce",
            "amount": 2,
            "measurement": "cups"
            },
            {
            "name": "Tomatoes",
            "amount": 2,
            "measurement": "large"
            },
            {
            "name": "Tortillas",
            "amount": 3,
            "measurement": "med"
            }
            ],
            "steps": [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
            ]
            }]
      });
   })
   let wrapper = shallow(<Menu />);
   it('renders correctly', () => {
       expect(wrapper.find('.menu').length).toEqual(1);
   });

   it('Component fetching recipes from API', async (done) => {

       await waitUntil(() => wrapper.state('recipes').length !== 0);
       wrapper.update();
        expect(wrapper.state('recipes').length).toEqual(2);
      done();
  });

 
});
