'use strict';
const Moment = require('moment');
const React = require('react');
const ReactRouter = require('react-router-dom');

const Link = ReactRouter.Link;

class HomePage extends React.Component {
    constructor(props) {

        super(props);

        this.state = this.getThisMoment();
    }

    componentDidMount() {

        this.interval = setInterval(this.refreshTime.bind(this), 1000);
    }

    componentWillUnmount() {

        clearInterval(this.interval);
    }

    refreshTime() {

        this.setState(this.getThisMoment());
    }

    getThisMoment() {

        const thisMoment = Moment();

        return {
            second: thisMoment.format('ss'),
            minute: thisMoment.format('mm'),
            hour: thisMoment.format('HH'),
            day: thisMoment.format('DD'),
            month: thisMoment.format('MM'),
            year: thisMoment.format('YYYY')
        };
    }

    render() {

        return (
            <section className="row dashboard-header">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="tabs-container">
                            <ul className="nav nav-tabs">

                            </ul>
                            <div className="tab-content">
                                <div id="tab-3" className="tab-pane active">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ibox float-e-margins">
                                                    <div className="ibox-title-no-border">
                                                        <small>All your synch transactions</small>
                                                        <div className="ibox-tools">
                                                            <Link className="btn btn-sm btn-primary" to="/account/synch">
                                                                Add New Synch
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="ibox-content-no-border">
                                                        <table className="table table-hover no-margins">
                                                            <thead>
                                                                <tr>
                                                                    <th>Status</th>
                                                                    <th>Name</th>
                                                                    <th>Source</th>
                                                                    <th>Target</th>
                                                                    <th>Actions</th>
                                                                    <th>Exceptions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><span className="label label-default">Pending</span></td>
                                                                    <td><i className="fa fa-cog"></i> Voicepad to Salesforce</td>
                                                                    <td>Voicepad</td>
                                                                    <td className="text-navy"> Salesforce </td>
                                                                    <td>
                                                                        <a href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                                                                    </td>
                                                                    <td><span className="label label-default">0</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span className="label label-warning">Canceled</span> </td>
                                                                    <td><i className="fa fa-cog"></i> Agent Legend to ReThink</td>
                                                                    <td>Agent Legend</td>
                                                                    <td className="text-navy"> ReThink </td>
                                                                    <td>
                                                                        <a href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                                                                    </td>
                                                                    <td><span className="label label-warning">2</span> </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span className="label label-primary">Completed</span> </td>
                                                                    <td><i className="fa fa-cog"></i> ProQuest to BoomTown</td>
                                                                    <td>ProQuest</td>
                                                                    <td className="text-navy"> BoomTown </td>
                                                                    <td>
                                                                        <a href="#" className="btn btn-white btn-sm"><i className="fa fa-pencil"></i> Edit </a>
                                                                    </td>
                                                                    <td><span className="label label-default">0</span></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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


module.exports = HomePage;
