import React, { Component } from 'react';
import Chat from './Chat';
import NameList from './NameList';
import LogIn from './Login';
import {Container} from 'reactstrap';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null,
            loggedIn: false,
            
        };
    }

    login() {
        this.setState({
            loggedIn:true
        });
    }

    chatSelect(val) {
        this.setState({
            selectedPerson: val
        })

    }

    render() {
        return (
            <div className="ml-3 mr-3 p-0">
                {!this.state.loggedIn && <LogIn login = {this.login.bind(this)} />}
                {this.state.loggedIn && <div className='row' >
                    <NameList className='col-6' chatSelect={this.chatSelect.bind(this)} />
                    <Chat className='col-6' person={this.state.selectedPerson} />
                </div>}
            </div>
        );
    }
}

export default Main;