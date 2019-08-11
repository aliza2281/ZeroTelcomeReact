import React, { Component } from 'react'
import DAL from '../Model/DAL'
import { Row, Button } from 'react-bootstrap';
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router'

class AllPackages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            packages: [],
            id: "",
            name: "",
            nimutes: "",
            giga: "",
            callsAbroads: "",
            res: "",
            redirect: false,
            newUrl: "",
            showdiv: false
        }
    }

    componentDidMount() {
        DAL.getData('http://localhost:4500/packages/all')
            .then((data) => {
                this.setState({
                    packages: data.data,
                    res: ""
                })
            })
    }
    newRedirct = (e) => {
        e.preventDefault();
        this.setState({
            res: "",
            newUrl: e.target.name,
            redirect: true,
        })
        swal({
            content: false,
            button: false
        });
    }

    chosenPackage = (e) => {

        e.preventDefault();
        let obj = {
            id: e.target.id
        }
        DAL.addPackageServer(obj)
            .then((response) => {
                this.setState({
                    newUrl: "Showpackage",
                    redirect: true,
                })
            })
            .catch((error) => {
                this.setState(
                    { res: error.response.data }
                )
                if (error.response.data !== undefined) {
                    if (this.state.res === 'You need to log in') {
                        this.setState({ showdiv: false })
                    }
                    swal({
                        content:
                            <div className="alert" >
                                <h1>{this.state.res}</h1>
                                <br />
                                <div hidden={this.state.showdiv}>
                                    <Button variant="dark" type="button" name="Login" onClick={this.newRedirct}>Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="dark" type="button" name="Register" onClick={this.newRedirct}>Register</Button>
                                </div>

                            </div>,
                        button: false
                    });
                }
            })
    }



    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.newUrl} />
        }

        let ourPackages = this.state.packages.map((pack) => {
            return (
                <div>
                    <div className="packages-style" >
                        <p>name :{pack.name} </p>
                        <p> nimutes : {pack.nimutes}</p>
                        <p> giga : {pack.giga}</p>
                        <p> callsAbroads : {pack.callsAbroads}</p>
                        <Button variant="dark" type="submit" id={pack._id} onClick={this.chosenPackage}>Submit</Button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <h3>Choose your package !</h3>
                <Row>
                    {ourPackages}
                </Row>
            </div>
        )
    }

}

export default AllPackages