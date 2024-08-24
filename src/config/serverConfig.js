require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    SALTRound: process.env.saltRound,
    SECRET: process.env.SECRET,
    SyncDB: process.env.Sync_DB
}