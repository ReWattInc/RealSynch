'use strict';
const React = require('react');


class AccountPage extends React.Component {
    render() {

        return (
            <html>
                <head>
                    <title>Account</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/public/css/bootstrap.css" />
                    <link rel="stylesheet" href="/public/css/core.css" />
                    <link rel="stylesheet" href="/public/pages/account.css" />
                    <link rel="stylesheet" href="/public/chosen.css" />
                    <link rel="stylesheet" href="/public/image-select.css" />
                    <link rel="shortcut icon" href="/public/media/realsynch.ico" />
                    <link rel="stylesheet" href="/public/css/font-awesome.css" />
                </head>
                <body>
                    <div id="app-mount"></div>
                    
                    <script src="/public/core.min.js"></script>
                    <script src="/public/pages/account.min.js"></script>
                    <script src="/public/js/jquery.js"></script>
                    <script src="/public/js/bootstrap.min.js"></script>
                    <script src="/public/js/prism.js"></script>
                    <script src="/public/js/chosen.jquery.js"></script>
                    <script src="/public/js/image-select.js"></script>
                    <script src="/public/js/realsynch.js"></script>
                </body>
            </html>
        );
    }
}


module.exports = AccountPage;
