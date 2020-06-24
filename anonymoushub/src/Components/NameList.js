import React, { Component } from 'react';
import People from './People';
import '../MyStyles.css';


class NameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //NEED PEEPS FROM DATABASE
            peeps: [{
                key: 1,
                name: 'Person 1',
                description: 'Description 1',
                messageData: [
                    {
                        text: 'wassup 1',
                        Time: 1
                    },
                    {
                        text: 'bitch 1',
                        Time: 2
                    },
                    {
                        text: 'Dummy 1',
                        Time: 3
                    }]
            },
            {
                key: 2,
                name: 'Person 2',
                description: 'Description 2',
                messageData: [
                    {
                        text: 'nig 2',
                        Time: 1
                    },
                    {
                        text: 'die 2',
                        Time: 2
                    },
                    {
                        text: 'bsdk 2',
                        Time: 3
                    }]
            },
            {
                key: 3,
                name: 'Person 3',
                description: 'Description 3',
                messageData: [
                    {
                        text: ' fuk 3',
                        Time: 1
                    },
                    {
                        text: 'bitch 3',
                        Time: 2
                    },
                    {
                        text: 'lol xd 3',
                        Time: 3
                    }]
            }]
        };
    }



    render() {
        var list = (this.state.peeps).map(element => {
            return (
                <People key={element.key} element={element} chatSelect={this.props.chatSelect} >
                </ People>
            )
        });

        return (
            <div className="box1" >
                <h2>People List</h2>
                {list}
            </div>
        );
    }
}

export default NameList;