const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');
const Memory = mongoose.model('memories');
const Joi = require('joi');

const schema = Joi.object().keys({
    postTitle: Joi.string().min(3).required(),
    postStory: Joi.string().min(3).required()
});

module.exports = (app) => {
    app.get('/memories/get', (req, res) => {
        Memory.find({ _user: req.user.id })
            .sort({ date: -1 })
            .then(memories => {
                res.json(memories);
            });
    });

    app.post('/memories/add', (req, res) => {
        new Memory({
            postTitle: req.body.title,
            postStory: req.body.story,
            _user: req.user.id
        }).save()
            .then(savedMemory => res.json(savedMemory));
    });

    app.delete('/memories/:id', (req, res) => {
        Memory.findById(req.params.id)
            .then(item => item.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }));
    });

}

