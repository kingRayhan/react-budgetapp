import { generate as uniqueId } from 'shortid'

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const ADD_EARN = 'ADD_EARN'
export const REMOVE_BUDGET = 'REMOVE_BUDGET'

/*
Payload Schema:

{
    type: '' // expense / earn,
    desc: ''
    amount: ''
}


*/

const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_EXPENSE: {
            return [payload, ...state]
        }
        case ADD_EARN: {
            return [payload, ...state]
        }
        case REMOVE_BUDGET: {
            return state.filter(b => b.id !== payload)
        }
        default:
            return state
    }
}

export default reducer

export const addEarn = (desc, amount) => ({
    type: ADD_EARN,
    payload: { type: 'earn', id: uniqueId(), amount, desc },
})

export const addExpense = (desc, amount) => ({
    type: ADD_EXPENSE,
    payload: {
        type: 'expense',
        id: uniqueId(),
        desc,
        amount,
    },
})

export const removeBudget = id => ({ type: REMOVE_BUDGET, payload: id })
