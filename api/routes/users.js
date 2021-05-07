var express = require('express');
var router = express.Router();

var DataBaseMediator = require("../clases/dataBaseMediator");

/* Add USER */
router.post('/addUser/', function(req, res, next){
  try {
    let email = req.body.email;
    let pass = req.body.pass;
    let nombre = req.body.nombre;
    let insertConsult ='INSERT INTO Usuario(email, contraseña, nombre, puntuacion) VALUES($1, $2, $3, $4)';
    const values = [email, pass, nombre, 0];
    let dbm = new DataBaseMediator();
    dbm.executeInsertConsult(insertConsult, values);
    res.send("Inserted");
  } catch (error) {
    console.log(error)
    res.send("Error en /addUser/")
  }
  
})
/* Verify Login Details */
router.post('/login/', async function(req, res, next){
  try {
    let email = req.body.email;
    let pass = req.body.pass;
    let selectConsult ="SELECT COUNT(email) FROM Usuario WHERE email='"+email+"' AND contraseña='"+pass+"'";
    console.log(selectConsult);
    let dbm = new DataBaseMediator();
    await dbm.executeSelectConsult(selectConsult);
    let emailPassMatch = dbm.getLastSelectDBResponse()[0].count;
    console.log(emailPassMatch);
    if(emailPassMatch === '1'){
      res.send("Login Correcto")
    }else{
      res.send("Login Incorrecto")
    }
  } catch (error) {
    console.log(error)
    res.send("Error en /login/")
  }
  
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
