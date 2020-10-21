const router = require('express').Router();
const db = require('../db');

router.post("/", (req, res) => {
    db.run("INSERT INTO sailors (SID, SNAME, RATING, AGE) VALUES (?,?,?,?)",
        [req.body.SID, req.body.SNAME, req.body.RATING, req.body.AGE],
       function (err) {
         if (err) {
            res.json("The Sailor ID has already been used by another Sailor");
             return;
           }
           res.status(201).json("Sailor added successfully");
       });
 });
 
 router.get("/", (req, res) => {
   db.all("SELECT * FROM sailors", [], (err, rows) => {
     if (err) {
       res.status(400).json({ error: err.message });
       return;
     }
     res.status(200).json({ rows });
   });
 });
 
 router.get("/:id",(req,res) => {
   db.get("SELECT * FROM sailors where SID=?",req.params.id,(err,row) =>{
     if(err){
       res.status(400).json({error:err.message})
     }
     res.status(200).json(row);
   })
 })
 
 router.delete("/:id",(req,res) => {
   db.run("DELETE FROM sailors where SID=?",req.params.id,(err) => {
     if(err){
       res.status(400).json({"Error":res.message})
     }
     res.status(200).json("Sailor deleted successfully");
   })
 })
 
 router.put("/:id",(req,res) => {
   db.run("UPDATE sailors set SNAME=?, RATING=?, AGE=? WHERE SID=?",
   [req.body.SNAME,req.body.RATING,req.body.AGE,req.params.id],
   (err) => {
     if(err){
       res.status(400).json({"Error":res.message})
     }
     res.status(200).json("updated successfully")
   })
 })

 module.exports = router;
 