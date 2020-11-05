import * as controller from '../controllers/controller.js';
import express from 'express'; //refers to Express the middleware helper for Node.js

const router = express.Router();

let link = require('../models/link-schema');

router.route('/create').post((req, res, next) => {
    link.create(req.body, (err, data) => {
        if(error) {
            return next(err)
        } 
        else {
            console.log(data)
            res.json(data)
        }
    })
});

router.route('/').get((req, res) => {
    link.find((err, data) => {
        if (err) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
})
export default router; 