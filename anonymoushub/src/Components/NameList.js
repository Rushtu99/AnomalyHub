import React, { Component } from 'react';
import People from './People';
import '../MyStyles.css';


class NameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            peeps: [{
                key: 1,
                name: 'Person 1',
                description: 'Description 1'
            },
            {
                key: 2,
                name: 'Person 2',
                description: 'Description 2'
            },
            {
                key: 3,
                name: 'Person 3',
                description: 'Description 3'
            }]
        };
    }



    render() {
        var list = (this.state.peeps).map(element => {
            return (
                <People key={element.key} name={element.name} desc={element.description} >
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