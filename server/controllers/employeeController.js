
const express = require('express');
const router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var {Employee} = require('../models/employee');

//=> localhost:3000/employees/
router.get('/', (req , res) =>{

    Employee.find((err,docs) =>{
        if(!err) {res.send(docs);}
        else {console.log('Error in retriving Employess: '+JSON.stringify(err,undefined,2));}
    });
});

//search with id
router.get('/:id',(req , res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id: ${req.params.id}`);

    Employee.findById(req.params.id,(err,doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Error in retreving employee: '+JSON.stringify(err,undefined,2));}
    });
});

//add employee
router.post('/',(req,res) =>{
    var emp = new Employee({
        name:req.body.name,
        email:req.body.email,
        country:req.body.country,
        phone:req.body.phone
    });
    emp.save((err,doc)=>{
        if(!err) {res.send(doc);}
        else {console.log('Error in Employee save: '+JSON.stringify(err,undefined,2));}
    });
});

//Edit employee
router.put('/:id',(req , res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id: ${req.params.id}`);

    var emp = {
        name:req.body.name,
         email:req.body.email,
         country:req.body.country,
         phone:req.body.phone
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err ,doc)=>{
        if(!err) {res.send(doc);}
        else {console.log('Error in Employee Update: '+JSON.stringify(err,undefined,2));}
    });
});
//Delete Employee
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id: ${req.params.id}`);
      
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) {res.send(doc);}
        else {console.log('Error in Employee Delete: '+JSON.stringify(err,undefined,2));}
    })
});

module.exports = router;