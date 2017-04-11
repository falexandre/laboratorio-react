import React from 'react';

const Grid = ({filtro}) => {
    let valorGrid = filtro ? filtro.grid : "Teste";
    return (
        <div>
            {valorGrid}
        </div>
    );
}


export default Grid;