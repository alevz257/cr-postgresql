/**
 * @fileoverview Description of this file.
 */

const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
var app = express();
const fs = require('fs');
const pgPass = process.env.PGPASSWORD || 'admin123';
const pgUser = process.env.PGUSER || 'dbadmin';
const pgDb = process.env.PGDB || 'hello';
const pgHost = process.env.PGHOST || 'localhost';
const PORT = process.env.PORT || '8090';

console.log("The User: " + pgUser + " the passw: " + pgPass + "The database connected: " + pgDb);

const sequelize = new Sequelize(pgDb ,pgUser ,pgPass,{
  host: pgHost,
  dialect: 'postgres',
  /*dialectOptions: {
    ssl: {
      host: 'alevz-project-1:test-1',
      key: cKey,
      cert: cCert,
      ca: serverCa
    }
  }*/
});

const Greet = sequelize.define('Greet', {
  greeting: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

async function authSQL() {
  try {
    await sequelize.authenticate();
    console.log('Auth done');

    await Greet.sync({ force: true });
    console.log('table setting');

    //sequelize.close();
  } catch (error) {
      console.error('Error!!: ', error);
  }
};

async function addGreet(greets) {
  let newGreet = Greet.build({greeting: greets});
  console.log('the new greet: ' + newGreet.greeting);
  await newGreet.save();
  console.log('Saved!');
}

async function readAll(req,res){
  const greets = await Greet.findAll();
  console.log('All users: ', JSON.stringify(greets));
//  sequelize.close();
  res.json(greets);
}



authSQL();
app.get('/healthz', (req,res)=>{
  res.sendStatus(200);
});


app.get('/add', (req,res)=>{
 addGreet("HELLO!");
 res.send("adding Hello");
});

app.get('/read', (req,res)=>{
  readAll(req,res);
});

app.listen(PORT, ()=> {
   console.log('running at port:'+ PORT);
});

