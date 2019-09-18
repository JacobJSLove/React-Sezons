import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';

import App from './App';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

it('App renders without crashing', () => {
    mount(<App />);
});

// describe('SeasonDisplay Component', () => {
//             it('negative lat', () => {
//                 const wrapper = mount(<SeasonDisplay lat = '-20' lng = '19' />);
//                 expect(wrapper.containsMatchingElement(<h1 className="sezon">Burr it&#39;s chilly</h1>)).toEqual(true);
//             });
//             it('postivie lat', () => {
//                         const wrapper = mount(<SeasonDisplay lat = '20' lng = '19' />);
//                         expect(wrapper.containsMatchingElement(<h1 className="sezon">Its hot!< /h1>)).toEqual(true);
// 	});
// });

// /*console.log(wrapper.debug());*/

// it('includes Spinner with working props', () => {
//     const wrapper = mount(<Spinner message="Proszę czekać..."/>);
//     expect(wrapper.prop('message')).toEqual('Proszę czekać...');
// });