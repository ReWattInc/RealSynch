'use strict';
const ClassNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');
const ReactRouter = require('react-router-dom');


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

    isPathActive(pathPattern) {

        let isActive = false;

        if (typeof pathPattern === 'string') {
            isActive = this.props.location.pathname === pathPattern;
        }
        else {
            isActive = this.props.location.pathname.match(pathPattern);
        }

        return ClassNames({
            active: isActive
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
                        <Link to="/" className="navbar-minimalize minimalize-styl-2">
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
                            <Link to="/login">
                                <i className="fa fa-user"></i> Sign in
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup">
                                <i className="fa fa-user-plus"></i> Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = propTypes;


module.exports = Navbar;

                // <div className="container">
                //     <button
                //         className="navbar-toggler navbar-toggler-right"
                //         onClick={this.toggleMenu.bind(this)}>

                //         <span className="icon-bar"></span>
                //         <span className="icon-bar"></span>
                //         <span className="icon-bar"></span>
                //     </button>
                //     <Link className="navbar-brand" to="/">
                //         <span className="navbar-brand-label">
                //             <span className="brand-real">Real</span><span className="brand-synch">Synch</span>
                //         </span>
                //     </Link>
                        

                //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
                //         <ul className="navbar-nav ml-auto">
                //             <li className="nav-item">
                //                 <Link to="/login" className="nav-link bg-primary btn-rounded">
                //                     <i className="fa fa-user"></i> Sign in
                //                 </Link>
                //             </li>
                //             <li className="nav-item">
                //                 <Link to="/signup" className="nav-link bg-primary btn-rounded">
                //                     <i className="fa fa-user-plus"></i> Register
                //                 </Link>
                //             </li>
                //         </ul>
                //     </div>
                // </div>
