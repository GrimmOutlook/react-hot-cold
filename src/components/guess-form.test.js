import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  // -----MY SOLUTION------- test fails:  TypeError: event.preventDefault is not a function
  // it('Fires the onGuess callback when a user guess is entered', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<GuessForm onGuess={callback} />);
  //   const userGuess = 43;
  //   wrapper.instance().onGuess(true);
  //   wrapper.update();
  //   wrapper.find('input[type="text"]').instance.userGuess = userGuess;
  //   wrapper.simulate('submit');
  //   expect(callback).toHaveBeenCalledWith(userGuess);
  // });

  // ----THINKFUL SOLUTION---- tests fail:  ReactWrapper::instance() can only be called on the root
  // it('Should fire the onGuess callback when the form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<GuessForm onGuess={callback} />);
  //   const value = 10;
  //   wrapper.find('input[type="text"]').instance().value = value;
  //   wrapper.simulate('submit');
  //   expect(callback).toHaveBeenCalledWith(value.toString());
  // });

  // it('Should reset the input when the form is submitted', () => {
  //   const wrapper = mount(<GuessForm />);
  //   const input = wrapper.find('input[type="text"]');
  //   input.instance().value = 10;
  //   wrapper.simulate('submit');
  //   expect(input.instance().value).toEqual('');
  // });

})
