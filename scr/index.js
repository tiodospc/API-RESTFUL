'use strict';

require('./services/mongo')
require('./models/product')
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async () => {

    const server = Hapi.server({
        port: 4500,
        host: 'localhost'
    });

    server.route(routes);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
