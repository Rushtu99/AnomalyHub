import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import '../MyStyles.css';
class LogIn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='login text-center'>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color="secondary" onClick={() => this.props.login()}>LogIn</Button>
                </Form>
            </Container>
        );
    }
}

export default LogIn;
