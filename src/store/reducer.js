const initialState = {
    todos: []
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'ADD':
            let newstate = state.todos.concat(action.payload)
            state.todos = newstate
            return state
        case 'DEL':
            let xnewtodos = []
            state.todos.map((val,i) => {
                if(i != action.payload){
                    xnewtodos.push(val)
                }
            })
            state.todos = xnewtodos
            return state
        default:
            return state
    }
  };
  
  export default rootReducer;