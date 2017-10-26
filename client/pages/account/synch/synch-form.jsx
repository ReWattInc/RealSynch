'use strict';
// const Actions = require('./actions');
const Alert = require('../../../components/alert.jsx');
const Button = require('../../../components/form/button.jsx');
const ControlGroup = require('../../../components/form/control-group.jsx');
const LinkState = require('../../../helpers/link-state');
const PropTypes = require('prop-types');
const React = require('react');
const TextControl = require('../../../components/form/text-control.jsx');


const propTypes = {
    error: PropTypes.string,
    hasError: PropTypes.object,
    help: PropTypes.object,
    loading: PropTypes.bool,
    name: PropTypes.string,
    source: PropTypes.string,
    target: PropTypes.string,
    showSaveSuccess: PropTypes.bool
};


class SynchForm extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            password: props.password,
            passwordConfirm: props.passwordConfirm
        };
    }

    handleSubmit(event) {

        event.preventDefault();
        event.stopPropagation();

    }

    render() {

        const alerts = [];

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    {alerts}
                    <TextControl
                        placeholder="name"
                    />
              
                    <ControlGroup hideLabel={true} hideHelp={true}>
                        <Button
                            type="submit"
                            inputClasses={{ 'btn-primary full-width mt20': true }}
                            disabled={this.props.loading}>

                            Save
                        </Button>
                    </ControlGroup>
                </fieldset>
            </form>
            // <h1>Add</h1>
        );
    }
}

SynchForm.propTypes = propTypes;


module.exports = SynchForm;

// value={this.state.name}
//                         onChange={LinkState.bind(this)}
//                         hasError={this.props.hasError.name}
//                         help={this.props.help.name}
//                         disabled={this.props.loading}

      // <TextControl
                    //     name="source"
                    //     placeholder="Source"
                    //     value={this.state.source}
                    //     onChange={LinkState.bind(this)}
                    //     hasError={this.props.hasError.source}
                    //     help={this.props.help.source}
                    //     disabled={this.props.loading}
                    // />
                    // <TextControl
                    //     name="target"
                    //     placeholder="target"
                    //     value={this.state.target}
                    //     onChange={LinkState.bind(this)}
                    //     hasError={this.props.hasError.target}
                    //     help={this.props.help.target}
                    //     disabled={this.props.loading}
                    // />
