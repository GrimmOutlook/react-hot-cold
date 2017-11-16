import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
        shallow(<GuessList guesses={[3,5]} />);
    });

  // it('has 2 lists', () =>{
  //   const wrapper = shallow(<GuessList guesses={[3,5]} />);
  //   expect(wrapper.find('li')).toHaveLength(2);
  // });

  it('Renders a list of guesses', () => {
    const values = [66, 87, 71];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
        expect(items.at(index).text()).toEqual(value.toString());
    });
  });


})
