'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');
const ReactRouter = require('react-router-dom');


const Helmet = ReactHelmet.Helmet;
const Link = ReactRouter.Link;


class HomePage extends React.Component {
    render() {

        return (
            <div className="landing-page">
                <div id="inSlider" className="carousel carousel-fade">
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="container">
                                <div className="carousel-caption blank">
                                    <h1>Connecting the Real Estate Industry</h1>
                                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                </div>
                            </div>
                            <div className="header-back one"></div>
                            <div className="color-correction"></div>
                        </div>
                    </div>
                </div>
                <section className="bg-gray-light pb-0">
                    <div className="container">
                        <div className="row justify-content-center pb-4 pb-lg-5">
                            <div className="col-lg-12 text-center">
                                <h1>Integration</h1>
                                <p className="mt-4 text-xs-large text-extra-large">
                                <i>It’s not just connecting apps and sharing data – It’s about accelerating and delivering business value and innovation.</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt50">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 px-0">
                                <a className="page-scroll" href="#automate">
                                    <div className="position-relative">
                                        <img src='../public/media/services-1.png' className="img-fluid" />
                                        <div className="bg-white position-relative p-5 height97" data-mh="mh-our-services">
                               
                                            <span className="triangle-top-left triangle-gray-dark left-0 opacity-2-5 position-absolute top-0"></span>
                                            
                              
                                            <span className="icon bg-base-color text-white rounded-circle">
                                                <i className="fa fa-gear"></i>
                                            </span>
                                            
                                            <h4>Automate and Streamline processes</h4>
                                            <span className="bg-base-color mt-3 sep-line-thick"></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-4 px-0"> 
                                <a className="page-scroll" href="#future">
                                    <div className="position-relative">
                                        <img src='../public/media/services-2.jpg' className="img-fluid" />
                                        <div className="bg-white position-relative p-5 height97" data-mh="mh-our-services">
                          
                                            <span className="triangle-top-left triangle-gray-dark left-0 opacity-2-5 position-absolute top-0"></span>
                                            
                                   
                                            <span className="icon bg-base-color text-white rounded-circle"><i className="fa fa-line-chart"></i></span>
                                            
                                            <h4>Future Proofing Business</h4>
                                            <span className="bg-base-color mt-3 sep-line-thick"></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-4 px-0">
                                <a className="page-scroll" href="#competitive">
                                    <div className="position-relative">
                                        <img src='../public/media/services-3.jpg' className="img-fluid" />
                                        <div className="bg-white position-relative p-5 height97" data-mh="mh-our-services">
         
                                            <span className="triangle-top-left triangle-gray-dark left-0 opacity-2-5 position-absolute top-0"></span>
                                            
                                 
                                            <span className="icon bg-base-color text-white rounded-circle"><i className="fa fa-trophy"></i></span>
                                            
                                            <h4>Competitive Edge</h4>
                                            <span className="bg-base-color mt-3 sep-line-thick"></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="app-features text-center">
                    <div className="container">
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-users"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Visibility for Agents and Coordinators who don’t have access to critical applications/data.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-clock-o"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Eliminating manual duplicate data entry (Time and Accuracy).</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 padtop8" id="automate">
                            <i className="fa fa-cogs big-icon top50"></i>
                            <h2>Automate and Streamline processes</h2>
                        </div>
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-bolt"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Real-time Actions and Reporting on Client Acquisition Cost.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-area-chart"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Getting more insight on KPIs to Forecast a pipeline for the business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-features text-center">
                    <div className="container">
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-comments"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Flexibility to manage change and do more with less.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-code"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Reduction of dependency on brittle “custom coded” connections - developer dependent SPF (“Single point of Failure”).</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 padtop8" id="future">
                            <i className="fa fa-pie-chart big-icon top50"></i>
                            <h2>Future Proofing Business</h2>
                        </div>
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-cloud"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Scalability to meet future growth needs.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-server"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Standardize on modern and robust technologies to break down the restrictions of the past.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-features text-center top50">
                    <div className="container">
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-handshake-o"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Being easier to do business with than your competition.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-history"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Reducing and eliminating friction in the sales process throughout customer lifecycle.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 padtop8" id="competitive">
                            <i className="fa fa-trophy big-icon top50"></i>
                            <h2>Competitive Edge</h2>
                        </div>
                        <div className="col-md-4 features-left">
                            <div className="col-md-12">
                                <div className="iconx">
                                    <i className="fa fa-users"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Enabling all roles to be more efficient and effective (inside Sales, outside Agents, Coordinators, Vendors).</p>
                                </div>
                                <div className="iconx">
                                    <i className="fa fa-cubes"></i>
                                </div>
                                <div className="feature-single">
                                    <p>Interconnect the latest apps to derive key business intelligence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


module.exports = HomePage;