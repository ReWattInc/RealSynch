'use strict';
const React = require('react');


class Footer extends React.Component {
    render() {

        const year = new Date().getFullYear();

        return (

            <div className="footer pt20 pb20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="/">Home</a>
                                </li>
                            </ul>
                            <span>&#169; Copyright {year} RealSynch. All Right Reserved.</span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


module.exports = Footer;
