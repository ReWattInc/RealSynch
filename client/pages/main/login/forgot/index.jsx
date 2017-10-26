'use strict';
const Actions = require('../actions');
const Button = require('../../../../components/form/button.jsx');
const ControlGroup = require('../../../../components/form/control-group.jsx');
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');
const Spinner = require('../../../../components/form/spinner.jsx');
const Store = require('./store');
const TextControl = require('../../../../components/form/text-control.jsx');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;


class ForgotPage extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

        if (this.input.email) {
            this.input.email.focus();
        }
    }

    componentWillUnmount() {

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    handleSubmit(event) {

        event.preventDefault();
        event.stopPropagation();

        Actions.forgot({
            email: this.input.email.value()
        });
    }

    render() {

        const alerts = [];

        if (this.state.success) {
            alerts.push(<div key="success">
                <div className="alert alert-success">
                    If an account matched that address, an email will be sent with instructions.
                </div>

            </div>);
        }

        if (this.state.error) {
            alerts.push(<div key="danger" className="alert alert-danger">
                {this.state.error}
            </div>);
        }

        let formElements;

        if (!this.state.success) {
            formElements = <fieldset>
                <TextControl
                    ref={(c) => (this.input.email = c)}
                    name="email"
                    placeholder="What's your email?"
                    hasError={this.state.hasError.email}
                    help={this.state.help.email}
                    disabled={this.state.loading}
                />
                <ControlGroup hideLabel={true} hideHelp={true}>
                    <Button
                        type="submit"
                        inputClasses={{ 'btn-primary full-width mt20': true }}
                        disabled={this.state.loading}>

                        Send reset
                    </Button>
                </ControlGroup>
            </fieldset>;
        }

        return (
            <section>
                <Helmet>
                    <title>Forgot password</title>
                </Helmet>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Forgot password</h2>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper-content  animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-4">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    {alerts}
                                    {formElements}
                                </form>
                        
                                <Link className="btn btn-w-m btn-default btn-block" to="/login">Back to login</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}


module.exports = ForgotPage;
