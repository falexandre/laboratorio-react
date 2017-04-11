const grid = (state = "comprar", action) => {
    switch (action.type) {
        case "FILTRANDO":
            state = action.filtro;
            return state;
        default:
            return state;
    }
}

export default grid;