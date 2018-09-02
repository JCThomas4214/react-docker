import {clockActionTypes} from './clock';

test('actionTypes should ', () => {
    expect(clockActionTypes.TICK).toBe('TICK');
    expect(clockActionTypes.INCREMENT).toBe('INCREMENT');
    expect(clockActionTypes.DECREMENT).toBe('DECREMENT');
    expect(clockActionTypes.RESET).toBe('RESET');
});