// Actions
const CREATE = 'todo/items/CREATE';
const TOGGLE = 'todo/items/TOGGLE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE: return [
         ...state,
        {
            key: action.key,
            text: action.text,
            isDone: false
        }
            
    ]

    case TOGGLE: return state.map(item => {
            if (item.key === action.key) {
                item.isDone = !item.isDone
            }
            return item;
        })

    // do reducer stuff
    default: return state;
  }
}

// Action Creators

let todoCount = 0;

export const createItem = (text) => ({
     type: CREATE, 
     key: todoCount++,
     text 
})

export const toggleItem = (key) => ({
  type: TOGGLE,
  key 
})
