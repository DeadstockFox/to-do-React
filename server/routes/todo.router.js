const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//-----Current Work-----\\

// GET
router.get('/', (req, res) => { // api/todo
    console.log('GET request made');
    const queryText = `SELECT * FROM "todo"`;
    pool.query(queryText).then((r) => {
        res.send(r.rows);  //responding to GET request from client with data sent from database
    }).catch((e) => {
        console.log('Error in server-side GET', e);
        //add alert
    });
});




// POST

// PUT

// DELETE

module.exports = router;
