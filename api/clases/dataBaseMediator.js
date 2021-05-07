const { json } = require('express');
const  {Pool, Client} = require('pg');
module.exports = class DataBaseMediator{ 
    constructor (){
        let lastSelectDBResponse;
        let lastInsertDBResponse;
        let lastDeleteDBResponse;
        const dbUser = 'postgres';
        const dbPassword = 'basedMaster97';
        const dbIp = 'localhost';
        const dbPort = 5432;
        const dbName = 'eKioskDB';
        const connectionString = 'postgressql://'+dbUser+':'+dbPassword+'@'+dbIp+':'+dbPort+'/'+dbName;
        this.client = new Client({
            connectionString: connectionString
        });
        this.pool = new Pool({
            user: dbUser,
            password: dbPassword,
            host: dbIp,
            port: dbPort,
            database: dbName
        })
    }

    async executeSelectConsult(select_consult){
        try{
            const queryResponse = await this.pool.query(select_consult);
            this.lastSelectDBResponse = queryResponse.rows;
        }catch(error){
            console.log(error);
        }   
    }

    async executeInsertConsult(insert_consult, values){
        try{
            const queryResponse = await this.pool.query(insert_consult, values);
            this.lastInsertDBResponse = queryResponse;
        }catch(error){
            console.log(error);
        }   
    }

    async executeDeleteConsult(delete_consult,values){
        try{
            const queryResponse = await this.pool.query(delete_consult, values);
            this.lastDeleteDBResponse = queryResponse;
        }catch(error){
            console.log(error);
        }   
    }

    getLastSelectDBResponse(){
        return this.lastSelectDBResponse;
    }    

    getLastInsertDBResponse(){
        return this.lastInsertDBResponse;
    }

    getLastDeleteDBResponse(){
        return this.lastDeleteDBResponse;
    }
}//final clase