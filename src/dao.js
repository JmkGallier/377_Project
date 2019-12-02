const sqlite3 = require('sqlite3');
const Promise = require('bluebird');

class AppDAO {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log('No DB', err)
            } else {
                console.log('Successful DB Connection')
            }
        })
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            })
        })
    }
/*End class*/}

module.exports = AppDAO;