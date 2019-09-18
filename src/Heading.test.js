import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../utils';


import Heading from './Heading';


const setUp = (props = {}) => {
    const component = shallow(<Heading {...props} />);
    return component;
}

describe('Heading Component', () => {
    let component;

    describe('Checking PropTypes', () => {

        it('Should not throw a warning ', () => {
            const expectedProps = {
                head: 'Test String',
                body: 'Test String',
                tempArr: [{
                    a: 'Test String',
                    b: 'Test String',
                    email: 345,
                    wiek: 123
                }]
            };
            const propsErr = checkProps(Heading, expectedProps);
            expect(propsErr).toBeUndefined();
        });

    });

    describe('With props', () => {
        const props = {
            head: 'Test',
            body: 'Test 2'
        }
        beforeEach(() => {
            component = setUp(props);
        });
        it('Render head', () => {
            const wrapper = findByTestAtrr(component, 'head');
            expect(wrapper.length).toBe(1);
        });
        it('Render body', () => {
            const wrapper = findByTestAtrr(component, 'body');
            expect(wrapper.length).toBe(1);
        });
    });
    describe('No props', () => {
        beforeEach(() => {
            component = setUp();
        });
        it('Render not render', () => {
            const wrapper = findByTestAtrr(component, 'head');
            expect(wrapper.length).toBe(0);
        });

    });

});