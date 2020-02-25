// JavaScript source code
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './json.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
//AJAXÀý×Ó
class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username1: '', lastGistUrl1: '' };
    }


    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {

            var lastGist1 = result[1];
            var lastGist2 = result[2];
            var lastGist3 = result[3];
            this.setState({
                username1: lastGist1.owner.login,
                lastGistUrll: lastGist1.html_url,
                username2: lastGist2.owner.login,
                lastGistUrl2: lastGist2.html_url,
                username3: lastGist3.owner.login,
                lastGistUrl3: lastGist3.html_url,
            });

        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <form>
                <div>
                    {this.state.username1} user:
            <a href={this.state.lastGistUrll}>{this.state.lastGistUrll}</a>
                </div>
            
                <div>
                    {this.state.username2} user:
            <a href={this.state.lastGistUrl2}>{this.state.lastGistUrl2}</a>
                </div>
                <div>
                    {this.state.username3} user:
            <a href={this.state.lastGistUrl3}>{this.state.lastGistUrl3}</a>
                    </div>
                </form>
        );
    }
}

ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,//·µ»Ø8¸öurl
    document.getElementById('root')
);