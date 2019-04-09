import {ADDING, ADDED} from '../actions'

const initialState = {
    todo: [
        {
        value: 'Walk the dog.',
        completed: false
      },
    ],

    addValue: {
        value: '',
        completed: false,
    }
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADDING:
            return {
                ...state,
                addValue: {
                    value: action.payload,
                    completed: false, 
                }
            }
        case ADDED:
            console.log(state)
            return {
                ...state,
                todo: [...state.todo, state.addValue] ,
            }
        default:
            return {
                ...state
            }
    }
}