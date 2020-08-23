import React, {Component} from 'react';
import './App.css';
import Form from "./Form";
import Result from "./Result";

class App extends Component {

    state ={
      value : ''

    };

    handleInputChange =(event) => {
        this.setState({
            value :event.target.value
        })
    };


    render() {
        return (
            <div className="App">
                <Form value = {this.state.value} change={this.handleInputChange}/>
                <Result />
            </div>
        );
    }

}

export default App;
