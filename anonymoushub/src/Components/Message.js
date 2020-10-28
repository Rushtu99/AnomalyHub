import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader} from 'reactstrap';


class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <Toast style={(this.props.from)==='self'?{marginLeft:'auto',marginRight:0,background:'dodgerblue'}:{background:'cyan'}} className="alert mb-1 p-0">
                <ToastHeader className="m-1 p-1" style={{ fontSize: 12, opacity: 0.8 }}>{this.props.from}</ToastHeader>
                <ToastBody className="m-1 p-1" style={{ fontSize: 17, color: 'black' }}>{this.props.text}</ToastBody>
                <ToastHeader style={{float: "right"}}>{this.props.time}</ToastHeader>

            </Toast>
        );
    }
}
export default Message;
