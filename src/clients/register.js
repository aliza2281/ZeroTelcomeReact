import React, { Component } from 'react'
import DAL from '../Model/DAL'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'
import { Redirect } from 'react-router'
import swal from '@sweetalert/with-react';

class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            id: "",
            password: "",
            adress: "",
            city: "",
            birthDay: "",
            firstNameERR: "",
            lastNameERR: "",
            idERR: "",
            passwordERR: "",
            adressERR: "",
            cityERR: "",
            birthDayERR: "",
            redirect: false

        }
    }

    getValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendData = (e) => {
        e.preventDefault();
        let obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            id: this.state.id,
            password: this.state.password,
            adress: this.state.adress,
            city: this.state.city,
            birthDay: this.state.birthDay
        }
        DAL.registerUser(obj)
            .then((data) => {
                if (data.data.error) {
                    const errData = data.data.error
                    this.setState({
                        firstNameERR: errData.firstName,
                        lastNameERR: errData.lastName,
                        idERR: errData.id,
                        passwordERR: errData.password,
                        adressERR: errData.adress,
                        cityERR: errData.city,
                        birthDayERR: errData.birthDay
                    })
                }
                else if (data.status === 200) {
                    this.setState({
                        redirect: true
                    })
                }

            })
            .catch((error) => {
                swal({
                    content:
                        <div className="alert" >
                            <h1>{error.response.data.err}</h1>
                        </div>,
                    button: false
                });
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="Login" />
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>

                            <h1>Register</h1>
                            <Form onSubmit={this.sendData}>
                                <Form.Row >
                                    <Form.Group as={Col}>
                                        <Form.Label>first Name</Form.Label>
                                        <Form.Control type="text" onChange={this.getValue} name="firstName" />
                                        <p className="warning">{this.state.firstNameERR}</p>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>last Name</Form.Label>
                                        <Form.Control type="text" onChange={this.getValue} name="lastName" />
                                        <p className="warning">{this.state.lastNameERR}</p>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group as={Col}>
                                    <Form.Label>id</Form.Label>
                                    <Form.Control type="number" onChange={this.getValue} name="id" />
                                    <p className="warning">{this.state.idERR}</p>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" onChange={this.getValue} name="password" />
                                    <p className="warning">{this.state.passwordERR}</p>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>adress</Form.Label>
                                    <Form.Control type="text" onChange={this.getValue} name="adress" />
                                    <p className="warning">{this.state.adressERR}</p>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>city</Form.Label>
                                    <Form.Control type="text" onChange={this.getValue} name="city" />
                                    <p className="warning">{this.state.cityERR}</p>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>birthDay</Form.Label>
                                    <Form.Control type="date" onChange={this.getValue} name="birthDay" />
                                    <p className="warning">{this.state.birthDayERR}</p>
                                </Form.Group>

                                <Button variant="dark" type="submit">Submit</Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        )
    }

}

export default Register

