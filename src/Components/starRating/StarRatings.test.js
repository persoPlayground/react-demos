import React from 'react';
import { shallow, mount } from 'enzyme';

import StarRating from './StarRatings';
import Star from './Star'


describe('StarRating', () => {
let wrapper = shallow(<StarRating />);
    it('renders correctly', () => {
    expect(wrapper.find('.rating').length).toBe(1);    
  
    });
it('renders with initial state 0 ', () => {
    expect(wrapper.state('starSelected')).toBe(0)
});
it('renders with default props 5 ', () => {
    wrapper = mount(<StarRating />)
    expect(wrapper.props().totalStar).toBe(5);
    wrapper.unmount();
});
it('renders number of stars same as prop value', () => {
    wrapper = mount(<StarRating />);
    expect(wrapper.find('.star').length).toBe(wrapper.props().totalStar);
    wrapper.unmount();
});
it('renders number of selected = true  same as state value', () => {
    wrapper = mount(<StarRating />);
    wrapper.setState({ starSelected: 3 });
    expect(wrapper.findWhere(w => w.props().selected === true ).length).toBe(wrapper.state('starSelected'));
    wrapper.unmount();
});
});
