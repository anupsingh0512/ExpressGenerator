var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const Dishes = require("../models/dishes");

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/")
  .get(function (req, res, next)=> {
   Dishes.find({})
   .then((dish)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     res.json(dishes);
   },(err)=>next(err))
   .catch((err)=>next(err));
  })

  .post(function (req, res, next)=> {
    Dishes.create(req.body)
    .then((dish)=>{
    console.log('Dish Created ',dish );
    res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     res.json(dish);
    })
  })

   .put((req,res,next)=>{
     res.statusCode = 403;
     res.end('PUT operation not supported on dishes')
   })

  .delete(function (req, res, next) {
    Dishes.remove ({})
    .then((resp)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     res.json(dish);
    },(err)=>next(err))
   .catch((err)=>next(err));
  });


dishRouter.route("/:dishId")
 .get(function (req, res, next)=> {
   Dishes.find({})
   .then((dish)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     res.json(dishes);
   },(err)=>next(err))
   .catch((err)=>next(err));
  })

  .post((req,res,next)=>{
     res.statusCode = 403;
     res.end('PUT operation not supported on dishes')
   })

  .put(function (req, res, next) {
    Dishes.findByIdAndUpdate(req.params.dishId,{
      $set:req.body
    },{ new:true })
    .then((dish)=>{
     res.statusCode = 200;
     res.setHeader('Content-Type','application/json');
     res.json(dishes);
   },(err)=>next(err))
   .catch((err)=>next(err));

  })

  .delete(function (req, res, next) {
    Disjes.findByIdAndRemove(req.params.dishId)
  });

exports.router = dishRouter;
