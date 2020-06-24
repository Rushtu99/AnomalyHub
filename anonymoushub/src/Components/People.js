import React, { Component } from 'react';
import {Card} from 'reactstrap';
import '../MyStyles.css';
class People extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className='bg-light mb-3' >
                <div >
                    <div className='card-header peep'>
                        {this.props.name}
                    </div>
                </div>
            </Card>
        )
    }
}

export default People;