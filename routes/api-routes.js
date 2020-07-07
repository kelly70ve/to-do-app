// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var express = require("express");

// Requiring our Todo model
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    // Need "{ raw: true }" to get a JSON obj
    db.Todo.findAll({ raw: true }).then(function(data) {
      var todosObject = {
        todos: data
      };
      res.render("index", todosObject);
    });
  });

  app.post("/api/todos", function(req, res) {
    db.Todo.create(req.body).then(function(result) {
      res.json({ id: result.insertId });
    });
  });

  app.put("/api/todos/:id", function(req, res) {

  });
  
  app.delete("/api/todos/:id", function(req, res) {

  });
};
