import React, { Component } from 'react';
import { Card } from 'reactstrap';
import '../MyStyles.css';
class People extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className='bg-light mb-3' >
                <div >
                    <button className='btn btn-success peep' onClick={() => this.props.chatSelect(this.props.element)}>
                        {this.props.element.name}
                    </button>
                </div>
            </Card>
        );
    }
}

export default People;