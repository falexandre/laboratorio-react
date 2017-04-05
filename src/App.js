import React,{Component} from 'react';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import Filtro from './components/filtro';
import Grid from './components/grid';
import {buscar} from './actions';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <Filtro cliqueBuscar = {  filtro => this.props.dispatch( buscar(filtro)) } />
                        <Grid   filtro = { this.props.filtro } />
                    </div>
                </div>
            </div>
        );
    }
}

// which props do we want to inject, given the global store state?
function filterStateToProps(state) {
    return {
        filtro: state
    };
}

export default connect(filterStateToProps)(App);
