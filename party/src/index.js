import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const api_port = 7474;


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { loading: true, message: null }
    }

    componentDidMount() {
        fetch(`http://localhost:${api_port}/api/v1/hello_world`)
            .then(rsp => {
                if(!rsp.ok) {
                    throw rsp;
                }
                return rsp.json();
            })
            .then(msg => {
                this.setState({loading: false, message: msg.content })
            })
            .catch(err => {
                console.log('got error!');
                this.setState({loading: false, message: `${err}` })
            });
    }

    render() {
        if(this.state.loading) {
            return <h1>loading...</h1>;
        }
        return <h1>{this.state.message}</h1>;
    }
}


render(<App />, document.getElementById('app'));
