import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

  it('Fires the onInfo callback when the "WHAT?" button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback} />);
        wrapper.find('.what').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

  it('Fires the onNewGame callback when the "+ NEW GAME" button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback} />);
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });


})
