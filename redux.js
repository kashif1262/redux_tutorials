const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const initialStateOfBook = {
    numberOfBook:20
}
const initialStateOfPen = {
    numberOfPen:15
}

function BuyBook (){
    return{
        type:"buy_book",
        payload:"my first action"
    }
}
function BuyPen(){
    return{
        type:"buy_pen",
        payload:"my sceond action"
    }
}

const BookReducer = (state=initialStateOfBook, action)=>{
    switch(action.type){
        case "buy_book":return{
            ...state,
            numberOfBook:state.numberOfBook-1
        } 
        default: return state
    }
}


const PenReducer = (state=initialStateOfPen, action) =>{
    switch(action.type){
        case "buy_pen":return{
            ...state,
            numberOfPen:state.numberOfPen-2
        }
        default: return state
    }

}
const reducer = combineReducers({
    BookReducer,
    PenReducer
});

const logger =store=>{
    return next =>{
        return action=>{
            const result =next(action);
            console.log("middleware log", result );
            return result;
        }
    }
}
const store =createStore(reducer, applyMiddleware(logger));
console.log('initial state ' , store.getState());
const unsubscribe = store.subscribe(()=>{console.log("update state value " , store.getState())});
store.dispatch(BuyBook());
store.dispatch(BuyBook());
store.dispatch(BuyBook());
store.dispatch(BuyPen());
store.dispatch(BuyPen());
store.dispatch(BuyPen());
unsubscribe();
