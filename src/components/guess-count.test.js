import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Updates the Count', () => {
    const count = '4';
    const wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.contains(<span id="count">{count}</span>)).toEqual(true);
  });

})
