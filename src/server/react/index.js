import React from 'react';
import express from 'express';
import template from './template';

const router = express.Router();

const htmlString = template();

router.all('*', (req, res, next) => {
    res.send(htmlString);
    // res.send(`<h14>no matter what route this is rendered</h4>`)
    // console.log('222222 res is ', res);
    // console.log('333333 next is ', next);
})

export default router;