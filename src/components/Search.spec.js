import { mount } from 'enzyme';
import React from 'react';
import Search from './Search';


let setup = () => {
    const props = {
        onSearchChange: jest.fn()
    };

    const enzymeWrapper = mount(<Search {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('Search component', () => {
    it('should render self', () => {
        const { enzymeWrapper, props } = setup();
        expect(props.onSearchChange.mock.calls.length).toEqual(0);
        const input = enzymeWrapper.ref('searchString');
        input.node.value = 'search';
        input.simulate('change', input);
        expect(props.onSearchChange.mock.calls.length).toEqual(1);
        expect(props.onSearchChange.mock.calls[0]).toEqual(['search']);
    })

})

