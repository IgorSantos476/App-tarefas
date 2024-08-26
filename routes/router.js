const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('../db/db');

    // ROUTER HOME
router.get('/', (req, res) => {
    users.find({}).then(user => {
        res.render('home', {users: user});
    });
});

    // ROUTER ADD
router.get('/add', (req, res) => {
    res.render('addTask');
});

    // ROUTER POST ADD
router.post('/save', (req, res) => {
    let task = req.body.task;

    users({task: task}).save()
        .then(res => console.log(res))
        .catch(err => console.log(err))

    res.redirect('/router');
});

    // ROUTER UPDATE
router.get('/update/:id', (req, res) => {
    users.findById({_id: req.params.id}, req.body.task).then(task => {
        res.render('edit', {task: task});
    });
});

    // ROUTER POST UPDATE
router.post('/edit/:id', (req, res) => {
    users.findByIdAndUpdate({_id: req.params.id}, {$set: {task: req.body.newTask}})
        .then(response => {
            res.redirect('/router')
            console.log(response);
        }).catch(err => console.log(err))
});

    // ROUTER DELETE
router.get('/delete/:id', (req, res) => {
    users.deleteOne({_id: req.params.id})
        .then(response => console.log(response))
        .catch(e => console.log(`Error: ${e}`))

    res.redirect('/router');
});

module.exports = router;