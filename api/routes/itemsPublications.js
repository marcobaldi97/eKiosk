var express = require('express');
var router = express.Router();

var DataBaseMediator = require("../clases/dataBaseMediator");

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/listItems/', async function(req, res, next) {
    try{
        let dbm = new DataBaseMediator();
        let query = "SELECT * FROM publicacion";
        await dbm.executeSelectConsult(query);
        let rowsToList = dbm.getLastSelectDBResponse();
        query = "select idpub, foto from fotopublicacionn";
        await dbm.executeSelectConsult(query);
        let imagesFromPublications = dbm.getLastSelectDBResponse();
        let responseObject = {
          arrayOfPublications: rowsToList,
          arrayImagesPerPublication: imagesFromPublications
        };
        res.send(responseObject);
    }catch(err){
        let errResponse = 'Something wrong happened in /listItems/';
        console.log(errResponse);
        res.send(errResponse);
    };
});

router.post('/listSingleItem/', async function(req, res, next) {
    try{
        const publicationId = req.body.publicationId;
        let dbm = new DataBaseMediator();
        let query = "SELECT * FROM publicacion WHERE idpub="+publicationId;
        await dbm.executeSelectConsult(query);
        let rowsToList = dbm.getLastSelectDBResponse();
        query = "SELECT idpub, foto FROM fotopublicacionn WHERE idpub="+publicationId;
        await dbm.executeSelectConsult(query);
        let imagesFromPublications = dbm.getLastSelectDBResponse();
        let responseObject = {
          publication: rowsToList,
          publicationImages: imagesFromPublications
        };
        res.send(responseObject);
    }catch(err){
        let errResponse = 'Something wrong happened in /listSingleItem/';
        console.log(errResponse);
        res.send(errResponse);
    };
});

router.post('/addItem/', async function(req, res, next) {
    try {
        const email = req.body.email;
        const titulo = req.body.titulo;
        const descripcion = req.body.descripcion;
        const stock = req.body.stock;
        const precio = req.body.precio;
        let insertConsult ='INSERT INTO publicacion(email, titulo, descripcion, stock, precio) VALUES($1, $2, $3, $4, $5)';
        const values = [email, titulo, descripcion, stock, precio, values];
        let dbm = new DataBaseMediator();
        await dbm.executeInsertConsult(insertConsult, values);
        res.send("Inserted");
    } catch(error) {
        let errResponse = 'Something wrong happened in /addItem/';
        console.log(errResponse);
        res.send(errResponse);
    }
});