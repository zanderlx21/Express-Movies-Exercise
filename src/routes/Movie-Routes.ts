import express from "express";
const routes = express.Router();

routes.get("/", function(req, res){
    res.json("Home");
});

export default routes;