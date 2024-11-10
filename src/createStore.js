/* 
    1. compose -->> Done
    2. createStore
        a. getState -->> Done
        b. dispatch -->> Done
        c. subscribe -->> Done
    3. bindActionCreator -->> Done
    4. combineReducer -->> Done
    5. applyMiddleware
*/

import { bindActionCreators, combineReducers, createStore } from "redux";

const ADD_TODO = "add_todo";
const DELETE_TODO = "delete_todo";
const ADD_USER = "add_user";

function todoReducer(state = [], action) {
  if (action.type === ADD_TODO) {
    let text = action.payload.text;
    return [
      ...state,
      {
        textData: text,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type === DELETE_TODO) {
    let id = action.payload.id;
    const updatedList = state.filter((todo) => todo.id != id);
    return updatedList;
  }
  return state;
}

const addTodo = (data) => ({ type: ADD_TODO, payload: { text: data } });
const deleteTodo = (id) => ({ type: DELETE_TODO, payload: { id } });

function userReducer(state = [], action) {
  if (action.type === ADD_USER) {
    let text = action.payload.text;
    return [
      ...state,
      {
        userName: text,
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      },
    ];
  }
  return state;
}

const addUser = (text) => ({ type: ADD_USER, payload: { text } });

const reducer = combineReducers({ todo: todoReducer, user: userReducer });

const { getState, dispatch, subscribe } = createStore(reducer);

const actions = bindActionCreators({ addTodo, deleteTodo, addUser }, dispatch);

subscribe(() => console.log(getState()));

actions.addTodo("Kaushal Jha");

actions.addTodo("Sanket Singh");

actions.addUser("Kavya Malhan");

actions.addUser("Shradha Kapoor");

actions.deleteTodo(1);
