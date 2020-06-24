import React, { Component } from 'react';
import Chat from './Chat';
import NameList from './NameList';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null
        };
    }

    chatSelect(val) {
        this.setState({
            selectedPerson: val
        })
        // },()=>{console.log(this.state.selectedPerson)});
    }

    render() {
        return (
            <div className='container'>
                <div className='row' >
                    <NameList className='col-6' style={{ margin: 3 }} chatSelect={this.chatSelect.bind(this)} />
                    <Chat className='col-6' style={{ margin: 3 }} person={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}

export default Main;