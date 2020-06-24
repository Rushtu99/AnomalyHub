import React, { Component } from 'react';
import Message from './Message.js';



class Chat extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.person) {
            var messages = (this.props.person.messageData).map(element => {
                return (
                    
                        <div className="alert alert-dismissible alert-light">
                            <Message text={element.text} time={element.Time} >
                            </Message>
                        </div>
                )
            });
        }
        console.log(messages);
        
        return (
            <div className='box2'>
                {messages}
            </div>
            // <div className='box2'>
            //             <div className="alert alert-dismissible alert-light">
            //                 <Message text='dum87' time='37' />
            //             </div>
            //         </div>
        );
    }
}

export default Chat;