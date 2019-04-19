'use strict';

const Router = require('express').Router();
const UserService = require('./user.service');

Router.route('/')
    .get(async (req, res, next) => {
        let users = await UserService.getAll();
        res.json(users)
    })
    .post(async (req, res, next) => {
       let user = await UserService.create(req.body);
       res.json(user);
    });

Router.route('/:pseudo')
    .get(async (req, res, next) => {
        let user = await UserService.getByPseudo(req.params.pseudo);
        res.json(user);
    });

Router.route('/:pseudo/subscribe')
    .post(async (req, res , next) => {
        let user = await UserService.subscribe(req.params.pseudo);
        res.json(user);
    });

Router.route('/:pseudo/unsubscribe')
    .post(async (req, res , next) => {
        // TODO unsubscribe
        let user = null;
        res.json(user);
    });

module.exports = Router;

