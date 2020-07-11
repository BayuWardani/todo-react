export function addTodo(payload) {
    return { type: "ADD", payload }
}

export function delTodo(payload){
    return {
        type:"DEL",payload
    }
}