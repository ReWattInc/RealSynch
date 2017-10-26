'use strict';
const Actions = require('../actions');
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');
const Store = require('./store');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;


class LogoutPage extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

        Actions.logout();
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    render() {

        const alerts = [];

        if (this.state.success) {
            alerts.push(<div key="success" className="alert alert-success">
                Logout successful.
            </div>);
        }
        else if (this.state.error) {
            alerts.push(<div key="danger" className="alert alert-warning">
                {this.state.error}
            </div>);
        }

        return (
            <section>
                <Helmet>
                    <title>Sign out</title>
                </Helmet>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Successfully log out</h2>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                </div>

                <div className="wrapper wrapper-content text-center animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-4">
                                <div>
                                    {alerts}
                                    <Link className="btn btn-primary full-width mt20 mb10" to="/login"><small>Back to login</small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}


module.exports = LogoutPage;
