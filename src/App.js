import React,{Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Filtro from './components/filtro';
import Grid from './components/grid';
import {buscar} from './actions';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey darken-4">
                        <a href="#" className="brand-logo center">
                            <img className="App-logo" src="https://facebook.github.io/react/img/logo.svg" alt="Logo React"/>
                        </a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row" style={{marginTop:'50px'}} >
                        <Filtro cliqueBuscar={filtro => this.props.dispatch(buscar(filtro))} />
                        <Grid filtro={this.props.filtro} />
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
