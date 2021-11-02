let {
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

if(!MONGO_HOST){
    MONGO_NAME_CONNECTION = "connection_mongo_car_wash"
    MONGO_HOST= "cluster0-shard-00-00.iykge.mongodb.net,cluster0-shard-00-01.iykge.mongodb.net,cluster0-shard-00-02.iykge.mongodb.net"
    MONGO_DATABASE= "car-wash"
    MONGO_PORT= "27017"
    MONGO_USER= "car-wash-admin"
    MONGO_PASSWORD= "xvgMQKCZyJNXMzxg"
    MONGO_REPLICASET= "atlas-59b5mg-shard-0"
    MONGO_AUTH_SOURCE= "admin"
    MONGO_SSL= "true" 
}

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