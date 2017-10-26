'use strict';
const PropTypes = require('prop-types');
const React = require('react');
const ReactRouter = require('react-router-dom');
const ClassNames = require('classnames');


const Link = ReactRouter.Link;
const propTypes = {
    location: PropTypes.object
};


class Navbar extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            navBarOpen: false
        };
    }

    componentWillReceiveProps() {

        this.setState({ navBarOpen: false });
    }

    classForPath(path) {

        return ClassNames({
            active: this.props.location.pathname === path
        });
    }

    toggleMenu() {

        this.setState({ navBarOpen: !this.state.navBarOpen });
    }

    render() {

        const navBarCollapse = ClassNames({
            'navbar-collapse': true,
            collapse: !this.state.navBarOpen
        });

        return (

            <nav className="navbar navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/account" className="navbar-minimalize minimalize-styl-2">
                            <span className="navbar-brand-label">
                                <span className="brand-real">Real</span>
                                <span className="brand-synch">Synch</span>
                            </span>
                        </Link>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell"></i>  <span className="label label-warning">8</span>
                            </a>
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="mailbox.html">
                                        <div>
                                            <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="mailbox.html">
                                        <div>
                                            <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="profile.html">
                                        <div>
                                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                            <span className="pull-right text-muted small">12 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/account/settings">
                                <i className="fa fa-cog"></i> Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login/logout">
                                <i className="fa fa-sign-out"></i> Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

Navbar.propTypes = propTypes;


module.exports = Navbar;
