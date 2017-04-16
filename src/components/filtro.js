import $ from 'jquery';
import React, {Component} from 'react';
class Filtro extends Component {

    componentDidMount () {
        $('#selectFiltro').material_select();
    }

    render() {
        return (
            <div>
                <div className="input-field col s12" >
                    <select id="selectFiltro" value="comprar" ref="operacao">
                        <option value="comprar" selected>Comprar</option>
                        <option value="alugar">Alugar</option>
                    </select>
                </div>
                <button 
                className="btn waves-effect waves-light"
                onClick={() => this.handleClick()}>Buscar</button>
            </div>
        );
    };

    handleClick() {

        let operacao = this.refs.operacao.value || '';
        this.props.cliqueBuscar(operacao);

    }

}


export default Filtro;