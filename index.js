console.log("welome in the redux first tutorials \n by muhammad kashif iqbal");

const redux = require('redux');
const CreateStore=redux.createStore;
const Buy_Book="buy_book";

const initialState={
    numberOfBook:10
}

function buyBook(){
    return{
        type:Buy_Book,
        info:"this is my first redux code"
    }
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case "buy_book":return{
            ...state,
            numberOfBook:state.numberOfBook-1
        }
        default: return state;
    }
}

const store=redux.createStore(Reducer);
console.log("initial state ", store.getState());
const unsubscribe=store.subscribe(()=>{console.log("update state value", store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
unsubscribe();