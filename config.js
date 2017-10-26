'use strict';
const Confidence = require('confidence');
const Dotenv = require('dotenv');


Dotenv.config({ silent: true });

const criteria = {
    env: process.env.NODE_ENV
};


const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'Realsynch',
    port: {
        web: {
            $filter: 'env',
            test: 9000,
            production: process.env.PORT,
            $default: process.env.PORT || 3000
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://realsynch-api.herokuapp.com',
        // $default: 'http://127.0.0.1:8000'
        $default: 'https://realsynch-api.herokuapp.com/'
    },
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: 'env',
        production: process.env.COOKIE_SECRET,
        $default: '!k3yb04rdK4tz~4qu4~k3yb04rdd0gz!'
    },
    hapiMongoModels: {
        mongodb: {
            uri: {
                $filter: 'env',
                production: process.env.MONGODB_URI,
                test: 'mongodb://localhost:27017/aqua-test',
                // $default: 'mongodb://localhost:27017/aqua'
                $default: 'mongodb://realsynch:password123@ds231205.mlab.com:31205/heroku_7pmn8c2r'
            }
        },
        autoIndex: true
    },
    nodemailer: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'noreply.realsynch.api@gmail.com',
            pass: 'asdfasf23424!@#A#'
        }
    },
    system: {
        fromAddress: {
            name: 'Aqua',
            address: 'jedireza@gmail.com'
        },
        toAddress: {
            name: 'Aqua',
            address: 'jedireza@gmail.com'
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};