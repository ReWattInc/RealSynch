'use strict';
const PropTypes = require('prop-types');
const React = require('react');


const propTypes = {
    markup: PropTypes.node,
    helmet: PropTypes.object,
    state: PropTypes.object
};


class MainPage extends React.Component {
    render() {

        return (
            <html>
                <head>
                    {this.props.helmet.title.toComponent()}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {this.props.helmet.meta.toComponent()}
                    <link rel="stylesheet" href="/public/css/bootstrap.css" />
                    <link rel="stylesheet" href="/public/css/core.css" />
                    <link rel="stylesheet" href="/public/css/font-awesome.css" />
                    <link rel="stylesheet" href="/public/pages/main.css" />
                    <link rel="stylesheet" href="/public/chosen.css" />
                    <link rel="shortcut icon" href="/public/media/realsynch.ico" />
                    {this.props.helmet.link.toComponent()}
                </head>
                <body>
                    <div id="app-mount"
                        dangerouslySetInnerHTML={{
                            __html: this.props.markup
                        }}
                    />
                    <script id="app-state"
                        dangerouslySetInnerHTML={{
                            __html: this.props.state
                        }}
                    />
                    <script src="/public/js/realsynch.js"></script>
                    <script src="/public/core.min.js"></script>
                    <script src="/public/pages/main.min.js"></script>
                    <script src="/public/js/jquery.js"></script>
                    <script src="/public/js/bootstrap.min.js"></script>
                    <script src="/public/js/prism.js"></script>
                    <script src="/public/js/chosen.jquery.js"></script>
                    
                </body>
            </html>
        );
    }
}


MainPage.propTypes = propTypes;


module.exports = MainPage;
