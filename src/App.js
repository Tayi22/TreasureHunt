import React from 'react';
import { createStore } from 'redux';
import { ADD_SQUARE, addSquare } from './actions';
import { freeze } from 'deep-freeze-node';

let x = 2;
let y = 4;

const numbers = [14, 25, 52, 21];

const singleSquare = [{
  number: 55,
  color: 'white',
},
];

const squares = (state = [], action) => {
  switch (action.type) {
    case ADD_SQUARE:
      return [
        ...state,
        {
          number: action.number,
          color: action.color,
        }
      ]
    default:
          return state;
  }
}
let store = createStore(squares,singleSquare);
store.dispatch(addSquare(numbers[1]));



numbers.forEach(element => {
  store.dispatch(addSquare(element))
})

console.log(store.getState());



export default React.createClass({
  render() {
    return <div>
      <h2>Treasure Hunt</h2>
      <span>knight test</span>
      <span>x: {x}, y: {y}, x+y: {x+y}</span><br/>
      <ul>
        {store.getState().map(square =>
        <li key={square.number}>
          {square.number}
          </li>)}
      </ul>
    </div>
  }

})

