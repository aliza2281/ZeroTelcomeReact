import React, { Component } from 'react'
import DAL from '../Model/DAL'
import { Table, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'

class Showpackage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            packages: [],
            redirect: false,
        }
    }

    componentDidMount() {
        DAL.getData('http://localhost:4500/clients/showPackage')
            .then((data) => {
                this.setState({
                    packages: data.data
                })

            })
    }
    newRedirct = (e) => {
        this.setState({
            redirect: true,
        })
    }

    render() {

        let userPackage = <div>
            <h5>You don't have packages</h5>
            <Button variant="dark" type="button" onClick={this.newRedirct}>Choose package</Button>
        </div>

        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        if (this.state.packages.length > 0) {
            let rowTable = this.state.packages.map((pack) => {
                return (
                    <tr>
                        <td>{pack.name}</td>
                        <td>{pack.nimutes}</td>
                        <td>{pack.giga}</td>
                        <td>{pack.callsAbroads}</td>
                    </tr>
                )
            })

            userPackage =
                < div >
                    <Table striped bordered hover variant="dark" responsive="true" size="sm-6">
                        <thead>
                            <tr>
                                <th>package name</th>
                                <th>nimutes</th>
                                <th>giga</th>
                                <th>calls Abroads</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowTable}
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <br />
                    <div>
                        <h5>More packages</h5>
                    </div>
                    <a href=""></a>
                    <Button variant="dark" type="button" onClick={this.newRedirct}>Choose package</Button>
                </div >
        }


        return (
            <div>
                <br />
                <h3>Your packages</h3>
                <br />
                <br />
                <br />
                {userPackage}
            </div>

        )



    }
}

export default Showpackage