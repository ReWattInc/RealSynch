'use strict';
const Actions = require('../actions');
const Button = require('../../../../components/form/button.jsx');
const ControlGroup = require('../../../../components/form/control-group.jsx');
const PropTypes = require('prop-types');
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');
const Spinner = require('../../../../components/form/spinner.jsx');
const Store = require('./store');
const TextControl = require('../../../../components/form/text-control.jsx');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;
const propTypes = {
    match: PropTypes.object
};


class ResetPage extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
        this.state = Store.getState();
    }

    componentDidMount() {

        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

        if (this.input.password) {
            this.input.password.focus();
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

        Actions.reset({
            email: this.props.match.params.email,
            key: this.props.match.params.key,
            password: this.input.password.value()
        });
    }

    render() {

        const alerts = [];

        if (this.state.success) {
            alerts.push(<div key="success">
                <div className="alert alert-success">
                    Your password has been reset. Please login to confirm.
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
                    ref={(c) => (this.input.password = c)}
                    name="password"
                    placeholder="New password"
                    type="password"
                    hasError={this.state.hasError.password}
                    help={this.state.help.password}
                    disabled={this.state.loading}
                />
                <TextControl
                    name="_key"
                    placeholder="Key"
                    hasError={this.state.hasError.key}
                    value={this.props.match.params.key}
                    help={this.state.help.key}
                    disabled={true}
                />
                <TextControl
                    name="_email"
                    placeholder="Email"
                    hasError={this.state.hasError.email}
                    value={this.props.match.params.email}
                    help={this.state.help.email}
                    disabled={true}
                />
                <ControlGroup hideLabel={true} hideHelp={true}>
                    <Button
                        type="submit"
                        inputClasses={{ 'btn-primary full-width mt20': true }}
                        disabled={this.state.loading}>

                        Set password
                    </Button>
                </ControlGroup>
            </fieldset>;
        }

        return (
            <section>
                <Helmet>
                    <title>Reset password</title>
                </Helmet>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Reset password</h2>
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
                        
                                <Link className="btn btn-w-m btn-default btn-block" to="/login"><small>Back to login</small></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

ResetPage.propTypes = propTypes;


module.exports = ResetPage;
