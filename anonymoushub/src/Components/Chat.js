import React, { Component } from 'react';
import Message from './Message.js';
import { Container, Row, Jumbotron, InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';


class Chat extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.person) {
            var messages = (this.props.person.messageData).map(element => {
                return (

                    <Row className=" m-0 p-1">
                        <Message time={element.Time} text={element.text} from={element.from} >
                        </Message>
                    </Row>

                )
            });

            var title = this.props.person.name;
        }

        return (

            <Jumbotron className='box2 mb-1 p-0'>
                <div className="box3">
                    <h2>{title}</h2>
                    {messages}
                </div>
                <InputGroup size='sm'>
                    <Input placeholder="Type Here..." />
                    <InputGroupAddon addonType="prepend"> 
                    <Button></Button>
                    </InputGroupAddon>
                </InputGroup>
            </Jumbotron>


        );

    }
}

export default Chat;