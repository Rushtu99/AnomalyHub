import React, { Component } from 'react';


class Message extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="alert alert-dismissible alert-success">
                <div style={{fontSize:20}}>{this.props.text}</div>
                <div style={{fontSize:10,opacity:0.4}}>{this.props.time}</div>
            </div>
        );
    }
}
export default Message;
