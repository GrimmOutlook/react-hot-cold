import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
        shallow(<GuessList guesses={[3,5]} />);
    });

  it('has 2 lists', () =>{
    const wrapper = shallow(<GuessList guesses={[3,5]} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });


})
