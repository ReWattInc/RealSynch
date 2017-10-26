'use strict';
const PropTypes = require('prop-types');
const React = require('react');
const ReactRouter = require('react-router-dom');
const classNames = require('classnames');
const SynchForm = require('./synch-form.jsx');
const ReactHelmet = require('react-helmet');

const Helmet = ReactHelmet.Helmet;

const Link = ReactRouter.Link;
const propTypes = {
    location: PropTypes.object
};


class SynchPage extends React.Component {

	componentDidMount() {

        const script = document.createElement("script");

        script.src = "../public/js/realsynch.js";
        script.async = true;

        document.body.appendChild(script);
    }

    constructor(props) {
        super(props);
        this.state = {
           redText: false,
           tabs: 0
        };
        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
    }

    addClass() {
        this.setState({
            redText:true
        });
        $('.grid').masonry('reloadItems')
    }

    removeClass() {
        this.setState({
            redText:false
        });
    }

    render() {

        return (
            <section>
            	<Helmet>
                    <title>Add Synch</title>
                </Helmet>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="container">
                        <div className="col-lg-10">
                            <h2>Add New Synch</h2>
                        </div>
                        <div className="col-lg-2">
                            <Link className="btn btn-w-m btn-default mt20" to="/account">Back</Link>
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between">
                                            
                                            <div className={classNames("step", {"step completed":this.state.redText})}>
                                                <div className="step-icon-wrap">
                                                    <div className="step-icon"><i className="fa fa-random"></i></div>
                                                </div>
                                                <h4 className="step-title">Source</h4>
                                            </div>
                                 
                                            <div className="step">
                                                <div className="step-icon-wrap">
                                                    <div className="step-icon"><i className="fa fa-crosshairs"></i></div>
                                                </div>
                                                <h4 className="step-title">Target</h4>
                                            </div>
                                            <div className="step">
                                                <div className="step-icon-wrap">
                                                    <div className="step-icon"><i className="fa fa-key"></i></div>
                                                </div>
                                                <h4 className="step-title">Credentials</h4>
                                            </div>
                                            <div className="step">
                                                <div className="step-icon-wrap">
                                                    <div className="step-icon"><i className="fa fa-check"></i></div>
                                                </div>
                                                <h4 className="step-title">Finish</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container synch-group">

                            <div className="grid">
                                <div className={classNames("grid-item synch-box", {"grid-item synch-box remove-synch":this.state.redText})}>
                                    <div className="synch-item">
                                        <a href="#" className="synch-link" onClick={this.addClass}>
                                            <img src="../public/images/Mojo.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/FirePoint.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/PropertyBase.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/ProQuest.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/REthink.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/Salesforce.JPG"/>
                                        </a>
                                    </div>
                                </div>

                                <div className="grid-item synch-box">
                                    <div className="synch-item">
                                        <a href="#" className="synch-link">
                                            <img src="../public/images/VoicePad.JPG"/>
                                        </a>
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


module.exports = SynchPage;

