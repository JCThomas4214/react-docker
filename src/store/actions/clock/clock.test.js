import {clockActionTypes} from './clock';

test('prop tick equals TICK', () => {
    expect(clockActionTypes.TICK).toBe('TICK');
});