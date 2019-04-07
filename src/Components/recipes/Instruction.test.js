import React from 'react';
import { shallow } from 'enzyme';

import Instructions from './Instructions';

describe('Instruction', () => {
    const props = {
        title: 'title1',
        steps: ['step1', 'step2']
    }
    let wrapper = shallow(<Instructions {...props} />);
    it('renders correctly', () => {
        expect(wrapper.find('.instructions').length).toEqual(1);
    });
  it('shows title', () => {
      expect(wrapper.find('h2').text()).toEqual('title1')
  });
  it('shows steps', () => {
    expect(wrapper.find('p').length).toEqual(2)
})
  
});