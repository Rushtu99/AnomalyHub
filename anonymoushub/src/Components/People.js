import React, { Component } from 'react';
import {Button, Card, ButtonToggle } from 'reactstrap';
import '../MyStyles.css';
class People extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className='bg-light mb-1' >
                    <ButtonToggle color="primary" className='peep' onClick={() => this.props.chatSelect(this.props.element)}>
                        {this.props.element.name}
                    </ButtonToggle>
            </Card>
        );
    }
}

export default People;