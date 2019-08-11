import React, { Component } from 'react'
import { BrowserRouter as Rouetr, Route, Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Login from '../clients/login'
import Logout from '../clients/logout'
import Register from '../clients/register'
import AllPackages from '../packages/allPackages'
import Showpackage from '../packages/showpackage'
import DAL from '../Model/DAL'




class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        DAL.ifConnect()
            .then((data) => {
                this.setState({ name: data.data })
            })
    }

    render() {
        let dir;
        let username = ""
        if (this.state.name === "") {
            dir = "Login"
        }
        else {
            dir = "Logout"
            username = "Hello " + this.state.name;
        }



        return (
            <div>
                <Navbar bg="black" className="navber-style" variant="black" sticky="top">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home" >Home </Nav.Link>
                        <Nav.Link href="/Showpackage" >Showpackage </Nav.Link>
                    </Nav>
                    <Nav.Link >{username}</Nav.Link>
                    <Nav.Link href={dir} >{dir} </Nav.Link>
                    <Nav.Link className="side-logo">Zero Telcome</Nav.Link>
                </Navbar>
                <Rouetr>
                    <Switch>
                        <Route exact path="/Register" component={Register} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Showpackage" component={Showpackage} />
                        <Route exact path="/Logout" component={Logout} />
                        <Route path="/" component={AllPackages} />
                    </Switch>
                </Rouetr>
            </div>

        )
    }


}


export default Main