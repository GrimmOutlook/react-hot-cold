import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

  // it('Should call onClose fxn. when "Got It!" button is clicked', () => {
  //       const wrapper = shallow(<InfoModal />);
  //       wrapper.simulate('click');
  //       expect(wrapper.state('onClose')).toEqual(true);
  //   });

  it('Fires the onClose callback when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });


})
