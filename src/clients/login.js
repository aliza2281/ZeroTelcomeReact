import React, { Component } from 'react'
import DAL from '../Model/DAL'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import swal from '@sweetalert/with-react';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            redirect: false,
            newUrl: "",
            name: ""
        }
    }

    getValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendData = (e) => {
        e.preventDefault();
        let obj = {
            id: this.state.id,
            password: this.state.password
        }
        DAL.LoginUser(obj)
            .then((response) => {
                this.setState(
                    this.setState({
                        name: response.data,
                        newUrl: "Showpackage",
                        redirect: true,
                    })
                )
                window.location.reload();
            })
            .catch((error) => {
                if (error.response !== undefined) {
                    swal({
                        content  :
                            <div className="alert" >
                                <h1>{error.response.data.err}</h1>
                            </div>,
                        button: false,
                    });
                }
            })

    }
    newRedirct = () => {
        this.setState({ redirect: true })
        this.setState({ newUrl: "Register" })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.newUrl} />
        }

        return (
                <div>
                <h3>Login</h3>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={4}>
                        <Form onSubmit={this.sendData}>
                            <Form.Group as={Col}>
                                <Form.Label>id</Form.Label>
                                <Form.Control type="number" onChange={this.getValue} name="id" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>password</Form.Label>
                                <Form.Control type="password" onChange={this.getValue} name="password" />
                            </Form.Group>
                            <Button variant="dark" type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <br />
            <p>you are not a client ?</p>
            <Button variant="dark" type="button" name="Register" onClick={this.newRedirct}>Register</Button>
            </div >
        )
    }

}

export default Login