const mysql = require('mysql');

class Mysql {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'mysql.sqlpub.com',
            user: 'fyy5210',
            password: '8fced1b1d706a553',
            database: 'fyy5210'
        })
        this.connection.connect()
    }
    query(sql) {
        return new Promise((resolve,reject)=>{
            try{
                this.connection.query(sql, function (error, results, fields) {
                    if (error){
                        reject(error)
                        return
                    }
                    resolve(results)
                });
            }catch(e){
                reject()
            }
        })
    }
}

module.exports = new Mysql()