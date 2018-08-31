export const clockActionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
    return dispatch({ type: clockActionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
    return setInterval(() => {
        // Dispatch `TICK` every 1 second
        dispatch({ type: clockActionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}

export const incrementCount = () => dispatch => {
    return dispatch({ type: clockActionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: clockActionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: clockActionTypes.RESET })
}