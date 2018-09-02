import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import ConnectedCounter, {Counter} from './counter';

describe('Counter component', () => {

    const initialState = {clock:{count:0}};
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><ConnectedCounter /></Provider>)
    });

    it('+++ render the counter component', () => {
        expect(wrapper.find(ConnectedCounter).length).toEqual(1);
    });

    it('starts with a count of 0', () => {
        expect(wrapper.find(Counter).prop('count')).toEqual(initialState.clock.count);
    });

})