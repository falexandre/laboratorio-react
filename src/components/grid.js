import React from 'react';

const Grid = ({filtro}) => {
    let valorGrid = filtro ? filtro.grid : "Teste";

    const gridList = [
        {tipo : "comprar", titulo: "Casa em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Apartamento em Blumemenau Alugar"},
        {tipo : "comprar", titulo: "Casa em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Casa Geminada em Blumemenau Alugar"},
        {tipo : "comprar", titulo: "Casa Geminada em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Casa em Blumemenau Alugar"},
        {tipo : "comprar", titulo: "Casa em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Casa em Blumemenau Alugar"},
        {tipo : "comprar", titulo: "Terreno em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Predio em Blumemenau Alugar"},
        {tipo : "comprar", titulo: "Casa em Blumenau Comprar"},
        {tipo : "alugar", titulo: "Apartamento em Blumemenau Alugar"},
    ];

    let gridFilter = gridList.filter((value)=>{
        return value.tipo === valorGrid;
    });

    return (
        <div>
            <br/>
            {
                gridFilter.map((value)=>{
                    return <div className="row" >{value.titulo}</div>;
                })
            }
        </div>
    );
}


export default Grid;