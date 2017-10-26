'use strict';
const PropTypes = require('prop-types');
const React = require('react');
const ReactRouter = require('react-router-dom');
const ClassNames = require('classnames');
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
                <div className="wrapper wrapper-content text-center animated fadeInRight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            	<div className="ibox">
                            		<div className="ibox-title">
			                            <h5>Source</h5>
			                        </div>
			                        <div className="ibox-content">
			                        	<select name="synchs" className="chosen-select" data-placeholder="Choose a Country...">
										  	<option data-img-src="/public/media/synchs/Mojo.JPG" value="mojo">Mojo</option>
										  	<option data-img-src="/public/media/synchs/FirePoint.JPG" value="firepoint">Firepoint</option>
										  	<option data-img-src="/public/media/synchs/PropertyBase.JPG" value="property_base">Property Base</option>
										  	<option data-img-src="/public/media/synchs/ProQuest.JPG" value="mojo">ProQuest</option>
										  	<option data-img-src="/public/media/synchs/REthink.JPG" value="firepoint">ReThink</option>
										  	<option data-img-src="/public/media/synchs/Salesforce.JPG" value="property_base">Salesforce</option>
										  	<option data-img-src="/public/media/synchs/VoicePad.JPG" value="property_base">Voice Pad</option>
										</select>
			                        </div>
                            	</div>
                            </div>

                            <div className="col-lg-6">
                            	<div className="ibox">
                            		<div className="ibox-title">
			                            <h5>Target</h5>
			                        </div>
			                        <div className="ibox-content">
			                        	<select name="synchs" className="chosen-select" data-placeholder="Choose a Country...">
										  	<option data-img-src="/public/media/synchs/Mojo.JPG" value="mojo">Mojo</option>
										  	<option data-img-src="/public/media/synchs/FirePoint.JPG" value="firepoint">Firepoint</option>
										  	<option data-img-src="/public/media/synchs/PropertyBase.JPG" value="property_base">Property Base</option>
										  	<option data-img-src="/public/media/synchs/ProQuest.JPG" value="mojo">ProQuest</option>
										  	<option data-img-src="/public/media/synchs/REthink.JPG" value="firepoint">ReThink</option>
										  	<option data-img-src="/public/media/synchs/Salesforce.JPG" value="property_base">Salesforce</option>
										  	<option data-img-src="/public/media/synchs/VoicePad.JPG" value="property_base">Voice Pad</option>
										</select>
			                        </div>
                            	</div>
                            </div>
                        </div>
                        <div className="row">
                        	<div className="col-lg-4 col-lg-offset-4">
                        		<button type="button" className="btn btn-primary btn-block">Save</button>
                        	</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = SynchPage;
