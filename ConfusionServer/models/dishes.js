const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.currency;

const commentSchema = new Schema({
  rating:{
    type:Number,
    min:1,
    max:5,
    required:true
  },
  comment;{
    type:String,
    required:true
  },
   comments:[ commentSchema ]
},{
    timestamps:true
});

const dishSchema = new Schema({
  name: {
    type:String,
    required:true,
    unique:true
  },
  description:{
    type:String,
    required:true
  }
},{
timestamps:true
});

var Dishes = mongoose.model('Dish',dishschema);

module.exports=Dishes;