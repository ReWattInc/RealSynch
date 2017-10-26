'use strict';
const Form = require('./form.jsx');
const React = require('react');
const ReactHelmet = require('react-helmet');


const Helmet = ReactHelmet.Helmet;


class SignupPage extends React.Component {
    render() {

        return (
            <section>
                <Helmet>
                    <title>Sign up</title>
                </Helmet>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Register New Account</h2>
                            
                        </div>
                        <div className="col-lg-2">

                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper-content  animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-4">
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = SignupPage;
