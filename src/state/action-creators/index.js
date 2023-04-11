export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }

}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const increaseAge = (age) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: age
        })
    }
}

export const decreseAge = (age) => {
    return (dispatch) => {
        dispatch({
            type: 'decrese',
            payload: age
        })
    }
}