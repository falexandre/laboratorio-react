const todos = (state = "INIT", action) => {
    console.log(action);
    switch (action.type) {
        case "FILTRANDO":
            state = action.filtro;
            return state;
        default:
            return state;
    }
}

export default todos;