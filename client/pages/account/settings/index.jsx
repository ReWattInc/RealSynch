'use strict';
const DetailsForm = require('./details-form.jsx');
const Actions = require('./actions');
const PasswordForm = require('./password-form.jsx');
const React = require('react');
const Store = require('./store');
const UserForm = require('./user-form.jsx');
const ReactRouter = require('react-router-dom');

const Link = ReactRouter.Link;

class SettingsPage extends React.Component {
    constructor(props) {

        super(props);

        Actions.getDetails();
        Actions.getUser();

        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    render() {

        return (
            <section>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Account Settings</h2>
                        </div>
                        <div className="col-lg-2">
                            <Link className="btn btn-w-m btn-default mt20" to="/account">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper-content text-center animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-lg-offset-3">
                                <div className="tabs-container">
                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a data-toggle="tab" href="#tab-3"> 
                                                <i className="fa fa-user fa-1x"></i> Contact Info
                                            </a>
                                        </li>
                                        <li className="">
                                            <a data-toggle="tab" href="#tab-4">
                                                <i className="fa fa-user-secret fa-1x"></i> Identity
                                            </a>
                                        </li>
                                        <li className="">
                                            <a data-toggle="tab" href="#tab-5">
                                                <i className="fa fa-lock fa-1x"></i> Password
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="tab-3" className="tab-pane active">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <DetailsForm {...this.state.details} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-4" className="tab-pane">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <UserForm {...this.state.user} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="tab-5" className="tab-pane">
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <PasswordForm {...this.state.password} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}


module.exports = SettingsPage;

