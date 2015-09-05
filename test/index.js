/**
 *  Copyright (c) 2015 Salama AB
 *  All rights reserved
 *  Contact: aksalj@aksalj.me
 *  Website: http://www.aksalj.me
 *
 *  Project : pesajs
 *  File : index
 *  Date : 9/5/15 1:14 PM
 *  Description :
 *
 */
'use strict';

var pesajs = require("../index");
var MPesa = pesajs.MPESA;

var checkout = new MPesa.CheckoutService();

checkout.processCheckOut(function(err, resp) {
    console.error(err);
    console.error(resp);
});