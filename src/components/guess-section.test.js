import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  });

// For testing props - just check if rendered???
  it('Renders the feedback', () => {
    const feedback = "Here is some feedback that will blow your mind!";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });

})
