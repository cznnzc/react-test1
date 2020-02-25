import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const scaleName = {
    b: 'binary',//二进制
    d: 'decinal',
};
function toBinary(decinal) {
    return (decinal.toString(2));
}
function toDecinal(binary) {
    if (/[2-9]/i.test(binary)) {//二进制输入判断
        return 'a';
    } else {
        return (parseInt(binary, 2));
    }
}
function tryConvert(inputnumber,convert) {
    const input = parseFloat(inputnumber);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(even) {
        this.props.onNumberChange(even.target.value);
    }
    render() {
        const inputnumber = this.props.inputnumber;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>(only integer) Enter Number in {scaleName[scale]};</legend>
                <input value={inputnumber}
                onChange={this.handleChange} />
            </fieldset>
            );
    }
}
class Numbertransform extends React.Component {
    constructor(props) {
        super(props);
        this.handleBinaryChange = this.handleBinaryChange.bind(this);
        this.handleDecinalChange = this.handleDecinalChange.bind(this);
        this.state = { inputnumber:'',scale:'b'};
    }
    handleBinaryChange(inputnumber) {
        this.setState({ scale: 'b', inputnumber });
    }
    handleDecinalChange(inputnumber) {
        this.setState({ scale: 'd', inputnumber });
    }
    render() {
        const scale = this.state.scale;
        const inputnumber = this.state.inputnumber;
        const binary = scale === 'd' ? tryConvert(inputnumber, toBinary) : inputnumber;
        const decinal = scale === 'b' ? tryConvert(inputnumber, toDecinal) : inputnumber;
        
        return (
            < div >
                <NumberInput
                    scale='b'
                    inputnumber={binary}
                    onNumberChange={this.handleBinaryChange} />
                <NumberInput
                    scale='d'
                    inputnumber={decinal}
                    onNumberChange={this.handleDecinalChange} />
            </div >
        );
    }
}
ReactDOM.render(
    <Numbertransform />,
    document.getElementById('root')
);

