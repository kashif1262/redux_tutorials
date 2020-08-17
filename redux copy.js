const redux = require('redux');
console.log("redux is created now");
const createStore = redux.createStore;
const buy_book = "buy_book";

const initialState = {
    counter:10
}
function buyBook(){
    return {
        type:buy_book
    }
}
const Reducer = (state=initialState, action)=>{
    switch (action.type){
        case "buy_book":return{
            counter:state.counter-1
        }
        default:return state;
    }

}

const store = createStore(Reducer);
console.log("initial state", store.getState());
const unsubscribe=store.subscribe(()=>{console.log("update state value", store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());

unsubscribe();