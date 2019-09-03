import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SeasonDisplay from './SeasonDisplay';

it('renders without crashing app', () => {
    shallow(<App />);
});

it('includes SeasonDisplay and show good data', () => {
    const wrapper = shallow(<SeasonDisplay lat = '-20' lng = '19' />);
    expect(wrapper.find('.sezon')).to.have.lengthOf(1);
});

it('includes SeasonDisplay', () => {
    // const app = shallow(<App />);
    // expect(app.containsMatchingElement(<SeasonDisplay />)).toEqual(true)
});