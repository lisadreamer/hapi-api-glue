'use strict';

const Hapi = require('hapi');
const uuid = require('node-uuid');
const Glue = require('glue');

const manifest = require('./config.json');

const options = {
    relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {

    if (err) {
        throw err;
    }

    // Starting the server
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});
