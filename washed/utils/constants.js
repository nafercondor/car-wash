const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_REPLICASET,
    MONGO_SSL,
    MONGO_AUTH_SOURCE,
    MONGO_NAME_CONNECTION
} = process.env;

module.exports = {
    MONGO_SETTINGS: [{
        connectionName: MONGO_NAME_CONNECTION,
        host: MONGO_HOST,
        port: MONGO_PORT,
        database: MONGO_DATABASE,
        user: MONGO_USER,
        password: MONGO_PASSWORD,
        replicaSet: MONGO_REPLICASET,
        ssl: MONGO_SSL === 'true',
        authSource: MONGO_AUTH_SOURCE,
    }]
};