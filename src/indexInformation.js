// JavaScript source code
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueName: 'chen',
            valuePassword: '123'
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        const target = event.target;
        
        if (target.name === 'valueName') {
            this.setState({
                valueName: target.value,
            });
        }
    }
    handleChangePassword(event) {

        const target = event.target;
        if (target.name === 'valuePassword') {
            this.setState({
                valuePassword: target.value,
            });
        }
        
    }
    handleSubmit(event) {
        
        alert('A name was submitted: ' + this.state.valueName+"       "+
            'A password was submitted: ' + this.state.valuePassword);
        console.log('A password was submitted: ' + this.state.valuePassword);
        event.preventDefault();//阻止元素发生默认的行为。
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        name='valueName'
                        type='text'
                        value={this.state.valueName}
                        onChange={this.handleChangeName}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        name='valuePassword'
                        type='text'
                        value={this.state.valuePassword}
                        onChange={this.handleChangePassword}
                    />
                </label>
                <button>submit</button>
            </form>
            )
    }
}
ReactDOM.render(
    <Information />,
    document.getElementById('root')
);
