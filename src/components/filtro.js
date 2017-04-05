import React, {Component} from 'react';

class Filtro extends Component {
    render() {
        return (
            <div>
                <div >
                    <div >
                        <select ref="operacao">
                            <option value="comprar" selected>Comprar</option>
                            <option value="alugar">Alugar</option>
                        </select>
                    </div>
                    <button onClick={ () => this.handleClick() }>Buscar</button>
                </div>

            </div>
        );
    };

    handleClick() {

        let operacao = this.refs.operacao.value || '';
        this.props.cliqueBuscar(operacao);

    }

}


export default Filtro;