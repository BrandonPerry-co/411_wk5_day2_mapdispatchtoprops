import { combineReducers } from 'redux'

const user = (state = null, action) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type){
        case "ADD_CAR" :
            let newCar = [...state, action.value]
            return newCar

        case "REMOVE_CAR" :
            let removeNewCar = [...state]
            removeNewCar.splice(action.value, 1)
            return removeNewCar

        default : return state    
    }
}

export default combineReducers({ user, cars })