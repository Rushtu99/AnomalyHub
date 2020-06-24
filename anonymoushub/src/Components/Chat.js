import React, { Component } from 'react';
import Message from './Message.js';



class Chat extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        // import message from somewhere
        //dummy Message
        var messageData = [
            {
                text: 'wassup',
                Time: 1
            },
            {
                text: 'bitch',
                Time: 2
            },
            {
                text: 'Dummy',
                Time: 3
            }]

        // var messageList = messageData.map(element => {
        //     return (
        //         // <Message text={element.text} time={element.time} >
        //         // </Message>
        //     )
        // });
        // console.log(messageList);
        return (
            <div className='box2'>
                <div className="alert alert-dismissible alert-light">
                    <Message text="dum" time = "3" />
                </div>
            </div>
        );
    }
}

export default Chat;