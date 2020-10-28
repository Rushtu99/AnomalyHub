import React, { Component } from 'react';
import People from './People';
import '../MyStyles.css';
import { Jumbotron } from 'reactstrap';
import {p} from '../data/data'

class NameList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //NEED PEEPS FROM DATABASE
            peeps: p
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
                <Jumbotron className="box1 mb-1 p-0" >
                    <h2>People List</h2>
                    {list}
                </Jumbotron>
            );
        }
    }

    export default NameList;