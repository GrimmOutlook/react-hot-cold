import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Updates feedback state', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 60
    });

    wrapper.instance().guess('words');
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual('Please enter a valid number');
    expect(wrapper.state("correctAnswer")).toEqual(60);

    wrapper.instance().guess(3);
    expect(wrapper.state("guesses")).toEqual([3]);
    expect(wrapper.state("feedback")).toEqual('You\'re Ice Cold...');
    expect(wrapper.state("correctAnswer")).toEqual(60);

    wrapper.instance().guess(25);
    expect(wrapper.state("guesses")).toEqual([3, 25]);
    expect(wrapper.state("feedback")).toEqual('You\'re Cold...');
    expect(wrapper.state("correctAnswer")).toEqual(60);

    wrapper.instance().guess(45);
    expect(wrapper.state("guesses")).toEqual([3, 25, 45]);
    expect(wrapper.state("feedback")).toEqual('You\'re Warm');
    expect(wrapper.state("correctAnswer")).toEqual(60);

    wrapper.instance().guess(59);
    expect(wrapper.state("guesses")).toEqual([3, 25, 45, 59]);
    expect(wrapper.state("feedback")).toEqual('You\'re Hot!');
    expect(wrapper.state("correctAnswer")).toEqual(60);

    wrapper.instance().guess(60);
    expect(wrapper.state("guesses")).toEqual([3, 25, 45, 59, 60]);
    expect(wrapper.state("feedback")).toEqual('You got it!');
    expect(wrapper.state("correctAnswer")).toEqual(60);
  });

  it('Resets game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [12, 4, 5, 66],
      feedback: 'You got it!',
      correctAnswer: 66
    });
    wrapper.instance().newGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual('Make your guess!');
  })


})
