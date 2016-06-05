/**
 * Created by Richard on 05.06.2016.
 */

export const ADD_SQUARE = 'ADD_SQUARE';

export const addSquare = (number) => {
    return {
        type: ADD_SQUARE,
        number: number,
        color: 'white'
    }
}