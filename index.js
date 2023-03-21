import {legacy_createStore as createStore } from 'redux';

const BUY_CAKE = 'BUY_CAKE';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'operation to buy cake'
    }
}

const initialState = {
    numOfCakes : 10
}

const reducer=(state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('Initital State : ', store.getState());
const unsubscribe =  store.subscribe(()=> console.log('Updated State : ', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(buyCake())
store.dispatch(buyCake())