/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/
 
"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class Db{

	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
	}

	onConnect(){
		const mongoURL = process.env.DB_URL;
		// console.log('entered on connect');		
		return new Promise( (resolve, reject) => {
			this.mongoClient.connect(mongoURL, (err, db) => {
				if (err) {
					// console.log('enterd if')					
					reject(err);
				} else {
					assert.equal(null, err);
					// console.log('enterd else')
					resolve([db,this.ObjectID]);
				}
			});
		});
	}
}
module.exports = new Db();