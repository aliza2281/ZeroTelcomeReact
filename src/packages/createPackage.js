import React, { Component } from 'react'
import DAL from '../Model/DAL'
import {  Form,  Button, Col, Container, Row } from 'react-bootstrap'

class CreatePackage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nimutes: "",
            giga: "",
            callsAbroads: ""
        }
    }

    getValue = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendData = (e) => {
        e.preventDefault();
        let obj = {
            name: this.state.name,
            nimutes: this.state.nimutes,
            giga: this.state.giga,
            callsAbroads: this.state.callsAbroads
        }
        DAL.createPackageServer(obj)
    }

    render() {
        return (
            <div>
                <h1>Create Package</h1>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={4}>
                            <Form onSubmit={this.sendData}>
                                <Form.Group as={Col}>
                                    <Form.Label>name</Form.Label>
                                    <Form.Control type="text" onChange={this.getValue} name="name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>minutes</Form.Label>
                                    <Form.Control type="number" onChange={this.getValue} name="nimutes" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>giga</Form.Label>
                                    <Form.Control type="number" onChange={this.getValue} name="giga" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>callsAbroads</Form.Label>
                                    <Form.Control type="number" onChange={this.getValue} name="callsAbroads" />
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

export default CreatePackage
