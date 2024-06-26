const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//-----Current Work-----\\

// GET
//Responds to request from Client with data pulled from Database
router.get('/', (req, res) => { // api/todo
    console.log('GET request made');

    const queryText = `SELECT * FROM "todo" ORDER BY "priority" DESC NULLS LAST, "id";`;
    pool.query(queryText).then((r) => {
        res.send(r.rows);  //sending from "todo"
    }).catch((e) => {
        console.log('Error in server-side GET', e);
        r.sendStatus(500); //Unexpected error
    });
});


// POST
router.post('/', (req,res) => {
    console.log(req.body);
    const queryText = `INSERT INTO "todo" (description) VALUES($1);`;
    pool.query(queryText, [req.body.description]).then((r) => {
        res.sendStatus(201) //Created
    }).catch((e) => {
        console.log('Error in server-side POST request', e);
        res.sendStatus(500); //Unexpected error
    })
});
// PUT
router.put('/:id', (req, res) => {
    console.log(req.params);

    let queryText = `UPDATE "todo" SET "complete" = NOT "complete" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id]).then((r) => {
        res.sendStatus(201); //Created
    }).catch((e) => {
        console.log('Error in server-side PUT request');
        res.sendStatus(500); //Unexpected Error
    });
});

router.put('/pri/:id', (req, res) => {
    console.log(req.params);
    let queryText = `UPDATE "todo" SET "priority" = NOT "priority" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((r) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log('Error in server-side PUT request', e);
        res.sendStatus(500);
    });
});

// DELETE

router.delete('/:id', (req, res) => {
    console.log('DELETE request', req.params);

    let queryText = `DELETE FROM "todo" WHERE "id" = $1;`;

    pool.query(queryText, [req.params.id]).then((r) => {
        res.sendStatus(200); //Success
    }).catch((e) => {
        console.log('Error in server-side DELETE request', e);
        res.sendStatus(500); //Unexpected Condition
    });
});


module.exports = router;
