import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// const express = require ('express');  
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));  //for sending img
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));  //properly sending requests
app.use(cors());

const CONNECTION_URL = 'mongodb+srv: //Travelbook:travel123@cluster0.zljyapm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifielfTopology:true})
.then(() => app.listen(PORT, () =>console.log(`Server running on port: ${PORT}`))) 
.catch((error) => console.log(error.message));

//this makes sure we don't get any errors in the console
// mongoose.set('useFindAndModify',false);