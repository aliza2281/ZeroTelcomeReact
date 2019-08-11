import React, { Component } from 'react'
import DAL from '../Model/DAL'
import swal from '@sweetalert/with-react';
import { Redirect } from 'react-router-dom'

class Logout extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        DAL.Logout()
            .then((data) => {
                swal({
                    content:
                        <div className="alert" >
                            <h1>{data.data}</h1>
                        </div>,
                    button: false
                });
            })
            .catch((err) => {
                swal({
                    content:
                        <div className="alert" >
                            <h1>{err.data}</h1>
                        </div>,
                    button: false
                });
            })
        return (
           
            <div>
                <Redirect to="/Home" />
            </div>
        )
    }

}

export default Logout
